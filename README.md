#### 遇到的问题
- 状态管理函数的初始值为空，在组件异步请求数据结束前，新数据未赋值给状态数据前，拿的的数据为状态数据初始值，导致组件渲染出错

  解决方法：
  - 使用三目运算符来判断数据拿到的状态数据是不是初始值，然后在渲染组件
  - 使用Promise操作，在异步数据请求完成后在执行获取状态数据和渲染组件

- 