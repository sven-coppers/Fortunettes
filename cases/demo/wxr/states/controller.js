$(document).ready(function() {
    new WXRController();
});

class WXRController extends Controller {
    constructor() {
        super($("#wxr"));
        this.stateMachineReader = new StateMachineReader();

        this.stateMachine = stateMachineReader.read("cases/demo/wxr/states/", this, widgets, true);

        this.lastConfirmedValue = "0";
        this.timerDuration = 5; // seconds
        this.timer = new Timer();

        var oThis = this;
        this.timer.addEventListener("secondTenthsUpdated", function (e) {
            oThis.applicationTick(timerToTime(oThis.timer));
        });
        this.timer.addEventListener("targetAchieved", function (e) {
            oThis.applicationTimeout();
        });
    }

    stateMachineLoaded () {
        this.applicationState = this.stateMachine.currentState;
        this.setWindowState(this.applicationState.getWindowState());
    }

    handleEvent (identifier, event, newWindowState, isPreview) {
        if(identifier.indexOf("mode") == -1) {
            if(event === EVENT_VALUE_CHANGED) {
                var textboxState = newWindowState.getWidgetState("tilt");
                var textboxValue = parseInt(textboxState.value);

                if(textboxState.value.length == 0) {
                    textboxValue = 0;
                } else if(textboxValue < 0) {
                    textboxValue = 0;
                } else if(textboxValue > 20) {
                    textboxValue = 20;
                }

                if(isPreview) {
                    this.setEnabledAll(newWindowState, false);
                    textboxState.value = undefined;
                    this.setWindowState(newWindowState);
                    this.setEnabledAll(newWindowState, true);
                    textboxState.value = textboxValue;

                    if (this.timer.isRunning()) {
                        this.timer.reset();
                    } else {
                        this.timer.start({
                            countdown: true,
                            startValues: [0, this.timerDuration, 0, 0, 0],
                            precision: 'secondTenths'
                        });
                    }
                } else {
                    this.timer.stop();
                    textboxState.value = textboxValue;
                    this.lastConfirmedValue = textboxState.value;
                    this.setEnabledAll(newWindowState, true);
                }
            } else {
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

    applicationTick (timeLeft) {
        var timeRatioLeft = timeLeft / this.timerDuration;
        var newWindowState = new WindowState();
        var newWidgetState = new TextboxState();
        newWidgetState.value = this.lastConfirmedValue;
        newWindowState.copyFromWidgetState("tilt", newWidgetState);

        this.previewPreviousWindowState(newWindowState, timeRatioLeft);
    }

    applicationTimeout () {
        var newWindowState = new WindowState();
        var newWidgetState = new TextboxState();
        newWidgetState.value = this.lastConfirmedValue;
        newWindowState.copyFromWidgetState("tilt", newWidgetState);

        this.removeWindowStatePreview();
        this.removeWindowStatePreview();
        this.setWindowState(newWindowState);
    }

    setEnabledAll(windowState, enabled) {
     //   windowState.getWidgetState("mode_off").enabled = enabled;
     //   windowState.getWidgetState("mode_stdby").enabled = enabled;
     //   windowState.getWidgetState("mode_tst").enabled = enabled;
     //   windowState.getWidgetState("mode_wxon").enabled = enabled;
     //   windowState.getWidgetState("mode_wxa").enabled = enabled;

        windowState.getWidgetState("tilt_auto").enabled = enabled;
        windowState.getWidgetState("tilt_manual").enabled = enabled;

        windowState.getWidgetState("stabilization_on").enabled = enabled;
        windowState.getWidgetState("stabilization_off").enabled = enabled;
    }

   /*howTo (identifier, event) {
        return this.stateMachine.getRequiredTransitions(this.applicationState.name, identifier, event);
    }*/
}