// 配置说明 https://v1.vuepress.vuejs.org/zh/config/#markdown

import { MarkdownConfig } from "vuepress/config";

export default <MarkdownConfig>{
  lineNumbers: true,
  plugins: [
    "markdown-it-sub",
    "markdown-it-sup",
    "markdown-it-footnote",
    "markdown-it-task-lists",
    "markdown-it-attrs",
    "markdown-it-imsize",
    "markdown-it-mathjax3",
    "markdown-it-abbr",
    "markdown-it-ins",
    "markdown-it-multimd-table-ext",
  ],
  extendMarkdown: (md) => {
    md.set({ breaks: true });
  },
  extractHeaders: ["h2", "h3", "h4", "h5", "h6"], // 提取标题到侧边栏的级别，默认['h2', 'h3']
};
