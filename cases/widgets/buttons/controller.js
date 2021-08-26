$(document).ready(function() {
    new ButtonsController();
});

class ButtonsController extends Controller {
    initialised = false;

    constructor() {
        super($("#buttons"));
    }

    initState(newWindowState) {
        var widgets = this.lookAndFeels[0].getWidgets();
        this.stateMachine = new StateMachineReader().read("cases/widgets/buttons/", this, widgets, true);
    }

    stateMachineLoaded () {
        this.applicationState = this.stateMachine.currentState;
        this.setWindowState(this.applicationState.getWindowState());
        logger.log("STATE MACHINE INITIALISED");
        this.initialised = true;
    }

    aClicked(event, newWindowState) {
        this.handleEvent("a", event, newWindowState, false);
    }

   handleEvent(identifier, event, newWindowState, isPreview) {
        if(this.initialised) {
            var nextApplicationState = this.stateMachine.getNextStateFrom(this.applicationState.name, identifier, event);

            // If the state machine knows something
            if(nextApplicationState != null) {
                newWindowState.copyFromWindowState(nextApplicationState.getWindowState());
            }

            if(!isPreview) {
                this.applicationState = nextApplicationState;
            }
        }
    }
}