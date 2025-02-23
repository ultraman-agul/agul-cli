export interface TemplateInfo {
  name: string; // 模板名称
  downloadUrl: string; // 模板下载地址
  description: string; // 模板描述
  branch: string; // 模板分支
}

export const templates: Map<string, TemplateInfo> = new Map([
  [
    "Geeker-Admin",
    {
      name: "geeker-admin",
      downloadUrl: "https://gitee.com/HalseySpicy/Geeker-Admin.git",
      description: " Vue3.4、TypeScript、Vite5、Pinia、Element-Plus",
      branch: "master",
    },
  ],
  [
    "Plus-UI",
    {
      name: "plus-ui",
      downloadUrl: "https://gitee.com/JavaLionLi/plus-ui.git",
      description: "若依Vue全家桶",
      branch: "ts",
    },
  ],
  [
    "Unibest",
    {
      name: "unibest",
      downloadUrl: "https://gitee.com/feige996/unibest.git",
      description:
        "uniapp + Vue3 + Ts + Vite4 + UnoCss + UniUI 驱动的跨端快速启动模板",
      branch: "base",
    },
  ],
]);