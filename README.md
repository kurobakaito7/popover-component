# 🫧Popover-component

基于 floating-ui ——专门用于 tooltip、popover、dropdown 等浮动组件的库

用 useFloating 的 hook 来计算位置，用 useIntersections 的 hook 来处理交互

封装了一层，加了一些参数，然后把浮层用 createPortal 渲染到了 body 下
