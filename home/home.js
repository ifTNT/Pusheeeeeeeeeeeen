setTimeout(function(){ 
    var delloading=document.querySelector(".loading");
    var delhidden=document.querySelector(".hidden");
    delloading.classList.add('hidden');
    delhidden.classList.remove('hidden');
 }, 2000);

 var pos=0;
 var cat=document.querySelector(".pull");
 document.addEventListener('scroll',meow);
 function meow(event){
    cat.src='main.png';
    pos=window.scrollY;
    if(pos>0){
        cat.style.right=pos*((window.innerWidth-100)/window.innerHeight)+'px';
        cat.style.transition="all 0.1s";
    }
    //if(pos>=scrollHeight){
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        cat.src='pusheen-gif-pusheen-love-pusheen-stuff-dancing-cat-kawaii-cat-cute-pusheen-cat-png-324_307.png';
    }
    //console.log(pos)
 }