const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let n=null;e.addEventListener("click",(function(o){e.disabled=!0,n=setInterval((function(){t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),o.addEventListener("click",(function(t){e.disabled=!1,clearInterval(n)})),console.log(t);
//# sourceMappingURL=01-color-switcher.73cd8913.js.map
