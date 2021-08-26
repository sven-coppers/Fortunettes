/*function Slider(controller) {
    this.container = null;
    this.controller = controller;
    this.identifier = null;
    this.value = null;
}

Slider extends Widget();
Slider.prototype.extendPrototype({
    /**
     * To be called after replacing the HTML and setting this.container
     *
    initBehavior() {
        var oThis = this;

        this.container.find("input[type=range]").on("slidestop", function(event, ui) {
            if (oThis.value != ui.value) {
                if(!oThis.isEnabled()) {
                    var newWidgetStates = {};
                    var newSliderState = new SliderState();
                    newSliderState.leftValue = ui.value;

                    newWidgetStates[this.identifier] = newSliderState;

                    this.controller.executeEvent(this.identifier, EVENT_VALUE_CHANGED, newWidgetStates);
                }
            }

            oThis.value = ui.value;
        });

        this.container.hover(function() {
            var newWidgetStates = {};

            // TODO: fill newWidgetStates

            if(!oThis.isEnabled()) {
                oThis.controller.howToEvent(oThis.identifier, Action.VALUE_CHANGED);
            } else {
                oThis.controller.previewEvent(this.identifier, Action.VALUE_CHANGED, newWidgetStates);
            }
        }, function () {
            var newWidgetStates = {};

            // TODO: fill newWidgetStates

            if(!oThis.isEnabled()) {
                oThis.controller.removeHowTo();
            } else {
                oThis.controller.removePreviewEvent(oThis.identifier, Action.VALUE_CHANGED, {});
            }
        });
    }

   newState() {
        return new SliderState();
    }

   showState(sliderState) {
        if(sliderState.enabled != null) {
            this.setEnabled(sliderState.enabled);
        }

        if(sliderState.value != null) {
            this.setValue(sliderState.value);
        }
    }

   getState() {
        var result = new SliderState();

        result.enabled = this.isEnabled();
        result.value = this.getValue();

        return result;
    }

   previewState(sliderState, timeRatioLeft, mode) {
        if(mode === FeedforwardMode.ALL || (mode === FeedforwardMode.SOME && !this.getState().equals(sliderState))) {
            if(sliderState.enabled != null) {
                this.previewEnabled(sliderState.enabled);
            }

            if(sliderState.value != null) {
                this.previewValue(sliderState.value, timeRatioLeft);
            }
        }
    }

   removePreviewState() {
        this.removeEnabledPreview();
        this.removePreviewValue();
    }

   previewPreviousState(sliderState, timeRatioLeft) {
        if(sliderState.enabled != null) {
            this.previewPreviousEnabled(sliderState.enabled);
        }

        if(sliderState.value != null) {
            this.previewPreviousValue(sliderState.value, timeRatioLeft);
        }
    }

   removePreviousStatePreview() {
        this.removePreviousEnabledPreview();
        this.removePreviousValuePreview();
    }

   setEnabled(enabled) {
        console.log("TODO: implement setEnabled()");
    }

   isEnabled() {
        console.log("TODO: implement isEnabled()");
    }

   previewEnabled(enabled) {
        console.log("TODO: implement previewEnabled()");
    }

   removeEnabledPreview() {
        console.log("TODO: implement removeEnabledPreview()");
    }

   previewPreviousEnabled(enabled) {
        console.log("TODO: implement previewPreviousEnabled()");
    }

   removePreviousEnabledPreview() {
        console.log("TODO: implement removePreviousEnabledPreview()");
    }

   setVisible(enabled) {
        console.log("TODO: implement setVisible()");
    }

   isVisible() {
        console.log("TODO: implement isVisible()");
    }

   previewVisible(visible) {
        console.log("TODO: implement previewVisible()");
    }

   removeVisiblePreview() {
        console.log("TODO: implement removeVisiblePreview()");
    }

   previewPreviousVisible(visible) {
        console.log("TODO: implement previewPreviousVisible()");
    }

   removePreviousVisiblePreview() {
        console.log("TODO: implement removePreviousVisiblePreview()");
    }

   setValue(value) {
        console.log("TODO: implement setValue()");
    }

   getValue() {
        console.log("TODO: implement getValue()");
    }

   previewValue(value, timeRatioLeft) {
        console.log("TODO: implement previewValue()");
    }

   removePreviewValue() {
        console.log("TODO: implement removePreviewValue()");
    }

   previewPreviousValue(value, timeRatioLeft) {
        console.log("TODO: implement previewPreviousValue()");
    }

   removePreviousValuePreview() {
        console.log("TODO: implement removePreviewPreviousValue()");
    }
}); */ 
//# sourceMappingURL=slider.js.map