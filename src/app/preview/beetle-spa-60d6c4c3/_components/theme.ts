/* Concept A theme: shared by the inline init script and the toggle. */

export const THEME_ROOT_ID = "bs-a";
export const THEME_STORAGE_KEY = "beetle-spa-theme";

/* Runs inline as the first child of the theme root, before anything paints:
   saved choice first, then prefers-color-scheme, then light. */
export const themeInitScript = `(function(){var r=document.currentScript.parentElement,t;try{t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)})}catch(e){}if(t!=="light"&&t!=="dark"){t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}r.setAttribute("data-theme",t)})()`;
