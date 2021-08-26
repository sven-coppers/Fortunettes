$(document).ready(function() {
    new QuestionnaireController();
});

function QuestionnaireController() {
    this.init($("#pizza"));
}

QuestionnaireController extends Controller();
QuestionnaireController.prototype.extendPrototype({
    initState: function(newWindowState) {
        this.toppings = ["selection_mushrooms", "selection_cheese", "selection_olives", "selection_pepperoni", "selection_ham", "selection_pineapple"];
        this.maxSelected = 3;

        newWindowState.getWidgetState("pizza").getRadioButtonState("margerita").selected = true;
        newWindowState.getWidgetState("more_toppings").enabled = false;
        newWindowState.getWidgetState("selection_cheese").selected = true;
        newWindowState.getWidgetState("selection_cheese").enabled = false;
        newWindowState.getWidgetState("price").enabled = false;

        this.disableUnselected(newWindowState);
    }

   handleEvent: function (identifier, event, newWindowState, isPreview) {
        var radioGroupState = newWindowState.getWidgetState("pizza");
        var radioGroupOptions = radioGroupState.radioButtonStates;
        var price = 10;

        if(typeof radioGroupOptions["hawaii"] !== "undefined" && radioGroupOptions["hawaii"].selected) {
            newWindowState.getWidgetState("more_toppings").enabled = false;
            newWindowState.getWidgetState("less_toppings").enabled = false;
            this.setSelectedAll(newWindowState, false);
            this.setEnabledAll(newWindowState, false);
            newWindowState.getWidgetState("selection_ham").selected = true;
            newWindowState.getWidgetState("selection_pineapple").selected = true;
            price = 11.5;
        } else if(typeof radioGroupOptions["margerita"] !== "undefined" && radioGroupOptions["margerita"].selected) {
            newWindowState.getWidgetState("more_toppings").enabled = false;
            newWindowState.getWidgetState("less_toppings").enabled = false;
            this.setSelectedAll(newWindowState, false);
            this.setEnabledAll(newWindowState, false);
            newWindowState.getWidgetState("selection_cheese").selected = true;
            price = 10;
        } else {
            var newLimit = this.maxSelected;

            if(identifier === "more_toppings") {
                newLimit++;
            } else if(identifier === "less_toppings") {
                newLimit--;
            }

            var numSelected = this.countNumSelected(newWindowState);

            if(numSelected >= newLimit) {
                this.disableUnselected(newWindowState);
            } else {
                this.setEnabledAll(newWindowState, true);
            }

            price += this.addToppingsPrice(newWindowState);

            // Enable buttons
            newWindowState.getWidgetState("more_toppings").enabled = numSelected == newLimit;
            newWindowState.getWidgetState("less_toppings").enabled = numSelected < newLimit;

            if(!isPreview) {
                this.maxSelected = newLimit
            }
        }

        newWindowState.getWidgetState("price").value = price;

        if(!isPreview) {
            var correct = !(newWindowState.getWidgetState("selection_mushrooms").selected)
            && !(newWindowState.getWidgetState("selection_cheese").selected)
            && !(newWindowState.getWidgetState("selection_olives").selected)
            && newWindowState.getWidgetState("selection_pepperoni").selected
            && newWindowState.getWidgetState("selection_ham").selected
            && newWindowState.getWidgetState("selection_pineapple").selected;

            if(correct) logger.taskReached();
        }
    }

   addToppingsPrice: function (windowState) {
        var result = 0;

        if(windowState.getWidgetState("selection_mushrooms").selected) result += 1.0;
        if(windowState.getWidgetState("selection_cheese").selected) result += 0.5;
        if(windowState.getWidgetState("selection_olives").selected) result += 0.5;
        if(windowState.getWidgetState("selection_pepperoni").selected) result += 1.5;
        if(windowState.getWidgetState("selection_ham").selected) result += 1.5;
        if(windowState.getWidgetState("selection_pineapple").selected) result += 1.5;

        return result;
    }

   countNumSelected: function (windowState) {
        var result = 0;

        for(var widgetIndex in this.toppings) {
            var widgetName = this.toppings[widgetIndex];

            if(windowState.getWidgetState(widgetName).selected) result++;
        }

        return result;
    }

   disableUnselected: function (windowState) {
        for(var widgetIndex in this.toppings) {
            var widgetName = this.toppings[widgetIndex];

            if(!windowState.getWidgetState(widgetName).selected) {
                windowState.getWidgetState(widgetName).enabled = false;
            }
        }
    }

   setEnabledAll: function (windowState, enabled) {
        for(var widgetIndex in this.toppings) {
            var widgetName = this.toppings[widgetIndex];

            windowState.getWidgetState(widgetName).enabled = enabled;
        }
    }

   setSelectedAll: function (windowState, selected) {
        for (var widgetIndex in this.toppings) {
            var widgetName = this.toppings[widgetIndex];

            windowState.getWidgetState(widgetName).selected = selected;
        }
    }
});