# Mock

#### basic rule

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Mock
 * 
 * 
 * 拦截 ajax，返回模拟生成的数据
 */

npm install --save-dev mockjs


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 语法规范
 * 
 * 
 * 
 */

'name|rule': type
    
'属性名|生成规则': 属性值类型


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 数据模版定义仅限于以下规则
 * 
 * 
 * 生成规则的含义需要依赖 "属性值的类型" 才能确定
 * 
 * 属性值可以含有 "@占位符"
 * 
 * 属性值还指定了最终值的 "初始值" 和 "类型"
 */


1) 'name|min-max': valueType

2) 'name|count': valueType

3) 'name|min-max.dmin-dmax': valueType

4) 'name|min-max.dcount': valueType

5) 'name|count.dmin-dmax': valueType

6) 'name|count.dcount': valueType

7) 'name|+step': valueType


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### best practices

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 生成数据

mock_base_rule                      // 指令式生成规则

Mock.random[method]();              // 预定义的生成 api


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 数据拦截

1) 可请求 在线工具生成的 mockjs 的数据

2) 可利用 Mock.mock(url, template); 拦截 ajax 请求


/**
 * Mock.mock(rurl?, rtype?, template | function(options));
 *
 *
 * @rurl: 表示需要拦截的 URL，可以是 URL 字符串或 URL 正则
 * @rtype: 表示需要拦截的 Ajax 请求类型
 * @template: 表示数据模板，可以是对象或字符串
 * @function(): 表示用于生成响应数据的函数
 * @options: 指向本次请求的 Ajax 选项集，含有 url、type 和 body 三个属性
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```
