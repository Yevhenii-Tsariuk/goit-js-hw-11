import{S as f,i as g}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function h(a){return fetch(`https://pixabay.com/api/?key=44790936-a9a83b9ad64ff44b33786cafe&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})}function y(a){return a.map(({webformatURL:r,largeImageURL:l,tags:o,likes:e,views:t,comments:s,downloads:u})=>`
       <li class="gallery-item">
         <a class="gallery-link" href="${l}" onclick="event.preventDefault()">
           <img
             class="gallery-image"
             src="${r}"
             alt="${o}"
             width="360"
             height="200"
           />
           <ul class="gallery-info">
             <li  class="gallery-item-text">
             <h3 class="gallery-subtitle">Likes</h3>
             <p class ="gallery-text">${e}</p></li>
 
             <li class="gallery-item-text">
             <h3 class="gallery-subtitle">Views</h3>
             <p class ="gallery-text">${t}</p></li>
 
             <li class="gallery-item-text">
             <h3 class="gallery-subtitle">Comments</h3>
             <p class ="gallery-text">${s}</p></li>
 
             <li  class="gallery-item-text">
             <h3 class="gallery-subtitle">Downloads</h3>
             <p class ="gallery-text">${u}</p></li>
 
           </ul>
         </a>
       </li>`).join("")}document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".search-form"),r=document.querySelector(".gallery"),l=document.querySelector(".loader");if(!r){console.error("Gallery element not found");return}const o=new f(".gallery a",{captionsData:"alt",captionDelay:250});a.addEventListener("submit",e);function e(i){i.preventDefault();const n=i.currentTarget,d=n.elements.query.value.toLowerCase().trim();t(),h(d).then(c=>{u(),c.hits.length===0?g.warning({position:"center",messageSize:"16",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FAFAFB",maxWidth:450}):(m(c.hits),o.refresh())}).catch(c=>{g.error({position:"center",messageSize:"16",messageLineHeight:"150%",title:"Error",message:`Something went wrong: ${c.message}`,backgroundColor:"#EF4040",messageColor:"#FAFAFB"})}).finally(()=>{n.reset(),s()})}function t(){l.classList.add("visible")}function s(){l.classList.remove("visible")}function u(){r.innerHTML=""}function m(i){const n=y(i);r.insertAdjacentHTML("afterbegin",n)}});
//# sourceMappingURL=commonHelpers.js.map
