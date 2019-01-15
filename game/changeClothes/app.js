class App{
    constructor(_contain){
        this.contain = _contain;
        this.gameLayer = document.createElement('div');
        this.gameLayer.classList.add('gamelayer');
        this.ghostLayer = document.createElement('div');
        this.ghostLayer.classList.add('ghostlayer');
        this.ghostLayer.style['pointer-events'] = "none";

        this.dragging = false;

        document.addEventListener('createGhost', this.createGhost.bind(this));
        this.ghostLayer.addEventListener('pointerup',this.releaseGhost.bind(this));
        this.ghostLayer.addEventListener('pointermove',this.onDrag.bind(this));

        new Cloth(this.gameLayer, "img/tumblr_nw8mthksql1qfkm6lo1_640.gif.png", 0);

        this.contain.appendChild(this.gameLayer);
        this.contain.appendChild(this.ghostLayer);
    }

    createGhost(e){
        this.ghostLayer.style['pointer-events'] = ""; //to cache point up
        this.dragging = true;
        this.flyingGhost = document.createElement('img');
        this.flyingGhost.src = e.detail.img;
        console.log(this.ghostLayer.getBoundingClientRect().left, this.ghostLayer.getBoundingClientRect().top);
        console.log(e.detail);
        this.f_originX = e.detail.absPos.x;
        this.f_originY = e.detail.absPos.y;
        this.f_totalX = 0;
        this.f_totalY = 0;

        //let realX = (e.detail.absPos.x-e.detail.relPos.x)-this.ghostLayer.getBoundingClientRect().left;
        //let realY = (e.detail.absPos.y-e.detail.relPos.y)-this.ghostLayer.getBoundingClientRect().top;
        let realX = e.detail.absPos.x-this.ghostLayer.getBoundingClientRect().left;
        let realY = e.detail.absPos.y-this.ghostLayer.getBoundingClientRect().top;
        console.log(realX, realY);
        this.f_initX = realX;
        this.f_initY = realY;
        this.flyingGhost.style.top = `${realY}px`;
        this.flyingGhost.style.left = `${realX}px`;
        this.ghostLayer.appendChild(this.flyingGhost);

        //TODO spawn in right position
    }
    releaseGhost(){
        this.ghostLayer.style['pointer-events'] = "none"; //Prevent block event
        this.dragging = false;
    }
    onDrag(e){
        if(!this.dragging) return;
        e.preventDefault();
        this.flyingGhost.style.left = `${this.f_initX+e.clientX-this.f_originX}px`;
        this.flyingGhost.style.top = `${this.f_initY+e.clientY-this.f_originY}px`;

    }
}