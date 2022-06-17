## 介绍

本项目由 [vuepress-theme-vdoing-template](https://github.com/u2sb/vuepress-theme-vdoing-template) 创建。

[vuepress-theme-vdoing-template](https://github.com/u2sb/vuepress-theme-vdoing-template) 是 [vuepress-theme-vdoing](https://github.com/xugaoyi/vuepress-theme-vdoing) 的一个模板仓库，可帮助新用户快速使用 vdoing 主题。

> 本文只是简易文档，详细文档见 [https://vdoing-template.u2sb.com](https://vdoing-template.u2sb.com)
> 本项目仍在测试阶段，如遇到问题，请及时[反馈](https://github.com/u2sb/vuepress-theme-vdoing-template/issues)

## 项目基础

- 默认包管理工具: [yarn 1](https://classic.yarnpkg.com)
- 默认包安装镜像：[npmmirror 中国镜像站](https://npmmirror.com)

## 快速开始

### 基础

在开始之前，您需要了解

- [vuepress](https://v1.vuepress.vuejs.org)
- [vuepress-theme-vdoing](https://doc.xugaoyi.com/)
- [git](https://git-scm.com/)

### 创建仓库

使用 [vuepress-theme-vdoing-template](https://github.com/u2sb/vuepress-theme-vdoing-template) 作为模板创建仓库，详见 [从模板创建仓库](https://docs.github.com/cn/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)

如不需要 github 相关的服务，可直接 clone 此仓库。

### 安装依赖和配置项目

将你自己创建的仓库 clone 到电脑上，并安装以下依赖：

- [Node.js LTS](https://nodejs.org/zh-cn/) (长期维护版)

开启 yarn 支持

```bash
corepack enable
```

修改配置文件

推荐使用 [Visual Studio Code](https://code.visualstudio.com/) 编辑。

- 编辑 `docs/.vuepress/config.ts` 和 `docs/.vuepress/config/` 目录下的其他配置文件，详细见文件内注释。
- 替换 `docs/.vuepress/public/` 下的资源。

> 如不方便 clone ，可使用 [GitHub Codespaces](https://docs.github.com/en/codespaces) 功能在线编辑，[进入编辑器方法](https://github.com/github/dev)为，在你的仓库内，按键盘 `.` 直接进入 (或将 url 的 `.com` 修改为 `.dev`)，然后使用 GitHub 账号登录，即可使用在线编辑功能，保存后一定要记得在编辑器提交更改。

### 测试项目

安装依赖

```bash
yarn install
```

本地测试

```bash
yarn dev
```

> 测试过程中如遇到问题，向其他人请教时务必带有完整的控制台输出信息。

本地构建

```bash
yarn build
```

### 发布项目

模板内的 ci 脚本可部署到多个平台，请修改 `.github/workflows/deploy.yml`，取消注释对应的平台，并注释掉不需要的平台。

目前支持的平台有：

- GitHub
- 又拍云

密钥配置相关见 [详细文档](vdoing-template.u2sb.com)

提交并推送到 GitHub，项目会自动编译。

## 插件推荐

### vuepress

- [vuepress-plugin-fulltext-search](https://www.npmjs.com/package/vuepress-plugin-fulltext-search) (已预装)
- [vuepress-plugin-one-click-copy](https://www.npmjs.com/package/vuepress-plugin-one-click-copy) (已预装)
- [vuepress-plugin-pangu](https://www.npmjs.com/package/vuepress-plugin-spacing) (已预装)
- [vuepress-plugin-sitemap](https://www.npmjs.com/package/vuepress-plugin-sitemap) (已预装)
- [vuepress-plugin-smplayer](https://www.npmjs.com/package/vuepress-plugin-smplayer) (已预装)
- [vuepress-plugin-zooming](https://www.npmjs.com/package/vuepress-plugin-zooming) (已预装)
- [vuepress-plugin-vssue-global](https://www.npmjs.com/package/vuepress-plugin-vssue-global)

### markdown-it

- [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs) (已预装)
- [markdown-it-footnote](https://www.npmjs.com/package/markdown-it-footnote) (已预装)
- [markdown-it-imsize](https://www.npmjs.com/package/markdown-it-imsize) (已预装)
- [markdown-it-mathjax3](https://www.npmjs.com/package/markdown-it-mathjax3) (已预装)
- [markdown-it-sub](https://www.npmjs.com/package/markdown-it-sub) (已预装)
- [markdown-it-sup](https://www.npmjs.com/package/markdown-it-sup) (已预装)
- [markdown-it-task-lists](https://www.npmjs.com/package/markdown-it-task-lists) (已预装)
- [markdown-it-abbr](https://www.npmjs.com/package/markdown-it-abbr) (已预装)
- [markdown-it-ins](https://www.npmjs.com/package/markdown-it-ins) (已预装)
- [markdown-it-multimd-table-ext](https://www.npmjs.com/package/markdown-it-multimd-table-ext) (已预装)

## 提示

如非必要，请勿删除本说明文件，保留本说明文件可以帮助更多的人。
