// ?安卓手机如何真机调试?
// todo 1.用USB调试 通过USB线连接电脑，打开开发者选项==>USB调试==>重新连接USB==>同意调试即可
// todo 2.通过adb建立调试桥，比如在uni-app中就可以选择相应的设备(真机设备)运行调试了
// *除了USB还可以使用局域网wifi连接 ad connect ip:5555 不过这种方式有风险，为了防止注入木马等病毒，不建议wifi连接

// ?adb常用命令
// todo 1.adb devices 查看设备（安卓、pad、TV） offline 表示设备未连接成功或无响应，device 设备已连接
// todo 2.adb kill-server 停止adb服务
// todo 3.adb start-server 开启adb服务
// todo 4.建立连接 adb connect ip:端口 关闭连接 adb disconnect ip:端口
// todo 5.端口映射 用于调试debug到浏览器上 adb reverse tcp:8081 tcp:8081
// todo 6.进入沙盒（进入手机查看文件等） adb shell
// todo 7.查看adb 版本 adb version
// todo 8.下载、卸载 adb install xxx  adb uninstall xxx
// todo 9.进入沙盒之后，可以adb push 电脑路径 手机文件路径 上传文件
// adb pull 手机文件 电脑路径

// ?移动端ui结构
// *由上向下 statusbar(电量、时间、网络信号等)、actionBar(也可以称之为navbar)一个导航栏、container(内容区)、navigation(导航:返回上一级、回到桌面等)

// ?移动端页面载体
// !在原生开发中可以有多个页面载体:从一个页面跳转到另一个页面，两个载体
// !在RN中全局只有一个载体：从一个页面跳转到另一个页面,而是用JS重新渲染了一个页面ui去覆盖原来的ui，只有一个页面载体(有需要可以特殊配置)

// ?移动端特有的交互形式
// *这里指的是navigation导航栏下面的返回、直接退出、回到桌面等
