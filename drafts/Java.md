## 多版本管理

http://www.jenv.be/

## 老版本

- brew tap caskroom/versions
- brew cask install java6

## 注解

> 假如你想为应用设置很多的常量或参数，这种情况下，XML 是一个很好的选择，因为它不会同特定的代码相连。如果你想把某个方法声明为服务，那么使用 Annotation 会更好一些，因为这种情况下需要注解和方法紧密耦合起来，开发人员也必须认识到这点。

### 元注解

- @Retention
- @Target
- @Inherited
- @Documented
- @interface

### 注解保留策略

@Retention(RetentionPolicy.SOURCE) 注解仅在源码中保留,class 文件中不存在
@Retention(RetentionPolicy.CLASS) 注解在源码和 class 文件中都存在,但运行时不存在,即运行时无法获得,该策略也是默认的保留策略
@Retention(RetentionPolicy.RUNTIME) 注解在源码,class 文件中存在且运行时可以通过反射机制获取

### 注解作用对象

### 注解处理器

运行时处理器需要借助反射机制实现,而编译时处理器则需要借助 APT 来实现.

