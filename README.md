# tiktok

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

# 2020-7-22总结

1.vue+ts实现父组件执行子组件的方法 (参考Recome.vue和MyVideo.vue)
2.vue+ts中的computed计算属性，直接在方法前加个get修饰就可以了
3.当对象中嵌套对象时，会出现类型报错，这时需要使用类型断言，比如 Person.zhang.sayName() ，这种写法大概率会出现类型错误，无法确认对象zhang的类型，所以给zhang加个类型断言就可以了：(Person.zhang as any).sayName() 
