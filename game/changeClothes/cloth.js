class Cloth{
    constructor(_contain, _img, _id){
        this.contain = _contain;
        this.img = _img;
        this.id = _id;
        this.dx = 0;
        this.dy = 0;
        this.content = document.createElement('img');
        this.content.src = this.img;
        this.contain.appendChild(this.content);
        this.pointDown = this.pointDown.bind(this);
        this.content.addEventListener('pointerdown', this.pointDown);
    }
    delete(){
        this.content.removeEventListener('pointerdown', this.pointDown);
        this.content.outerHTML="";
    }
    pointDown(e){
        console.log('clicked')
        this.delete();
        document.dispatchEvent(new CustomEvent('createGhost',{
            detail:{
                'absPos':{
                    x:e.screenX,
                    y:e.screenY
                },
                'relPos':{
                    x:e.clientX,
                    y:e.clientY
                }
            }
        }))
    }
}