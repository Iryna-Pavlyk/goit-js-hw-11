import{S as f,i as h}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const d=document.querySelector(".form"),c=document.querySelector("input[name=message]"),o=document.querySelector(".image-gallery"),n={key:"42476589-1f9c9241784e75b96bc1ad3a5",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0},g={captionsData:"alt",captionDelay:250};let u="https://pixabay.com/api/?";const y=new f(".image-gallery a",g);function x(r){return fetch(r).then(t=>{if(!t.ok)throw new Error("Image error!");return t.json()}).then(t=>{t.hits.length===0&&(h.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",theme:"dark",iconUrl:"./public/octagon.svg",iconColor:"#fafafb",messageSize:"16",closeOnEscape:!0,maxWidth:"432",position:"topRight"}),o.innerHTML=""),b(t)}).catch(t=>{console.log(t)})}d.addEventListener("submit",r=>{r.preventDefault(),o.innerHTML='<span class="loader"></span>',n.q=c.value,u+=new URLSearchParams(n),c.value="",x(u),y.refresh()});function b(r){let t=r.hits.map(({webformatURL:l,largeImageURL:a,tags:e,likes:s,views:i,comments:m,downloads:p})=>`<li class="gallery-item">
      <div class="image-wrapper"><a href="${a}"><img class="image" src="${l}" alt="${e}" width="360"
                    height="200"></a></div>
      <div class="text-wrapper">
        <ul class="text-list">
          <li class="text-list-item">
            <h3 class="text-list-title">Likes</h3>
            <p class="text-list-param">${s}</p>
          </li>
          <li class="text-list-item">
            <h3 class="text-list-title">Views</h3>
            <p class="text-list-param">${i}</p>
          </li>
          <li class="text-list-item">
            <h3 class="text-list-title">Comments</h3>
            <p class="text-list-param">${m}</p>
          </li>
          <li class="text-list-item">
            <h3 class="text-list-title">Downloads</h3>
            <p class="text-list-param">${p}</p>
          </li>
        </ul>
      </div>
    </li>`).join("");o.innerHTML=t}
//# sourceMappingURL=commonHelpers.js.map
