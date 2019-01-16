setTimeout(function(){
    document.querySelector(".selectBar").scrollIntoView({'behavior':'smooth', 'block':'start'})
},2000);

var app = new App(document.querySelector(".container"));