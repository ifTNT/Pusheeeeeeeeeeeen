class app{
    constructor(){
        this.works = [];
        this.container = document.querySelector(".container");
        for(let i=0; i<imgList.length; i++){
            let newWork = new work(this.container, `img/${imgList[i]}`, i);
            this.works.push(newWork);
        }        
        this.lightBox = new lightBox(document.querySelector(".lightBox"));
        document.addEventListener('showLightBox', (function(e){
            this.lightBox.changeImg(e.detail.img, e.detail.id);
            this.lightBox.show(); 
        }).bind(this));
    }
}

function init(){
    window.app = new app();
}

init();