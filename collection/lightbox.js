class lightBox{
    constructor(_contain){
        this.contain = _contain;
        this.contain.innerHTML=
            `
            <i class="fas fa-angle-left"></i>
            <div class="imgContain">
                <img>
            </div>
            <i class="fas fa-angle-right"></i>
            `;
        this.nextBtn = this.contain.querySelector(".fa-angle-right");
        this.prevBtn = this.contain.querySelector(".fa-angle-left");
        this.hide = this.hide.bind(this);
        this.showNext = this.showNext.bind(this);
        this.showPrev = this.showPrev.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.contain.addEventListener('click', this.hide);
        document.addEventListener('keydown', this.handleKeyDown);
        this.nextBtn.addEventListener('click', this.showNext);
        this.prevBtn.addEventListener('click', this.showPrev);
        this.hide();
    }
    show(){
        this.contain.style.display = "";
    }
    hide(){
        this.contain.style.display = "none";
    }
    changeImg(_img, _id){
        this.img = _img;
        this.id = _id;
        this.contain.querySelector("img").src = this.img;
    }
    handleKeyDown(e){
        if(e.key === "ArrowRight"){
            this.showNext(e);
        }
        if(e.key === "ArrowLeft"){
            this.showPrev(e);
        }
    }
    showNext(e){
        e.stopPropagation();
        this.id = (this.id+1)%imgList.length;
        this.img = `img/${imgList[this.id]}`;
        this.contain.querySelector("img").src = this.img;
    }
    showPrev(e){
        e.stopPropagation();
        this.id = (this.id+imgList.length-1)%imgList.length;
        this.img = `img/${imgList[this.id]}`;
        this.contain.querySelector("img").src = this.img;
    }
}