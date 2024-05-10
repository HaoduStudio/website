import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "每日手帐",
  description: "DailyNotes操作文档",
  head: [
    ["script", { src: "//code.tidio.co/ja0zr5nrdcd0fnn6lksr7wi0c6d36848.js" }],
    ["script", { src: "https://www.googletagmanager.com/gtag/js?id=G-91VRX6N8WK" }],
    [
      "script",
      {},
      `\
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-91VRX6N8WK');
      `,
    ],
  ],
  theme,

});
