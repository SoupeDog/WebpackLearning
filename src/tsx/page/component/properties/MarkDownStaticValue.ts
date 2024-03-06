export const editor_id_for_browser: string = "editor_id_browser";
export const key_draft: string = "md_draft";

// 就是说不做安全校验直接渲染 Markdown 文本里的 html 标签等，常规方案是通过 sanitize-html 库做验证
export function allowAll(html: string) {
    return html
}