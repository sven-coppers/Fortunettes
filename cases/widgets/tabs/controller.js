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
    new TabController();
});
var TabController = /** @class */ (function (_super) {
    __extends(TabController, _super);
    function TabController() {
        return _super.call(this, $("#tabs")) || this;
    }
    TabController.prototype.initState = function (newWindowState) {
        newWindowState.getWidgetState("update_calculations").enabled = false;
        this.selectTab(newWindowState, "tab_a");
        this.selectRadioButton(newWindowState, "expert");
        this.newRandom();
        this.newRandomRadioButton();
    };
    /* DEPRECATED */
    /* handleEvent(event, newWindowState) {
         if(event.identifier === "random") {
             this.selectTab(newWindowState, this.nextRandomTab);
 
             if(event.effect !== Effect.START_PREVIEW) {
                 this.newRandom();
             }
         }
 
         if(event.identifier === "random_value") {
             this.selectRadioButton(newWindowState, this.nextRandomRadioButton);
 
             if(event.effect !== Effect.START_PREVIEW) {
                 this.newRandomRadioButton();
             } else {
               //  this.updateFeedforward(newWindowState);
             }
         }
     } */
    /**
      * Needed for the random button only
      * @param newWindowState
      * @param tab
      */
    TabController.prototype.selectTab = function (newWindowState, tab) {
        newWindowState.getWidgetState("tab_a").selected = false;
        newWindowState.getWidgetState("tab_b").selected = false;
        newWindowState.getWidgetState("tab_c").selected = false;
        newWindowState.getWidgetState(tab).selected = true;
    };
    TabController.prototype.selectRadioButton = function (newWindowState, radioButton) {
        newWindowState.getWidgetState("expert").selected = false;
        newWindowState.getWidgetState("knowledgeable").selected = false;
        newWindowState.getWidgetState("passing").selected = false;
        newWindowState.getWidgetState("no_knowledge").selected = false;
        newWindowState.getWidgetState(radioButton).selected = true;
    };
    TabController.prototype.newRandom = function () {
        var randomTab = Math.floor(Math.random() * 3);
        if (randomTab == 0)
            this.nextRandomTab = "tab_a";
        if (randomTab == 1)
            this.nextRandomTab = "tab_b";
        if (randomTab == 2)
            this.nextRandomTab = "tab_c";
    };
    TabController.prototype.newRandomRadioButton = function () {
        var randomRadioButton = Math.floor(Math.random() * 3);
        if (randomRadioButton == 0)
            this.nextRandomRadioButton = "expert";
        if (randomRadioButton == 1)
            this.nextRandomRadioButton = "knowledgeable";
        if (randomRadioButton == 2)
            this.nextRandomRadioButton = "passing";
        if (randomRadioButton == 3)
            this.nextRandomRadioButton = "no_knowledge";
    };
    return TabController;
}(Controller));
//# sourceMappingURL=controller.js.map