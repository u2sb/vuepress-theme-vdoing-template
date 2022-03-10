// 主题配置，详见 https://doc.xugaoyi.com

import nav from "./nav";
import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";

export default <VdoingThemeConfig>{
  nav: nav, // 上方导航栏配置, 如需修改请修改 nav.ts
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: "/assets/img/logo.png", // 导航栏Logo
  repo: "u2sb/vuepress-theme-vdoing-template", // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: "上次更新", // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
  docsDir: "docs", // 编辑的文件夹
  editLinks: true, // 启用编辑
  editLinkText: "编辑", // 编辑链接文字

  //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

  category: true, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的front matter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
  tag: true, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的front matter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
  archive: true, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
  // bodyBgImg: [
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
  // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
  // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
  // titleBadge: false, // 文章标题前的图标是否显示，默认true
  // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
  //   '图标地址1',
  //   '图标地址2'
  // ],
  // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状
  // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
  // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
  // pageButton: false, // 是否显示快捷翻页按钮，默认true

  sidebarOpen: true, // 初始状态是否打开侧边栏，默认true
  sidebar: { mode: "structuring", collapsable: true }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义

  updateBar: {
    // 最近更新栏
    showToArticle: false, // 显示到文章页底部，默认true
    moreArticle: "/archives", // “更多文章”跳转的页面，默认'/archives'
  },

  author: {
    // 文章默认的作者信息，可在.md文件front matter中单独配置此信息 String | {name: String, link: String}
    name: "MonologueChi", // 必需
    link: "https://blog.xxwhite.com", // 可选的
  },

  // 博主信息，显示在首页侧边栏
  // blogger: {
  //   avatar:
  //     "https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg",
  //   name: "Evan Xu",
  //   slogan: "前端界的小学生",
  // },

  // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
  social: {
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: "icon-QQ",
        title: "QQ",
        link: "/assets/html/qq-groups.html",
      },
      {
        iconClass: "icon-bilibili",
        title: "哔哩哔哩",
        link: "https://space.bilibili.com/28474682",
      },
      {
        iconClass: "icon-github",
        title: "GitHub",
        link: "https://github.com/u2sb/vuepress-theme-vdoing-template",
      },
      {
        iconClass: "icon-youjian",
        title: "发邮件",
        link: "mailto:xxwhite@foxmail.com",
      },
    ],
  },
  footer: {
    // 页脚信息, 请根据实际情况修改, 删掉不需要的部分
    createYear: 2022, // 博客创建年份
    copyrightInfo: `
      <a href='https://blog.xxwhite.com' target='_blank'>MonoLogueChi</a> | <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/' rel='external nofollow' target='_blank'>CC BY-NC-SA 4.0</a>
      <br>
      <a href="http://beian.miit.gov.cn/" target="_blank">蒙ICP备12345678号-1</a>
    `, // 博客版权信息，支持a标签
  },
};
