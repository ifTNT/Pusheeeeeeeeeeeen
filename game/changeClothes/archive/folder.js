class Folder{
    constructor(_contain, _clothes){
        this.contain = _contain;
        this.content = document.createElement('div');
        this.content.innerHTML = `
            <i class="fas fa-angle-left"></i>
            <div class="imgContain">
                <img>
            </div>
            <i class="fas fa-angle-right"></i>
        `
        this.contain.appendChild(this.content);
        this.clothes = _clothes;
        this.kClothes = Object.keys(this.clothes);
        this.current=0;
        this.nextBtn = this.contain.querySelector(".fa-angle-right");
        this.prevBtn = this.contain.querySelector(".fa-angle-left");
        this.showNext = this.showNext.bind(this);
        this.showPrev = this.showPrev.bind(this);
    }
    showNext(e){
        e.stopPropagation();
        this.current = (this.current+1)%this.clothes.length;
        if(!this.clothes[this.kClothes[this.current]].enable){ //There are only one disabled
            this.current = (this.current+1)%this.clothes.length;
        }
        this.img = `img/${this.clothes[this.kClothes[this.current]].img}`;
        this.contain.querySelector("img").src = this.img;
    }
    showPrev(e){
        e.stopPropagation();
        this.current = (this.current+this.clothes.length-1)%this.clothes.length;
        if(!this.clothes[this.kClothes[this.current]].enable){ //There are only one disabled
            this.current = (this.current+this.clothes.length-1)%this.clothes.length;
        }
        this.img = `img/${this.clothes[this.kClothes[this.current]].img}`;
        this.contain.querySelector("img").src = this.img;
    }
    enableCloth(_id){
        this.clothes[_id].enable = true;
        //this.clothes.append({'img':_img, 'id':_id});
    }
    disableCloth(_id){
        this.clothes[_id].enable = false;
    }
}