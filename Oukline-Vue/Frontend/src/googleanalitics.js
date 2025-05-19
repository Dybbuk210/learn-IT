export default function (router) {
  router.afterEach((to) => {
    if (typeof gtag !== "undefined") {
      gtag('config', 'G-XXXXXXXXXX', {
        page_path: to.fullPath,
      });
    }
  });
}