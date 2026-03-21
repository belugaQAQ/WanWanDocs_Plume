/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/',icon: 'fluent:home-12-filled' },
  { text: '指南',link: '/doc/guide/',icon: 'fluent:compass-northwest-16-filled' },
  { text: '指令',link: '/doc/command/easyauth',icon: 'fluent:window-dev-tools-16-regular' },
])
