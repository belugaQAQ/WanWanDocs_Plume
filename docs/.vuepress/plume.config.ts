import { defineThemeConfig } from 'vuepress-theme-plume'
import navbar from './navbar'
import collections from './collections'

export default defineThemeConfig({
  logo: '/Cerby.webp',
  aside: true, // 页内侧边栏， 默认显示在右侧
  outline: [2, 3], // 页内大纲， 默认显示 h2, h3  
  social: [
    { icon: 'github', link: 'https://github.com/belugaQAQ/WanWanDocs_Plume' },
    { icon: 'fluent:map-24-filled',link: 'http://mc.classisband.xyz:42764/'},
  ],
  navbarSocialInclude: ['github', 'fluent:map-24-filled'],

  footer: {
    message: '<a href="https://github.com/belugaQAQ/WanWanCraftDocs">WanWanCraft文档</a><br>腐竹与文档作者<a href="https://xn--fjqu59cvx0aoqi.icu/about/">ClassIsBand</a>',
  },

  navbar,
  collections,


  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
    page: true,        // 启用 页面间跳转过渡动画
    postList: true,    // 启用 博客文章列表过渡动画
    appearance: 'circle-clip',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  },
  
})
