var editingMode = {rect: 0, line: 1};
var shape;

function Pencil(ctx, drawing, canvas)
{
    this.currEditingMode = editingMode.line;
    this.currLineWidth = 5;
    this.currColour = '#000000';
    this.currentShape = 0;

    // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
    this.customizeShape = function(inputTypeColorId, inputTypeNumberId)
    {
        this.currColour = document.getElementById(inputTypeColorId).value;
        this.currLineWidth = document.getElementById(inputTypeNumberId).value;
        var inputs = document.getElementsByTagName('input');
        var counter = 0;
        while (counter < inputs.length)
        {
            if (inputs[counter].checked && inputs[counter].type === 'radio')
            {
                this.currentShape = counter;
                counter = 0;
                break;
            }
            counter++;
        }
    }.bind(this);

    new DnD(canvas, this);
    new Bridge(drawing, ctx);
    // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    this.onInteractionStart = function(DnD) {
        this.customizeShape('colour', 'spinnerWidth');
        switch (this.currentShape)
        {
            case editingMode.rect:
                shape = new Rectangle(DnD.posXinit, DnD.posYinit, DnD.posXfinal, DnD.posYfinal, this.currLineWidth, this.currColour);
                break;
            case editingMode.line:
                shape = new Line(DnD.posXinit, DnD.posYinit, DnD.posXfinal, DnD.posYfinal, this.currLineWidth, this.currColour);
                break;
        }
    }.bind(this);

    this.onInteractionUpdate = function(DnD) {
        shape.setFinalX(DnD.posXfinal);
        shape.setFinalY(DnD.posYfinal);
    }.bind(this);

    this.onInteractionEnd = function(DnD) {
        if (shape.getFinalX() !== 0 && shape.getFinalY() !== 0)
        {
            drawing.addShape(shape);
            drawing.paint(ctx);
        }
    }.bind(this);
}
;


