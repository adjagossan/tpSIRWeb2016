
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
    this.shapes = new Array();
    
    this.addShape = function(shape){
        if(shape instanceof Shape)
            this.shapes.push(shape);
    }.bind(this);
    
    this.getForms = function(){
        return this.shapes;
    }
};

Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        // now fill the canvas
        console.log(Object.prototype.toString.call(eltDuTableau));
        eltDuTableau.paint(ctx);
    });
};


function Shape(color, epaisseur){
    this.color = color;
    this.epaisseur = epaisseur;
};

Shape.prototype.paint = function(ctx){
   ctx.fillStyle = this.color;
   ctx.lineWidth = this.epaisseur;
}

function Line(dotAx, dotAy, dotBx, dotBy, epaisseur, color){
    Shape.call(this, color, epaisseur);
    
    this.dotAx = dotAx;
    this.dotAy = dotAy;
    this.dotBx = dotBx;
    this.dotBy = dotBy;
    
    this.getInitX = function(){
        return this.dotAx;
    }.bind(this);
    
    this.getInitY = function(){
        return this.dotAy;
    }.bind(this);
    
    this.getFinalX = function(){
        return this.dotBx;
    }.bind(this);
    
    this.getFinalY = function(){
        return this.dotBy;
    }.bind(this);
    
};

Line.prototype.paint = function(ctx) {
//TODO Manager color
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();

};

function Rectangle(posX, posY, width, height, epaisseur, color){
    Shape.call(this, color, epaisseur);
    
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.heigth = height;
    
    this.getInitX = function(){
        return this.posX;
    }.bind(this);
    
    this.getInitY = function(){
        return this.posY;
    }.bind(this);
    
    this.getFinalX = function(){
        return this.width;
    }.bind(this);
    
    this.getFinalY = function(){
        return this.heigth;
    }.bind(this);
};

Rectangle.prototype.paint = function(ctx) {
//TODO Manager color
    ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

Line.prototype = new Shape();
Rectangle.prototype = new Shape();
