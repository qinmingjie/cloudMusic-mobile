#### 遇到的问题

```
//本地运行
  - git clone http:...
  - npm start
```

- 状态管理函数的初始值为空，在组件异步请求数据结束前，新数据未赋值给状态数据前，拿的的数据为状态数据初始值，导致组件渲染出错

  解决方法：
  - 使用三目运算符来判断数据拿到的状态数据是不是初始值，然后在渲染组件
  - 使用Promise操作，在异步数据请求完成后在执行获取状态数据和渲染组件

- 页面中计时器清除不干净，跳转页面后计时器任然存在

  解决方法：
  - 计时器的返回值为number，在函数中生命数组，放入所有的计时器值，清除计时器时遍历数组删除相应的计时器
  - 在React中每次页面更新都会出发Effect，所以在每次页面更新时都需要清除上一次的计时器

- 更具每个请求数据的状态不同来决定loading组件显示和隐藏时，切换页面后再返回上一个页面显示组件已被卸载，服用状态会有内存泄漏危险

  解决方法：
  - 创建状态管理函数，和修改action函数，在所有需要请求数据的action操作函数中来调用修改loading的action操作函数，达到修改loading的目的
  

![avatar](./src/static/img/project1.png)
![avatar](./src/static/img/project2.png)
![avatar](./src/static/img/project3.png)
![avatar](./src/static/img/project4.png)
![avatar](./src/static/img/project5.png)