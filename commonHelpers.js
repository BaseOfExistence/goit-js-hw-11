import{S as u,i as a}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p=document.querySelector(".form"),m=document.querySelector(".search-input"),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),d=new URLSearchParams({key:"41831359-da2252ca47ee8686c562d4834",q:"cat",image_type:"photo",orientation:"horizontal",safesearch:"true"}),f=new u(".gallery a",{captionDelay:250,captionsData:"alt"});p.addEventListener("submit",n=>{n.preventDefault(),l.classList.remove("is-hidden"),d.set("q",m.value),c.innerHTML="",fetch(`https://pixabay.com/api/?${d}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>{if(t.hits.length>0){const s=t.hits.reduce((o,e)=>o+=`<li class="galleryItem">
                                <a href="${e.largeImageURL}">
                                    <img class="galleryImg" src="${e.webformatURL}" alt="${e.tags}"/>
                                </a>
                                <div class="imgTextCont">
                                    <div class="imgText">
                                        <p>Likes</p>
                                        <p>${e.likes}</p>
                                    </div>
                                    <div class="imgText">
                                        <p>Views</p>
                                        <p>${e.views}</p>
                                    </div>
                                    <div class="imgText">
                                        <p>Comments</p>
                                        <p>${e.comments}</p>
                                    </div>
                                    <div class="imgText">
                                        <p>Downloads</p>
                                        <p>${e.downloads}</p>
                                    </div>
                                </div>
                             </li>`,"");c.innerHTML=s,f.refresh()}else a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(t=>{console.log(t),a.error({message:t,position:"topRight"})}).finally(()=>l.classList.add("is-hidden"))});
//# sourceMappingURL=commonHelpers.js.map
