import{A as y,i as p,S as g}from"./assets/vendor-cf73e4e9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const d=15;let c=1;async function v(t,o){const r=y.create({baseURL:"https://pixabay.com/api/",params:{key:"44428338-9196df2338f39a1a95b2ab25e",image_type:"photo",orientation:"horizontal",q:`${t}`,safesearch:!0,per_page:d,page:o}});try{const{data:i}=await r.get("");return c=i.totalHits/d,o>=c&&(c&&p.info({message:"We're sorry, but you've reached the end of search results."}),a()),i.hits}catch(i){console.log(i)}}const L=document.querySelector(".img-list");async function b(t,o){try{const r=await v(t,o);if(r&&r.length>0){const i=S(r);L.insertAdjacentHTML("beforeend",i),E()}else return p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),!1}catch(r){console.log(r)}}function w({webformatURL:t,largeImageURL:o,tags:r,likes:i,views:e,comments:s,downloads:n}){return`<li class="liElem"><a href="${o}">
        <img src=${t} alt=${r} data-source=${o}/></a>
        <div>
            <p>likes: <span>${i}</span></p>
            <p>views: <span>${e}</span></p>
            <p>comments: <span>${s}</span></p>
            <p>downloads: <span>${n}</span></p>
        </div>
    </li>`}function S(t){return t.map(w).join("")}function E(){new g(".img-list a",{overlayOpacity:.9,captionDelay:250,captionsData:"alt"}).refresh()}const f=document.querySelector(".form-el"),m=f.querySelector(".input-search"),q=document.querySelector(".loader"),$=document.querySelector(".img-list"),l=document.querySelector(".load");let u=1;f.addEventListener("submit",t=>{t.preventDefault(),$.innerHTML="",u=1,a(),h()});l.addEventListener("click",()=>{u++,a(),h()});async function h(){if(m.value.trim()===""){a();return}else await b(m.value.trim(),u)?(x(),O()):a();q.classList.add("visually-hidden")}function x(){l.classList.remove("visually-hidden")}function a(){l.classList.add("visually-hidden")}function O(){const t=document.querySelectorAll(".liElem");if(t.length>0){const o=t[0].getBoundingClientRect().height;window.scrollBy({top:o*2,left:0,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
