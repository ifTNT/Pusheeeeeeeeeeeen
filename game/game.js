setTimeout(function(){
    document.querySelector(".selectBar").scrollIntoView({'behavior':'smooth', 'block':'start'})
},1500);

var app = new App(document.querySelector(".container"));