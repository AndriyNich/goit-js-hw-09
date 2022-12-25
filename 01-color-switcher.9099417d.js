let t=!1,e=0;document.querySelector("[data-start]").addEventListener("click",(()=>{t||(t=!0,e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3))})),document.querySelector("[data-stop]").addEventListener("click",(()=>{clearInterval(e),t=!1}));
//# sourceMappingURL=01-color-switcher.9099417d.js.map
