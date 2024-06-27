import{A as P,i as d,S as $}from"./assets/vendor-cf73e4e9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();function T({webformatURL:t,largeImageURL:o,tags:r,likes:n,views:e,comments:i,downloads:s}){return`<li class="liElem"><a href="${o}">
        <img src=${t} alt=${r} data-source=${o}/></a>
        <div>
            <p>likes: <span>${n}</span></p>
            <p>views: <span>${e}</span></p>
            <p>comments: <span>${i}</span></p>
            <p>downloads: <span>${s}</span></p>
        </div>
    </li>`}function h(t){return t.map(T).join("")}async function y(t,o){const r=P.create({baseURL:"https://pixabay.com/api/",params:{key:"44428338-9196df2338f39a1a95b2ab25e",image_type:"photo",orientation:"horizontal",q:`${t}`,safesearch:!0,per_page:15,page:o}});try{return(await r.get("")).data}catch(n){console.log(n)}}const g=document.querySelector(".form-el"),c=g.querySelector(".input-search"),v=document.querySelector(".loader"),p=document.querySelector(".img-list"),m=document.querySelector(".load");let a=1;const L=15;let l=1;const x="";g.addEventListener("submit",t=>{t.preventDefault(),p.innerHTML="",c.value.trim()===""&&d.error({title:"Error",message:"Enter your details. Please try again!",position:"topRight"}),a=1,E(),f(),M(c.value.trim(),a)});m.addEventListener("click",()=>{a++,E(),f(),B(x,a)});async function B(t,o){try{const r=await y(t,o);l=Math.ceil(r.total/L),r.total===0&&(u(),S());const n=h(r.hits);p.insertAdjacentHTML("beforeend",n),b(),A()}catch{q()}w(),u(),c.value=""}function O(){m.classList.remove("visually-hidden")}function f(){m.classList.add("visually-hidden")}function A(){const t=document.querySelectorAll(".liElem");if(t.length>0){const o=t[0].getBoundingClientRect().height;window.scrollBy({top:o*2,left:0,behavior:"smooth"})}}async function M(t,o){try{const r=await y(t,o);l=Math.ceil(r.total/L),r.total===0&&(u(),S());const n=h(r.hits);p.insertAdjacentHTML("beforeend",n),b()}catch{q()}w(),u(),c.value=""}function w(){a>=l?(f(),l&&d.info({message:"We're sorry, but you've reached the end of search results."})):O()}function b(){new $(".img-list a",{overlayOpacity:.9,captionDelay:250,captionsData:"alt"}).refresh()}function u(){v.classList.add("visually-hidden")}function E(){v.classList.remove("visually-hidden")}function S(){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function q(){d.warning({message:"Problem with server!",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
