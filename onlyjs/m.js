export function create(e,t=""){if(typeof e==="object"){const o=document.createElement(e.type);const n=["div","span","img","input","canvas","br","hr","meta","video","audio","area","base","br","col","colgroup","command","embed","link","source","track","wbr"];const s=["a","abbr","acronym","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];if(s.includes(e.type.toLowerCase())){if(n.includes(e.type.toLowerCase())){o.innerText="";if(e.type==="input"){o.setAttribute("type",e.inputType);o.placeholder=e.placeholder}}else{if(e.type==="label"){o.setAttribute("for",e.htmlFor);o.setAttribute("type",e.htmlType)}o.innerText=e.text||"Haro, Eburi Nyan!"}o.classList.add(e.className);o.id=e.id||""}else{const i=`
    The html tag/element you are trying to create dosn't exist: use a valid name.
    `;console.warn(i)}if(t!==""){for(const a in t){if(t.hasOwnProperty(a)){o.style[a]=t[a]}}}if(t.resp){applyResponsiveStyles(o,t.resp)}window.addEventListener("resize",()=>{if(t.resp){applyResponsiveStyles(o,t.resp)}});return o}else{console.warn(`
  method 'create()' takes object's as argument,
  i.e 'create(elementObj, elementStyleObj)', please provide parms of suitable data type`)}}
 


export function applyResponsiveStyles(e,t){const o=window.innerWidth;



if (o <= 600 && t.small && Object.keys(t.small).length > 0) {
        Object.assign(e.style, t.small);
    } else if (o <= 1024 && t.medium && Object.keys(t.medium).length > 0) {
        Object.assign(e.style, t.medium);
    } else if (o > 1024 && t.large && Object.keys(t.large).length > 0) {
        Object.assign(e.style, t.large);
    }
}



  export function addEvent(e,t,o){if(e&&typeof t==="string"&&typeof o==="function"){e.addEventListener(t,o)}else{console.warn("Invalid arguments passed to addEvent().")}}export function setEvent(e,t){if(this&&typeof e==="string"&&typeof t==="function"){this.addEventListener(e,t)}else{console.warn("Invalid arguments passed to setEvent().")}}Object.defineProperty(HTMLElement.prototype,"t",{value:function(e,t){setEvent.call(this,e,t)},writable:true,o:true});export function onlyjs(e){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",e)}else{e()}}(function(){if(typeof main==="function"){onlyjs(main)}else{console.log("welcome to onlyjs, The palce where you only need JS")}})();export function render(e=document.body,t,o){const n=["after","inside"];const s=t.toLowerCase();if(!n.includes(s)){console.warn(`Incorrect param passed to method render():
whereInDom : string =  'after' or 'inside'
By default the position set to 'document.body.<thisElement>'`);return}const i=e instanceof NodeList?e[0]:e;switch(s){case n[0]:i.insertAdjacentElement("afterend",o);break;case n[1]:i.appendChild(o);break}}export function clear(){const e={transition:"opacity 2s ease-out",opacity:"0"};document.body.i(e);setTimeout(()=>{document.body.innerHTML=""},2e3)}export function resetStyles(){var e=document.createElement("style");e.textContent=`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, sans-serif;
  }
  /* Add more styles as needed */
`;document.head.appendChild(e)}export function select(e){const t=document.querySelectorAll(e);return t}function n(e){if(e instanceof NodeList){return e}if(e instanceof Element){return[e]}if(typeof e==="string"){try{const o=document.querySelectorAll(e);if(o){return o}else{console.log("The selector (id, class, node) string-name is invalid, no element found!")}}catch(t){console.error("Invalid selector string:",t)}}}export function style(e,t){e=n(e);if(typeof t==="object"&&t!==null){for(const o in t){if(t.hasOwnProperty(o)){e.forEach(e=>{e.style[o]=t[o]})}}if(t.resp){applyResponsiveStyles(e,t.resp)}}else{console.warn(`
    The style method takes objects as arguements,
    'style(elementObj, styleObj);' please provide param of suitable datatype`)}}export function setStyle(t){if(typeof t==="object"&&t!==null){if(this instanceof NodeList||this instanceof HTMLCollection){this.forEach(function(e){e.i(t)})}else{this.style.cssText="";for(const e in t){if(t.hasOwnProperty(e)){this.style[e]=t[e]}}if(t.resp){applyResponsiveStyles(this,t.resp)}}}else{console.warn("The setStyle method expects an object as an argument.")}}Object.defineProperty(HTMLElement.prototype,"i",{value:function(e){setStyle.call(this,e)},writable:true,o:true});Object.defineProperty(NodeList.prototype,"i",{value:function(e){setStyle.call(this,e)},writable:true,o:true});
