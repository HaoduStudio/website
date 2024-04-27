export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/Code/DailyNotes-Project/website/my-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"首页","i":"home"} }],
  ["/started/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/Code/DailyNotes-Project/website/my-docs/src/.vuepress/.temp/pages/started/index.html.js"), meta: {"t":"快速上手","i":"forward"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/Code/DailyNotes-Project/website/my-docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
