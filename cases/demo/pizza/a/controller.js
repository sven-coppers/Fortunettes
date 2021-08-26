$(document).ready(function() {
    new QuestionnaireController();
});

class QuestionnaireController extends Controller {
    constructor() {
        super($("#pizza"));
    }

    initState(newWindowState) {
        this.toppings = ["selection_mushrooms", "selection_cheese", "selection_olives", "selection_pepperoni", "selection_ham", "selection_pineapple"];
        this.maxSelected = 3;

        newWindowState.getWidgetState("pizza").getChildState("margerita").selected = true;
        newWindowState.getWidgetState("price").enabled = false;

        this.disableUnselected(newWindowState);
        this.margeritaSelected(null, newWindowState);
    }

    hawaiiSelected(event, newWindowState) {
        this.setSelectedAll(newWindowState, false);
        this.setEnabledAll(newWindowState, false);

        newWindowState.getWidgetState("selection_ham").selected = true;
        newWindowState.getWidgetState("selection_pineapple").selected = true;
        newWindowState.getWidgetState("price").value = 11.5;
    }

    margeritaSelected(event, newWindowState) {
        this.setSelectedAll(newWindowState, false);
        this.setEnabledAll(newWindowState, false);

        newWindowState.getWidgetState("selection_cheese").selected = true;
        newWindowState.getWidgetState("price").value = 10.0;
    }

    customSelected(event, newWindowState) {
        this.setEnabledAll(newWindowState, true);
    }

    selectionMushroomsSelected(event, newWindowState) {
        this.updatePrice(newWindowState);
    }

    selectionCheeseSelected(event, newWindowState) {
        this.updatePrice(newWindowState);
    }

    selectionOlivesSelected(event, newWindowState) {
        this.updatePrice(newWindowState);
    }

    selectionPepperoniSelected(event, newWindowState) {
        this.updatePrice(newWindowState);
    }

    selectionHamSelected(event, newWindowState) {
        this.updatePrice(newWindowState);
    }

    selectionPineappleSelected(event, newWindowState) {
        this.updatePrice(newWindowState);
    }

   updatePrice(windowState) {
        var result = 10;

        if(windowState.getWidgetState("selection_mushrooms").selected) result += 1.0;
        if(windowState.getWidgetState("selection_cheese").selected) result += 0.5;
        if(windowState.getWidgetState("selection_olives").selected) result += 0.5;
        if(windowState.getWidgetState("selection_pepperoni").selected) result += 1.5;
        if(windowState.getWidgetState("selection_ham").selected) result += 1.5;
        if(windowState.getWidgetState("selection_pineapple").selected) result += 1.5;

       windowState.getWidgetState("price").value = result;
    }

   disableUnselected(windowState) {
        for(var widgetIndex in this.toppings) {
            var widgetName = this.toppings[widgetIndex];

            if(!windowState.getWidgetState(widgetName).selected) {
                windowState.getWidgetState(widgetName).enabled = false;
            }
        }
    }

   setEnabledAll(windowState, enabled) {
        for(var widgetIndex in this.toppings) {
            var widgetName = this.toppings[widgetIndex];

            windowState.getWidgetState(widgetName).enabled = enabled;
        }
    }

   setSelectedAll(windowState, selected) {
        for (var widgetIndex in this.toppings) {
            var widgetName = this.toppings[widgetIndex];

            windowState.getWidgetState(widgetName).selected = selected;
        }
    }
}