# svg

## svg 命名空间

    <svg xmlns="http://www.w3.org/2000/svg"
     		xmlns:xlink="http://www.w3.org/1999/xlink">
    </svg>

这个在 html 里面可以省略，只写 svg 标签也是可以的

## svg 嵌套

svg 标签是可以嵌套的

    <svg>
    	<svg x="100' y="100">
    	</svg>
    </svg>

即可完成嵌套

## svg line

    <line x1="" y1="" x2="" y2=""
    	style="
    		stroke:#f10;
    		stroke-width: 5;
    		stroke-opacity: 0.5;
    		stroke-dasharray:10 10;
    		fill:#none;
    	"
    />

顾名思义就是一条线
dasharray 分别是 dash 长度和空白的长度

## svg rect

其实这个和 line 差不多，只有一组 xy，另外有个 height 和 width
rx ry 代表的是 radius
style 基本一样

## svg circle

属性：cx cy 圆心的位置 r 半径 其他略

## svg ellipse

属性：cx cy 椭圆心的位置 rx ry 分别是长轴短轴

## svg polyline

属性：points 里面有若干组点用空格隔开
如：points=“22,22 33,33"

## svg polygon

属性：同 polyline 只不过这个是自动闭合的

## svg path

path 是最高级的绘图标签
属性：d
需要用一系列的命令来完成绘图
M 命令：移动光标到指定位置 如 M100,100
L 命令：从光标位置到指定位置画线 如 L150,150
A 命令：画弧，如 A30,50 0 0,1 100,100
30,50 分别表示 x、y 轴的 radius 100,100 表示目的地 0 表示 x 轴的旋转
0,1 表示优弧劣弧和方向，优弧位如果是 1 表示优弧，反之是劣弧，方向如果是 1 和 0 表示两种方向
Q 命令：二次贝塞尔曲线，如 Q20,250 200,300，第一个值表示控制点，第二个值表示终点
C 命令：三次贝塞尔曲线，如 C20,250 20,250 200,300，多了一个控制点，最后一个是终点
Z 命令：可以闭合曲线
相对位置和绝对位置：大写是绝对位置，小写是相对位置

## svg image

属性：x y width height xlink:href transform(for example, transform="rotate(5) scale(1.5,1)")

## svg text

属性：x y
textLength
lengthAdjust：spacing spacingAndGlyphs
transform：
rotate，rotate(30 20,40)表示围绕点 20,40 旋转 30 度
style 多了很多：{
text-anchor，有三个值 start middle end，可以决定文字的锚点
letter-spacing，表示文字间距 同理有 word-spacing
writing-mode，tb 表示 top to bottom，竖直的模式
glyph-orientation-vertical，0 表示字母是横着的
direction:rtl; unicode-bidi:bidi-override 可以让字母排列反向
font-family
font-size
text-decoration:underline overline line-through
}
此外还有 tspan tref textpath 标签
