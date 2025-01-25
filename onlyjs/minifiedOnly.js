export function create(e,t=""){if(typeof e==="object"){const n=document.createElement(e.type);const o=["div","span","img","input","canvas","br","hr","meta","video","audio"];if(o.includes(e.type.toLowerCase())){n.innerText="";if(e.type==="input"){n.setAttribute("type",e.inputType);n.placeholder=e.placeholder}}else{if(e.type==="label"){n.setAttribute("for",e.htmlFor);n.setAttribute("type",e.htmlType)}n.innerText=e.text||"Haro, Eburi Nyan!"}n.classList.add(e.className);n.id=e.id||"";if(t!==""){for(const s in t){if(t.hasOwnProperty(s)){n.style[s]=t[s]}}}if(t.resp){applyResponsiveStyles(n,t.resp)}window.addEventListener("resize",()=>{if(t.resp){applyResponsiveStyles(n,t.resp)}});return n}else{console.warn(`
  method 'create()' takes object's as argument,
  i.e 'create(elementObj, elementStyleObj)', please provide parms of suitable data type`)}}export function applyResponsiveStyles(e,t){const n=window.innerWidth;if(n<=600&&t.small){Object.assign(e.style,t.small)}else if(n<=1024&&t.medium){Object.assign(e.style,t.medium)}else if(e=>1024&&t.large){Object.assign(e.style,t.large)}}export function addEvent(e,t,n){if(e&&typeof t==="string"&&typeof n==="function"){e.addEventListener(t,n)}else{console.warn("Invalid arguments passed to addEvent().")}}export function setEvent(e,t){if(this&&typeof e==="string"&&typeof t==="function"){this.addEventListener(e,t)}else{console.warn("Invalid arguments passed to setEvent().")}}Object.defineProperty(HTMLElement.prototype,"t",{value:function(e,t){setEvent.call(this,e,t)},writable:true,o:true});export function onlyjs(e){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",e)}else{e()}}export function render(e=document.body,t,n){const o=["after","inside"];const s=t.toLowerCase();if(!o.includes(s)){console.warn(`Incorrect param passed to method render():
whereInDom : string =  'after' or 'inside'
By default the position set to 'document.body.<thisElement>'`);return}switch(s){case o[0]:e.insertAdjacentElement("afterend",n);break;case o[1]:e.appendChild(n);break}}export function clear(){const e={transition:"opacity 2s ease-out",opacity:"0"};document.body.i(e);setTimeout(()=>{document.body.innerHTML=""},2e3)}export function resetStyles(){var e=document.createElement("style");e.textContent=`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, sans-serif;
  }
  /* Add more styles as needed */
`;document.head.appendChild(e)}export function select(e){const t=document.querySelector(e);return t}export function style(e,t){const n=document.querySelector(e);if(typeof t==="object"&&t!==null){for(const o in t){if(t.hasOwnProperty(o)){n.style[o]=t[o]}}if(t.resp){applyResponsiveStyles(n,t.resp)}}else{console.warn(`
    The style method takes objects as arguements,
    'style(elementObj, styleObj);' please provide param of suitable datatype`)}}export function setStyle(e){if(typeof e==="object"&&e!==null){this.style.cssText="";for(const t in e){if(e.hasOwnProperty(t)){this.style[t]=e[t]}}if(e.resp){applyResponsiveStyles(this,e.resp)}}else{console.warn("The setStyle method expects an object as an argument.")}}Object.defineProperty(HTMLElement.prototype,"i",{value:function(e){setStyle.call(this,e)},writable:true,o:true});
