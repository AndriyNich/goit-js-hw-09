!function(){var t=!1,e=0;document.querySelector("[data-start]").addEventListener("click",(function(){t||(t=!0,e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3))})),document.querySelector("[data-stop]").addEventListener("click",(function(){clearInterval(e),t=!1}))}();
//# sourceMappingURL=01-color-switcher.a2a3b43b.js.map