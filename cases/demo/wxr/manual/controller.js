var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
$(document).ready(function () {
    new WXRController();
});
var WXRController = /** @class */ (function (_super) {
    __extends(WXRController, _super);
    function WXRController() {
        var _this = _super.call(this, $("#wxr")) || this;
        _this.tiltAngle = 0;
        _this.timerDuration = 5; // seconds
        _this.timer = new Timer();
        var oThis = _this;
        _this.timer.addEventListener("secondTenthsUpdated", function (e) {
            oThis.applicationTick(timerToTime(oThis.timer));
        });
        _this.timer.addEventListener("targetAchieved", function (e) {
            var windowState = oThis.getWindowState();
            oThis.applicationTimeout(windowState);
            oThis.setWindowState(windowState);
        });
        return _this;
    }
    WXRController.prototype.initState = function (newWindowState) {
        newWindowState.getWidgetState("tilt").value = 0;
        newWindowState.getWidgetState("tilt").enabled = false;
        newWindowState.getWidgetState("tilt_auto").enabled = false;
        newWindowState.getWidgetState("tilt_manual").enabled = true;
        newWindowState.getWidgetState("stabilization_on").enabled = false;
        newWindowState.getWidgetState("stabilization_off").enabled = false;
    };
    WXRController.prototype.tiltManualClicked = function (event, newWindowState) {
        newWindowState.getWidgetState("tilt_auto").enabled = true;
        newWindowState.getWidgetState("tilt_manual").enabled = false;
        newWindowState.getWidgetState("stabilization_on").enabled = false;
        newWindowState.getWidgetState("stabilization_off").enabled = true;
    };
    WXRController.prototype.tiltAutoClicked = function (event, newWindowState) {
        newWindowState.getWidgetState("tilt_auto").enabled = false;
        newWindowState.getWidgetState("tilt_manual").enabled = true;
        newWindowState.getWidgetState("stabilization_on").enabled = false;
        newWindowState.getWidgetState("stabilization_off").enabled = false;
    };
    WXRController.prototype.stabilizationOnClicked = function (event, newWindowState) {
        newWindowState.getWidgetState("stabilization_on").enabled = false;
        newWindowState.getWidgetState("stabilization_off").enabled = true;
        newWindowState.getWidgetState("tilt").enabled = false;
    };
    WXRController.prototype.stabilizationOffClicked = function (event, newWindowState) {
        newWindowState.getWidgetState("stabilization_on").enabled = true;
        newWindowState.getWidgetState("stabilization_off").enabled = false;
        newWindowState.getWidgetState("tilt").enabled = true;
    };
    WXRController.prototype.tiltValueChanged = function (event, newWinowState) {
        this.tiltAngle = parseInt(newWinowState.getWidgetState("tilt").value);
        if (this.tiltAngle < -15) {
            this.tiltAngle = -15;
        }
        else if (this.tiltAngle > 15) {
            this.tiltAngle = 15;
        }
        newWinowState.getWidgetState("tilt").value = this.tiltAngle;
    };
    WXRController.prototype.offSelected = function (event, newWindowState) {
        /* Do nothing */
    };
    WXRController.prototype.stdbySelected = function (event, newWindowState) {
        /* Do nothing */
    };
    WXRController.prototype.tstSelected = function (event, newWindowState) {
        /* Do nothing */
    };
    WXRController.prototype.wxonSelected = function (event, newWindowState) {
        /* Do nothing */
    };
    WXRController.prototype.wxaSelected = function (event, newWindowState) {
        /* Do nothing */
    };
    WXRController.prototype.previewTiltValueChanged = function (event, newWinowState) {
        var textboxValue = parseInt(newWinowState.getWidgetState("tilt").value);
        if (textboxValue < -15) {
            textboxValue = -15;
        }
        else if (textboxValue > 15) {
            textboxValue = 15;
        }
        this.timer.start({
            countdown: true,
            startValues: [0, this.timerDuration, 0, 0, 0],
            precision: 'secondTenths'
        });
        // Disable all widgets
    };
    WXRController.prototype.applicationTimeout = function (newWinowState) {
        newWinowState.getWidgetState("tilt").value = this.tiltAngle;
        // Enable all widgets
    };
    // Enable all widgets again
    /*  var newWindowState = new WindowState();
      var newWidgetState = new TextboxState();
      newWidgetState.value = this.lastConfirmedValue;
      newWindowState.copyFromWidgetState("tilt", newWidgetState);

      this.removeWindowStatePreview();
      this.removeWindowStatePreview();
      this.setWindowState(newWindowState); */
    //   state_old,id,event,state_new
    //    S0,tilt_manual,event_click,S1
    //  S1,tilt_auto,event_click,S0
    //   S1,stabilization_off,event_click,S2
    //  S2,stabilization_on,event_click,S1
    //  S2,tilt_auto,event_click,S3
    //   S2,tilt,event_value_changed,S4
    //    S3,tilt_manual,event_click,S2
    //  S4,tilt,event_value_confirmed,S3
    //  S4,tilt,event_value_changed,S4
    //   S4,tilt,event_value_timeout,S2
    /* handleEvent (identifier, event, newWindowState, isPreview) {
         if(identifier.indexOf("mode") == -1) {
             if(event === Action.VALUE_CHANGED) {
 
 
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
             }
     } */
    WXRController.prototype.applicationTick = function (timeLeft) {
        /* var timeRatioLeft = timeLeft / this.timerDuration;
         var newWindowState = new WindowState();
         var newWidgetState = new TextboxState();
         newWidgetState.value = this.lastConfirmedValue;
         newWindowState.copyFromWidgetState("tilt", newWidgetState);
 
         this.previewPreviousWindowState(newWindowState, timeRatioLeft); */
    };
    return WXRController;
}(Controller));
//# sourceMappingURL=controller.js.map