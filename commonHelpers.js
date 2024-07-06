import{i as u,S as g}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function p(l){return fetch(`https://pixabay.com/api/?key=44790936-a9a83b9ad64ff44b33786cafe&q=${l}&image_type=photo&orientation=horizontal&safesearch=true`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}document.addEventListener("DOMContentLoaded",()=>{const l=document.querySelector(".search-form"),o=document.querySelector(".gallery");if(!o){console.error("Gallery element not found");return}l.addEventListener("submit",a);function a(r){r.preventDefault();const i=r.currentTarget,c=i.elements.query.value.toLowerCase();p(c).then(n=>{n.hits.length===0?u.warning({title:"No Images Found",message:"Sorry, there are no images matching your search query. Please try again!"}):(s(),e(n.hits))}).catch(n=>{u.error({title:"Error",message:`Something went wrong: ${n.message}`})}).finally(()=>i.reset())}function s(){o.innerHTML=""}function e(r){const i=t(r);o.insertAdjacentHTML("afterbegin",i)}function t(r){return r.map(({webformatURL:i,largeImageURL:c,tags:n,likes:f,views:m,comments:d,downloads:y})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${c}" onclick="event.preventDefault()">
          <img
            class="gallery-image"
            src="${i}"
            alt="${n}"
            width="360"
            height="200"
          />
          <ul class="gallery-info">
            <li  class="gallery-item-text"><p>Likes ${f}</p></li>
            <li class="gallery-item-text"><p>Views ${m}</p></li>
            <li class="gallery-item-text"><p>Comments ${d}</p></li>
            <li  class="gallery-item-text"><p>Downloads ${y}</p></li>
          </ul>
        </a>
      </li>`).join("")}});let h=new g(".gallery a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});h.refresh();
//# sourceMappingURL=commonHelpers.js.map
