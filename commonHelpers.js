import{S as g,i as A}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==";function h(r){let t=r.hits.map(({webformatURL:o,largeImageURL:a,tags:e,likes:s,views:i,comments:u,downloads:p})=>`<li class="gallery-item">
      <div class="image-wrapper"><a href="${a}"><img class="image" src="${o}" alt="${e}" width="360"
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
            <p class="text-list-param">${u}</p>
          </li>
          <li class="text-list-item">
            <h3 class="text-list-title">Downloads</h3>
            <p class="text-list-param">${p}</p>
          </li>
        </ul>
      </div>
    </li>`).join("");return l.innerHTML=t}const d={captionsData:"alt",captionDelay:250},y=new g(".image-gallery a",d);function x(r){return fetch(r).then(t=>{if(!t.ok)throw new Error("Image error!");return t.json()}).then(t=>(t.hits.length===0&&(A.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",theme:"dark",iconUrl:f,iconColor:"#fafafb",messageSize:"16",closeOnEscape:!0,maxWidth:"432",position:"topRight"}),l.innerHTML=""),h(t),y.refresh())).catch(t=>{console.log(t)})}const w=document.querySelector(".form"),n=document.querySelector("input[name=message]"),l=document.querySelector(".image-gallery"),c={key:"42476589-1f9c9241784e75b96bc1ad3a5",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};let m="https://pixabay.com/api/?";w.addEventListener("submit",r=>{r.preventDefault(),l.innerHTML='<span class="loader"></span>',c.q=n.value,m+=new URLSearchParams(c),n.value="",x(m)});
//# sourceMappingURL=commonHelpers.js.map
