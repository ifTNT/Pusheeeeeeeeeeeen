class work{
    constructor(_contian, _img, _id){
        this.contain = _contian;
        this.img = _img;
        this.id = _id;
        this.onClick = this.onClick.bind(this);
        let content = document.createElement('img');
        content.src = this.img;
        this.content = content;
        this.contain.appendChild(content);
        this.content.addEventListener('click', this.onClick);
    }
    onClick(){
        document.dispatchEvent(new CustomEvent('showLightBox', {'detail':{id:this.id, img:this.img}}));
    }
}