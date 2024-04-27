import comp from "F:/Code/DailyNotes-Project/website/my-docs/src/.vuepress/.temp/pages/started/index.html.vue"
const data = JSON.parse("{\"path\":\"/started/\",\"title\":\"快速上手\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"快速上手\",\"lang\":\"zh-CN\",\"description\":\"快速上手每日手帐\",\"icon\":\"forward\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://dailynotes.top/started/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"每日手帐\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"快速上手\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"快速上手每日手帐\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"MengXi\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"快速上手\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"MengXi\\\",\\\"url\\\":\\\"https://mengxiblog.top/\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"我知道你很急但你先别急\",\"slug\":\"我知道你很急但你先别急\",\"link\":\"#我知道你很急但你先别急\",\"children\":[]}],\"readingTime\":{\"minutes\":0.1,\"words\":30},\"filePathRelative\":\"started/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
