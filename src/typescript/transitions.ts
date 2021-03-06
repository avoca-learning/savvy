interface Transition {
    from:string;
    to:string;
    duration:number;
    inverse:Transition;
}

module Transition {
    
    /* CUT */
    
    export var CUT:Transition = {
        from: "transition -d0ms -static",
        to: "transition -d0ms -static",
        duration: 0,
        inverse: null
    }

    /* SLIDE */
    
    export var SLIDE_LEFT:Transition = {
        from: "transition -d333ms -ease-in-out -out -left",
        to: "transition -d333ms -ease-in-out -in -left",
        duration: 333,
        inverse: null
    }


    export var SLIDE_RIGHT:Transition = {
        from: "transition -d333ms -ease-in-out -out -right",
        to: "transition -d333ms -ease-in-out -in -right",
        duration: 333,
        inverse: null
    }
    
    /* COVER */

    export var COVER_LEFT:Transition = {
        from: "transition -d250ms -static -lower",
        to: "transition -d250ms -ease-in-out -in -left -shadow",
        duration: 250,
        inverse: null
    }

    export var COVER_RIGHT:Transition = {
        from: "transition -d250ms -static -lower",
        to: "transition -d250ms -ease-in-out -in -right -shadow",
        duration: 250,
        inverse: null
    }
    
    /* UNCOVER */

    export var UNCOVER_LEFT:Transition = {
        from: "transition -d333ms -ease-in-out -out -left -shadow",
        to: "transition -d333ms -static -lower",
        duration: 333,
        inverse: null
    }

    export var UNCOVER_RIGHT:Transition = {
        from: "transition -d333ms -ease-in-out -out -right -shadow",
        to: "transition -d333ms -static -lower",
        duration: 333,
        inverse: null
    }
    
    /* COVER FADE */

    export var COVER_LEFT_FADE:Transition = {
        from: "transition -d1000ms -linear -out -left -fade -lower",
        to: "transition -d250ms -ease-in-out -in -left -shadow",
        duration: 250,
        inverse: null
    }

    export var COVER_RIGHT_FADE:Transition = {
        from: "transition -d1000ms -linear -out -right -fade -lower",
        to: "transition -d250ms -ease-in-out -in -right -shadow",
        duration: 250,
        inverse: null
    }
    
    /* UNCOVER FADE */

    export var UNCOVER_LEFT_FADE:Transition = {
        from: "transition -d333ms -ease-in-out -out -left -shadow",
        to: "transition -d333ms -linear -in -right -fade -lower",
        duration: 333,
        inverse: null
    }

    export var UNCOVER_RIGHT_FADE:Transition = {
        from: "transition -d333ms -ease-in-out -out -right -shadow",
        to: "transition -d333ms -linear -in -right -fade -lower",
        duration: 333,
        inverse: null
    }
    
    /* INVERSE */

    Transition.CUT.inverse = Transition.CUT;
    Transition.SLIDE_LEFT.inverse = Transition.SLIDE_RIGHT;
    Transition.SLIDE_RIGHT.inverse = Transition.SLIDE_LEFT;
    Transition.COVER_LEFT.inverse = Transition.UNCOVER_RIGHT;
    Transition.COVER_RIGHT.inverse = Transition.UNCOVER_LEFT;
    Transition.UNCOVER_LEFT.inverse = Transition.COVER_RIGHT;
    Transition.UNCOVER_RIGHT.inverse = Transition.COVER_LEFT;
    Transition.COVER_LEFT_FADE.inverse = Transition.UNCOVER_RIGHT_FADE;
    Transition.COVER_RIGHT_FADE.inverse = Transition.UNCOVER_LEFT_FADE;
    Transition.UNCOVER_LEFT_FADE.inverse = Transition.COVER_RIGHT_FADE;
    Transition.UNCOVER_RIGHT_FADE.inverse = Transition.COVER_LEFT_FADE;
    
    /* OFF-CAVAS DISTANCES */
    
    export var OFF_CANVASS_NONE:string = "0px";
    export var OFF_CANVASS_LEFT:string = "260px";
    export var OFF_CANVASS_RIGHT:string = "-260px";

}