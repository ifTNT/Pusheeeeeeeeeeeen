class Cloth{
    constructor(_contain, _id){
        this.contain = _contain;
        this.id = _id;
        this.content = document.createElement('img');
        this.content.src = `img/changeCloth/${clothData[this.id].img}`;
        this.contain.appendChild(this.content);
        this.clicked = this.clicked.bind(this);
        this.restore = this.restore.bind(this);
        document.addEventListener('restore', this.restore);
        this.content.addEventListener('click', this.clicked);
    }
    show(){
        this.content.style.display="";
    }
    hide(){
        this.content.style.display="none";
    }
    clicked(e){
        this.hide();
        document.dispatchEvent(new CustomEvent('drawImg', {'detail':{'id':this.id}}));
    }
    restore(e){
        if(e.detail.id===this.id) this.show();
    }
}