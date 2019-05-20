# js 中 rem 和 px 转换的方法

getComputedStyle(document.documentElement).fontSize 可以得到 fontsize

然后

```
function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
```
