let t=0;const e={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};function r(t){t?(e.btnStart.setAttribute("disabled","true"),e.btnStop.removeAttribute("disabled")):(e.btnStart.removeAttribute("disabled"),e.btnStop.setAttribute("disabled","true"))}e.btnStart.addEventListener("click",(()=>{t=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),r(!0)})),e.btnStop.addEventListener("click",(()=>{clearInterval(t),r(!1)})),r(!1);
//# sourceMappingURL=01-color-switcher.f69b1b59.js.map
