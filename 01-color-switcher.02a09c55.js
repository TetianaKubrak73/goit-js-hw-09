!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),a=document.body;function d(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}e.addEventListener("click",(function(){t||(t=setInterval(d,1e3),e.disabled=!0,n.disabled=!1)})),n.addEventListener("click",(function(){t&&(clearInterval(t),t=null,e.disabled=!1,n.disabled=!0)}))}();
//# sourceMappingURL=01-color-switcher.02a09c55.js.map