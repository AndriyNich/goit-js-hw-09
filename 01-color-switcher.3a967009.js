!function(){var t=0,e={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};function n(t){t?(e.btnStart.setAttribute("disabled","true"),e.btnStop.removeAttribute("disabled")):(e.btnStart.removeAttribute("disabled"),e.btnStop.setAttribute("disabled","true"))}e.btnStart.addEventListener("click",(function(){t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),n(!0)})),e.btnStop.addEventListener("click",(function(){clearInterval(t),n(!1)})),n(!1)}();
//# sourceMappingURL=01-color-switcher.3a967009.js.map