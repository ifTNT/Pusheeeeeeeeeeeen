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

    createGhost(){
        this.ghostLayer.style['pointer-events'] = ""; //to cache point up
        this.dragging = true;
        this.flyingGhost = new Cloth(this.ghostLayer, "img/tumblr_nw8mthksql1qfkm6lo1_640.gif.png", 0);
    
    }
    releaseGhost(){
        this.ghostLayer.style['pointer-events'] = "none"; //Prevent block event
        this.dragging = false;
    }
    onDrag(e){
        if(!this.dragging) return;
        this.flyingGhost.content.style.top = ``
    }
}