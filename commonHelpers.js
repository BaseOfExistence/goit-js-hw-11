import{S as d,i as u}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p=document.querySelector(".form"),m=document.querySelector(".search-input"),a=document.querySelector(".gallery"),c=document.querySelector(".loader"),l=new URLSearchParams({key:"41831359-da2252ca47ee8686c562d4834",q:"cat",image_type:"photo",orientation:"horizontal",safesearch:"true"}),f=new d(".gallery a",{captionDelay:250,captionsData:"alt"});p.addEventListener("submit",n=>{n.preventDefault(),c.classList.remove("is-hidden"),l.set("q",m.value),fetch(`https://pixabay.com/api/?${l}`).then(t=>{if(!t.ok)throw new Error;return t.json()}).then(t=>{if(a.innerHTML="",t.hits[0]){const s=t.hits.reduce((o,e)=>o+=`<li class="galleryItem">
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
                             </li>`,"");c.classList.add("is-hidden"),a.innerHTML=s,f.refresh()}else u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(t=>console.log(t))});
//# sourceMappingURL=commonHelpers.js.map
