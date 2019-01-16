class App{
    constructor(_contain){
        this.contain = _contain;
        this.ctx = this.contain.querySelector("canvas").getContext("2d");
        this.modelImg = new Image();
        this.modelImg.addEventListener('load',(function(){
            this.ctx.drawImage(this.modelImg,0,50,500,382);
        }).bind(this));
        this.modelImg.src="img/changeCloth/model.png";

        this.clothes = [];

        this.draw = this.draw.bind(this);
        document.addEventListener('drawImg', this.draw);
        this.restore = this.restore.bind(this);
        this.contain.querySelector(".fa-undo-alt").addEventListener('click', this.restore);
        this.reset = this.reset.bind(this);
        this.contain.querySelector(".fa-trash-alt").addEventListener('click', this.reset);
        this.saveImg = this.saveImg.bind(this);
        this.contain.querySelector(".fa-camera").addEventListener('click', this.saveImg);

        for(let i in clothData){
            console.log(i);
            new Cloth(this.contain.querySelector(".clothFolder"), i);
        }
    }
    draw(e){
        let newImg = new Image();
        let that = {
            'ctx': this.ctx,
            'newImg': newImg,
            'data': clothData[e.detail.id]
        }
        newImg.addEventListener('load',(function(){
            this.ctx.drawImage(this.newImg,this.data.x,this.data.y,this.data.w,this.data.h);
        }).bind(that));
        newImg.src='img/changeCloth/'+clothData[e.detail.id].img;
        this.clothes.push({'id':e.detail.id, 'img':newImg});
    }
    reset(e){
        this.ctx.clearRect(0, 0, 500, 500);
        this.ctx.drawImage(this.modelImg,0,50,500,382);
        this.clothes.forEach((d)=>{
            document.dispatchEvent(new CustomEvent('restore', {'detail':{'id':d.id}}));
        });
        this.clothes = [];
    }
    restore(e){
        let lastMove = this.clothes.pop();
        if(lastMove==undefined) return;
        document.dispatchEvent(new CustomEvent('restore', {'detail':{'id':lastMove.id}}));
        this.ctx.clearRect(0, 0, 500, 500);
        this.ctx.drawImage(this.modelImg,0,50,500,382);
        for(let i of this.clothes){
            let data = clothData[i.id];
            this.ctx.drawImage(i.img,data.x,data.y,data.w,data.h);
        }
    }
    saveImg(e){
        this.downloadURI(this.contain.querySelector("canvas").toDataURL(), 'Pusheen.png')
    }
    downloadURI(uri, name) {
        let link = document.createElement("a");
        //link.style.display="none";
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}