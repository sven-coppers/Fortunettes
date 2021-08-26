$(document).ready(function() {
    new ButtonsRemakeController();
});

class ButtonsRemakeController extends Controller {
    constructor() {
        super($("#buttons_remake"));
    }

    initState(newWindowState) {
        this.state = "S0";

        newWindowState.getWidgetState("a").enabled = true;
        newWindowState.getWidgetState("b").enabled = true;
        newWindowState.getWidgetState("c").enabled = true;
        newWindowState.getWidgetState("d").enabled = false;
    }

    aClicked(event, newWindowState) {
        if(this.state == "S0") {
            this.previewState("S1", newWindowState);
            this.state = "S1";
        } else if(this.state == "S2") {
            this.previewState("S4", newWindowState);
            this.state = "S4";
        } else if(this.state == "S3") {
            this.previewState("S5", newWindowState);
            this.state = "S5";
        } else if(this.state == "S4") {
            this.previewState("S7", newWindowState);
            this.state = "S7";
        }
    }

    previewAClicked(event, newWindowState) {
        if(this.state == "S0") {
            this.previewState("S1", newWindowState);
        } else if(this.state == "S2") {
            this.previewState("S4", newWindowState);
        } else if(this.state == "S3") {
            this.previewState("S5", newWindowState);
        } else if(this.state == "S4") {
            this.previewState("S7", newWindowState);
        }
    }

    bClicked(event, newWindowState) {
        if(this.state == "S0") {
            this.previewState("S2", newWindowState);
            this.state = "S2";
        } else if(this.state == "S1") {
            this.previewState("S3", newWindowState);
            this.state = "S3";
        } else if(this.state == "S5") {
            this.previewState("S0", newWindowState);
            this.state = "S0";
        } else if(this.state == "S7") {
            this.previewState("S0", newWindowState);
            this.state = "S0";
        }
    }

    previewBClicked(event, newWindowState) {
        if(this.state == "S0") {
            this.previewState("S2", newWindowState);
        } else if(this.state == "S1") {
            this.previewState("S3", newWindowState);
        } else if(this.state == "S5") {
            this.previewState("S0", newWindowState);
        } else if(this.state == "S7") {
            this.previewState("S0", newWindowState);
        }
    }

    cClicked(event, newWindowState) {
        if(this.state == "S0") {
            this.previewState("S8", newWindowState);
            this.state = "S8";
        } else if(this.state == "S3") {
            this.previewState("S6", newWindowState);
            this.state = "S6";
        } else if(this.state == "S4") {
            this.previewState("S9", newWindowState);
            this.state = "S9";
        }
    }

    cClicked(event, newWindowState) {
        if(this.state == "S0") {
            this.previewState("S8", newWindowState);
        } else if(this.state == "S3") {
            this.previewState("S6", newWindowState);
        } else if(this.state == "S4") {
            this.previewState("S9", newWindowState);
        }
    }

    dClicked(event, newWindowState) {
        if(this.state == "S2") {
            this.previewState("S10", newWindowState);
            this.state = "S10";
        }
    }

    previewDClicked(event, newWindowState) {
        if(this.state == "S2") {
            this.previewState("S10", newWindowState);
        }
    }

    disableAll(newWindowState) {
        newWindowState.getWidgetState("a").enabled = false;
        newWindowState.getWidgetState("b").enabled = false;
        newWindowState.getWidgetState("c").enabled = false;
        newWindowState.getWidgetState("d").enabled = false;
    }

    previewState(state, newWindowState) {
        if(state == "S0") {
            newWindowState.getWidgetState("a").enabled = true;
            newWindowState.getWidgetState("b").enabled = true;
            newWindowState.getWidgetState("c").enabled = true;
            newWindowState.getWidgetState("d").enabled = false;
        } else if(state == "S1") {
            newWindowState.getWidgetState("a").enabled = false;
            newWindowState.getWidgetState("b").enabled = true;
            newWindowState.getWidgetState("c").enabled = false;
            newWindowState.getWidgetState("d").enabled = false;
        } else if(state == "S2") {
            newWindowState.getWidgetState("a").enabled = true;
            newWindowState.getWidgetState("b").enabled = false;
            newWindowState.getWidgetState("c").enabled = false;
            newWindowState.getWidgetState("d").enabled = true;
        } else if(state == "S3" || state == "S4") {
            newWindowState.getWidgetState("a").enabled = true;
            newWindowState.getWidgetState("b").enabled = false;
            newWindowState.getWidgetState("c").enabled = true;
            newWindowState.getWidgetState("d").enabled = false;
        } else if(state == "S5" || state == "S7") {
            newWindowState.getWidgetState("a").enabled = false;
            newWindowState.getWidgetState("b").enabled = true;
            newWindowState.getWidgetState("c").enabled = false;
            newWindowState.getWidgetState("d").enabled = false;
        } else {
            newWindowState.getWidgetState("a").enabled = false;
            newWindowState.getWidgetState("b").enabled = false;
            newWindowState.getWidgetState("c").enabled = false;
            newWindowState.getWidgetState("d").enabled = false;
        }
    }
}