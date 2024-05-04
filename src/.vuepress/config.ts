import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "每日手帐",
  description: "DailyNotes操作文档",
  head: [
    [
      "script",
      {},
      `\
        (function(d, w, c) {
            w.ChatraID = 'tAi3YDBi6MnEnWsJ9';
            var s = d.createElement('script');
            w[c] = w[c] || function() {
                (w[c].q = w[c].q || []).push(arguments);
            };
            s.async = true;
            s.src = 'https://call.chatra.io/chatra.js';
            if (d.head) d.head.appendChild(s);
        })(document, window, 'Chatra');
      `,
    ],
  ],
  theme,

});
