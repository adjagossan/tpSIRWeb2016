// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing() {
    this.shapes = new Array();

    this.addShape = function(shape) {
        if (shape instanceof Shape)
            this.shapes.push(shape);
    }.bind(this);

    this.getForms = function() {
        return this.shapes;
    }.bind(this);
    
    this.remove = function(index){
        return this.shapes.splice(index, 1)[0];
    }.bind(this);
    
    this.size = function(){
        return this.shapes.length;
    }.bind(this);
}
;

function Shape(color, epaisseur) {
    this.color = color;
    this.epaisseur = epaisseur;
}
;

function Line(dotAx, dotAy, dotBx, dotBy, epaisseur, color) {
    Shape.call(this, color, epaisseur);

    this.dotAx = dotAx;
    this.dotAy = dotAy;
    this.dotBx = dotBx;
    this.dotBy = dotBy;

    this.getInitX = function() {
        return this.dotAx;
    }.bind(this);
    
    this.setInitX = function(dotAx) {
        this.dotAx = dotAx;
    }.bind(this);

    this.getInitY = function() {
        return this.dotAy;
    }.bind(this);
    
    this.setInitY = function(dotAy) {
        this.dotAy = dotAy;
    }.bind(this);

    this.getFinalX = function() {
        return this.dotBx;
    }.bind(this);
    
    this.setFinalX = function(dotBx) {
        this.dotBx = dotBx;
    }.bind(this);
    
    this.getFinalY = function() {
        return this.dotBy;
    }.bind(this);
    
    this.setFinalY = function(dotBy) {
        this.dotBy = dotBy;
    }.bind(this);
    
    this.toString = function(){
        return 'Line('+this.getInitX()+', '+this.getInitY()+', '+this.getFinalX()+', '+this.getFinalY()+')';
    }.bind(this);
}
;

function Rectangle(posX, posY, width, height, epaisseur, color) {
    Shape.call(this, color, epaisseur);

    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.heigth = height;

    this.getInitX = function() {
        return this.posX;
    }.bind(this);

    this.getInitY = function() {
        return this.posY;
    }.bind(this);

    this.getFinalX = function() {
        return this.width;
    }.bind(this);
    
    this.setFinalX = function(width) {
        this.width = width - this.posX;
    }.bind(this);

    this.getFinalY = function() {
        return this.heigth;
    }.bind(this);
    
    this.setFinalY = function(heigth) {
        this.heigth = heigth - this.posY;
    }.bind(this);
    
    this.toString = function(){
        return 'Rectangle('+this.getInitX()+', '+this.getInitY()+', '+this.getFinalX()+', '+this.getFinalY()+')';
    }.bind(this);
}
;

Line.prototype = new Shape();
Rectangle.prototype = new Shape();