# z-index 的各种问题

## 同时使用 z-index transition transform 导致页面抖动

解决方案：在抖动的部位加-webkit-backface-visibility: hidden;

在 transform 里面加 translateZ(0)

## 两个 z-index, 虽然一个数值更高，但是却在另一个下面

那是因为他爸更低
