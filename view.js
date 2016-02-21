// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Shape.prototype.paint = function(ctx, shape) {
    ctx.strokeStyle = shape.color;
    ctx.lineWidth = shape.epaisseur;
}.bind(this);

Rectangle.prototype.paint = function(ctx) {
    ctx.beginPath();
    Shape.prototype.paint.call(this, ctx, this);//Manager color
    ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.beginPath();
    Shape.prototype.paint.call(this, ctx, this);//Manager color
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();

};

Drawing.prototype.paint = function(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
    updateShapeList(this.getForms());
};

var shapeList = document.getElementById('shapeList');

function removeShapeList(evt)
{
    var target = evt.target || window.event.srcElement;
    var span = target.parentNode;
    var ul = span.parentNode;
    var index;
    if (target.nodeName === 'BUTTON')
    {
        index = Array.prototype.indexOf.call(span.parentNode.childNodes, span);
        drawing.remove(index);
        while (ul.firstChild)
        {
            ul.removeChild(ul.firstChild);
        }
        drawing.paint(ctx);
    }
}

shapeList.onclick = removeShapeList;

updateShapeList = function(shapes)
{
    var deleteButton = '<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-remove-sign"></span></button>';
    var shapeListContent = ''; 
    shapes.forEach(function(shape)
    {
        shapeListContent += '<span>' + deleteButton + shape.toString() + '<br></span>';
    });
    shapeList.innerHTML = shapeListContent;
}

var drawing;
var contexte;
function Bridge(draw, ctx)
{
    drawing = draw;
    contexte = ctx;
}
;