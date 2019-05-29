# 理解 js 中的 this

## 执行环境(execution context)

其实大众的翻译是执行上下文，但我觉得翻译成执行环境更好，上下文？是什么鬼。

js 是各种 object 组成的，其中浏览器中最外层的 object 是 window

每个 object 都包涵一定的属性和 function

每当有新的 function invoked (也就是执行) 的时候，这个 function 附着的 object(不考虑 bind apply 等情况)，就会成为新的 execution context (执行环境) ，并且这个 execution context 进入 excution stack

execution context 既然是某个 object，那么他就会包涵 variable environment，也就是 object 的那些个属性

## this

this 指向一个 object，也就是执行当前 js 代码段的 object，也就是 execution context.

## 怎么看 this 指向谁？

this 取决于 function 是如何被唤醒的

```
   function a(){
       console.log(this);
   }
   a();
```

对于普通的 function，他们都直接附着于 window(唤醒它的环境也是 window)，因此 this 是 window

```
    var c = {
        name:'name',
        log:function(){
            console.log(this);
        }
    }
    c.log();
```

对于某个 object 的 function，他们附着于这个 object(唤醒它的环境也是这个 object)，因此 this 是这个 object(也就是 c)

```
function bike() {
  console.log(this.name);
}

var name = "Ninja";
var obj = { name: "Pulsar" }

bike();           // "Ninja"
bike.call(obj);   // "Pulsar"
```

如果调用了 call bind apply, 那么唤醒 function 的 object 会变成 call bind apply 的第一个参数，this 就会变成第一个参数所指的对象

```
function bike() {
  var name = "Ninja";
  this.maker = "Kawasaki";
  console.log(this.name + " " + maker);  // undefined Bajaj
}

var name = "Pulsar";
var maker = "Bajaj";

obj = new bike();
console.log(obj.maker);                  // "Kawasaki"
```

关键字 new 可以将 function 变成 constructor，这时：

1. 一个崭新的 object 被建立了
2. 新的 object 的 prototype 属性中有这个 function，并且这个 function 是 constructor
3. 这个新的 object 会变成这个 function 的执行环境，也就是 this
4. 如果这个 function 什么都没有返回的话，它会默认返回 this

所以在上面的例子中，bike()执行的时候，this 是新创建的 obj

maker 是 window 的 maker(当自身 local scope 和外部环境 global scope 同时有名字相同的变量时候，如果没有在前面指定 object 如：this.variable，默认是 global)，this.maker 是 obj 的 maker

```
    var c = {
        name:'name',
        log:function(){

            var log2 = function(){
                console.log(this)
            }

            log2();
        }
    }
    c.log();
```

这种情况，function 是在 function 里面定义的，也就是说这个 function 并没有直接的 object。那么这种情况下 this 是什么呢？

如果直接复制这段代码在 chrome console 里运行的话，你会发现 this 是 window(也就是 global)，但是执行这个 function 的 object 并不是 window，这是为什么呢？

有些人说这个是 js 的 bug，毕竟 js 也是人类写的，也会有 bug。

但我更倾向于它是默认行为。当一个 function 找不到执行它的 object 的时候，this 默认为 window。

如果使用 strict mode 的话，这里的 this 就会变成 undefined

可是在很多时候，程序员会误以为这里的 this，是 c，那么如果想访问 c 的话有什么办法呢？

方法有很多：

```
    var c = {
        name:'name',
        log:function(){
            var self = this;
            var log2 = function(){
                console.log(self)
            }

            log2();
        }
    }
    c.log();
```

这是一种常用做法

```
    var c = {
        name:'name',
        log:function(){

            var log2 = ()=>{
                console.log(this)
            }

            log2();
        }
    }
    c.log();
```

箭头函数自身没有 this，所以这个也可以

甚至还可以使用 bind。

## 总结

1. 首先看有没有 new，如果有 new 的话 this 就是新的 object
2. 看有没有 call apply bind，如果有的话那就是第一个参数
3. 看他的 context object 也就是唤醒它的 object(多数情况是直属 object)
4. 默认情况为 global object(strict mode 是 undefined)

## 参考文章

[JavaScript — all about “this” keyword](https://codeburst.io/all-about-this-and-new-keywords-in-javascript-38039f71780c)
