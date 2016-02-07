// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    // Définir ici les attributs de la 'classe'
    this.posXinit = 0;
    this.posYinit = 0;
    this.posXfinal = 0;
    this.posYfinal = 0;
    this.mouseIsPressed = false;

    // Developper les 3 fonctions gérant les événements
    this.maFctGerantLaPression = function(evt) {
        var res;
        switch (evt.which) {
            case 1:
                res = getMousePosition(canvas, evt);
                this.posXinit = res.x;
                this.posYinit = res.y;
                this.mouseIsPressed = true;
                console.log("posXinit:" + this.posXinit);
                console.log("posYinit:" + this.posYinit);
                break;
        }

    }.bind(this);

    this.maFctGerantLeDeplacement = function(evt) {
        if (this.mouseIsPressed) {

        }
    }.bind(this);

    this.maFctGerantLeRelachement = function(evt) {
        var res;
        if (this.mouseIsPressed) {
            res = getMousePosition(canvas, evt);
            this.posXfinal = res.x;
            this.posYfinal = res.y;
            mouseIsPressed = false;
            console.log("posXfinal:" + this.posXfinal);
            console.log("posYfinal:" + this.posYfinal);
        }
    }.bind(this);

    // Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener('mousedown', this.maFctGerantLaPression, false);
    canvas.addEventListener('mousemove', this.maFctGerantLeDeplacement, false);
    canvas.addEventListener('mouseup', this.maFctGerantLeRelachement, false);

}
;

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
;



