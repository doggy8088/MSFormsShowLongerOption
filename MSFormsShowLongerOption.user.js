// ==UserScript==
// @name         MSFormsShowLongerOption
// @namespace    https://blog.miniasp.com/
// @version      0.1
// @description  調整 Microsoft Forms 回應頁面顯示較寬的選項內容(180px to 350px)
// @author       Will Huang
// @match        https://forms.office.com/Pages/DesignPage.aspx*
// @icon         https://www.google.com/s2/favicons?domain=office.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var decodeEntities = (function() {
        // this prevents any overhead from creating the object each time
        var element = document.createElement('div');

        function decodeHTMLEntities (str) {
            if(str && typeof str === 'string') {
                // strip script/html tags
                str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
                str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
                element.innerHTML = str;
                str = element.textContent;
                element.textContent = '';
            }

            return str;
        }

        return decodeHTMLEntities;
    })();

    let id = setInterval(function() {

        let all = document.getElementsByClassName('chart-control-legend-label');
        for (let item of all) {
            // item.style.maxWidth = 'inherit';
            item.style.maxWidth = '350px';
            item.innerText = decodeEntities(item.innerText)
        }

    }, 500);

    setTimeout(() => {
        clearInterval(id);
    }, 5000);

})();