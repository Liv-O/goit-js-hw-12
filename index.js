import{a as S,S as w,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();async function y(e,r){const a="52541009-8475ad66b76bd384e4dad34fd";let s=15;const t=new URLSearchParams({key:a,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:s});return(await S.get(`https://pixabay.com/api/?${t}`)).data}let c;function h(e){const r=document.querySelector(".gallery"),a=e.map(({webformatURL:s,largeImageURL:t,tags:o,views:l,likes:p,comments:b,downloads:L})=>`<li class="gallery-item">
        <a class="gallery-link" href="${t}">
           <img
              class="gallery-image"
              src="${s}"
              alt="${o}"
            />
        </a>
        <table class="gallery-item-desc">
         <tr>
          <th>Likes</th>
          <th>Views</th>
          <th>Comments</th>
          <th>Downloads</th>
         </tr>
         <tr>
          <td>${p}</td>
          <td>${l}</td>
          <td>${b}</td>
          <td>${L}</td>
         </tr>
        </table>
       </li>`).join("");r&&(r.insertAdjacentHTML("beforeend",a),c?c.refresh():c=new w(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),c.on("show.simplelightbox",function(s){console.log(`opened image : ${s.target.querySelector("img").alt} :) `)}))}function q(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function f(){const e=document.querySelector(".loader");e&&e.classList.remove("hidden")}function u(){const e=document.querySelector(".loader");e&&e.classList.add("hidden")}function g(){const e=document.querySelector(".load-btn");e&&e.classList.remove("hidden")}function v(){const e=document.querySelector(".load-btn");e&&e.classList.add("hidden")}const P=document.querySelector(".form"),$=document.querySelector("input"),M=document.querySelector(".load-btn");let d,m,i=1,O=15;const x=async function(e){if(e.preventDefault(),i=1,d=e.target.elements["search-text"].value.toLowerCase().trim(),d==="")n.error({message:"Fill your answer"});else{$.value="",f(),q();try{const{hits:r,totalHits:a}=await y(d,i);u(),m=Math.ceil(a/O),r.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(h(r),i++,i>=m?n.warning({message:"We're sorry, but you've reached the end of search results."}):g())}catch(r){u(),n.error({message:`Sorry, ${r}`})}}};async function B(e){v(),f();try{const{hits:r}=await y(d,i);if(u(),r.length===0)n.error({message:"Sorry, there are no images matching your search query. Please try again!"});else{h(r);const a=document.querySelector(".gallery-item");let{height:s}=a.getBoundingClientRect();s*=2,window.scrollBy({top:s,behavior:"smooth"}),i++,i>=m?n.warning({message:"We're sorry, but you've reached the end of search results."}):g()}}catch(r){u(),n.error({message:`Sorry, ${r}`})}}P.addEventListener("submit",x);M.addEventListener("click",B);
//# sourceMappingURL=index.js.map
