const img=document.querySelector("img[usemap]"),areas=[...document.querySelectorAll("map area")],orig=areas.map(a=>a.coords.split(",").map(Number));
function fit(){const k=img.clientWidth/1000;areas.forEach((a,i)=>a.coords=orig[i].map(v=>Math.round(v*k)).join(","))}
addEventListener("load",fit);addEventListener("resize",fit);