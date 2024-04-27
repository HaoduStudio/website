import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "每日手帐",
  description: "DailyNotes操作文档",

  theme,

});
