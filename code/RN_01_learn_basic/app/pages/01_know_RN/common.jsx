// ?RN中常见的修改的配置文件
// todo 1.AndroidManifest.wml---主要是用来添加权限(相机、定位、存储、麦克风等)以及应用的一些元数据(图标等)
// todo 2.mipmap(有多个文件夹，代表分辨率)主要是修改应用的图标
// todo 3.strings.xml修改应用名称
// todo 4.gradle (app/src/build.gradle  app/build.gradle)安装一些第三方库(组件库、应用库)等要修改的配置文件
// todo 5.android\app\src\main\java\com\xxx\MainApplication.java目录下的这个文件是android启动的主要文件 主要用来做一些桥接配置

// ?RN和原生组件之间的对应的关系?
// *RN只不过是一个混合开发框架，可以帮助我们快速、高效开发移动端应用
// *比如：View对应ios中的UIView 对应android中的ViewGroup等等，最终RN中的组件都会被渲染成原生组件
// *RN组件包括：核心组件、第三方组件、自定义组件

// ?原生开发的语言
// 安卓:java kotlin(优于java)
// ios: Object-c swift(swift比较流行)

// ?国内主流应用市场
// todo AppStore + 华为、小米、oppo、vivo

// ?调试包debug  构建发布包release

// ?应用签名

// ?移动端兼容：
// todo 1.尺寸  android 1080*1920以上  ios 375*667以上
// todo 2.版本  android5.0以上 ioc10以上

// ?移动端的热修复机制
// *什么是移动端的热修复机制呢？首先，如果我们的应用发生了线上的错误，这时候我们不可能达到，每个错误都通过让用户更新来修复
// *用户会觉得很麻烦，而且体验不好，所以利用移动端特有的热更新机制我们可以通过热更新在用户不知情的情况下来修复Bug
// todo 要利用的工具：热更新修复工具:pushY(首推:使用率高) appcenter(服务器在国外，因此更新速度较慢)
// !注意：安卓上的热更新成功率利用pushy可以达到99%，不可能达到100%还有山寨机等因素
// !修复一些小的Bug可以利用热更新，大的版本更新还需要通过发版来解决
