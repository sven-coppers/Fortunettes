/**
 * Reverse engineer HTML widgets and allow each look and feel to replace them by new widgets
 */
var WidgetFactory = /** @class */ (function () {
    function WidgetFactory(lookAndFeel) {
        this.lookAndFeel = lookAndFeel;
    }
    /**
     * Only initialise widgets that are not nested in tab_groups of panels
     * @param container
     * @param controller
     */
    WidgetFactory.prototype.initialiseWidgets = function (container, controller) {
        var resultingWidgets = [];
        // Only look for widgets that are inside this container, and not in nested containers
        var potentialWidgets = container.find("*").filter(function () {
            var result = $(this).parent().closest(".panel, .look_and_feel, .tab_content").is(container);
            return result;
        });
        this.initButtons(potentialWidgets, resultingWidgets, controller);
        this.initRadioButtons(potentialWidgets, resultingWidgets, controller);
        this.initCheckboxes(potentialWidgets, resultingWidgets, controller);
        this.initTextBoxes(potentialWidgets, resultingWidgets, controller);
        this.initSelectionHybrids(potentialWidgets, resultingWidgets, controller);
        this.initListBoxes(potentialWidgets, resultingWidgets, controller);
        // this.initSliders(potentialWidgets, resultingWidgets, controller);
        this.initLabels(potentialWidgets, resultingWidgets, controller);
        this.initTabGroups(potentialWidgets, resultingWidgets, controller);
        this.initPanels(potentialWidgets, resultingWidgets, controller);
        return resultingWidgets;
    };
    WidgetFactory.prototype.initTabGroups = function (potentialWidgets, resultingWidgets, controller) {
        var oThis = this;
        potentialWidgets.filter(".tab_group").each(function () {
            var identifier = $(this).attr("id");
            var firstChild = $(this).find(".tab").attr("id");
            var widget = oThis.lookAndFeel.createTabGroup(identifier, $(this), controller, oThis);
            widget.groupName = identifier;
            widget.firstChild = firstChild;
            resultingWidgets[identifier] = widget;
            //widget.children = oThis.initialiseWidgets($(this), controller, lookAndFeel);
            widget.selectFirstTab();
        });
    };
    WidgetFactory.prototype.initButtons = function (potentialWidgets, resultingWidgets, controller) {
        var oThis = this;
        potentialWidgets.filter("button").each(function () {
            var identifier = $(this).attr("id");
            var widget = oThis.lookAndFeel.createButton($(this), controller);
            resultingWidgets[identifier] = widget;
        });
    };
    WidgetFactory.prototype.initRadioButtons = function (potentialWidgets, resultingWidgets, controller) {
        var oThis = this;
        potentialWidgets.filter("br").remove();
        var radioGroups = {}; // "groupname => []"
        var radioLabels = {};
        potentialWidgets.filter("input[type=radio]").each(function () {
            var groupName = $(this).attr("name");
            var label = $(this).next("label");
            if (!(groupName in radioGroups)) {
                radioGroups[groupName] = [];
                radioLabels[groupName] = [];
            }
            if (label) {
                radioLabels[groupName].push(label.text());
                label.remove();
            }
            radioGroups[groupName].push($(this));
        });
        for (var radioGroupName in radioGroups) {
            var widget = oThis.lookAndFeel.createRadioGroup(radioGroupName, radioGroups[radioGroupName], radioLabels[radioGroupName], controller);
            resultingWidgets[radioGroupName] = widget;
        }
    };
    WidgetFactory.prototype.initCheckboxes = function (potentialWidgets, resultingWidgets, controller) {
        var oThis = this;
        potentialWidgets.filter("br").remove();
        var checkGroups = {}; // "groupname => []"
        var checkLabels = {};
        potentialWidgets.filter("input[type=checkbox]").each(function () {
            var groupName = $(this).attr("name");
            var label = $(this).next("label");
            if (!(groupName in checkGroups)) {
                checkGroups[groupName] = [];
                checkLabels[groupName] = [];
            }
            if (label) {
                checkLabels[groupName].push(label.text());
                label.remove();
            }
            checkGroups[groupName].push($(this));
        });
        for (var checkGroup in checkGroups) {
            var widget = oThis.lookAndFeel.createCheckboxGroup(checkGroup, checkGroups[checkGroup], checkLabels[checkGroup], controller);
            resultingWidgets[checkGroup] = widget;
        }
    };
    WidgetFactory.prototype.initTextBoxes = function (potentialWidgets, resultingWidgets, controller) {
        var oThis = this;
        potentialWidgets.filter("input[type=text]").each(function () {
            var identifier = $(this).attr("id");
            var widget = oThis.lookAndFeel.createTextbox(identifier, $(this), controller);
            resultingWidgets[identifier] = widget;
        });
    };
    WidgetFactory.prototype.initSelectionHybrids = function (potentialWidgets, resultingWidgets, controller) {
        var oThis = this;
        potentialWidgets.filter(".selection_hybrid").each(function () {
            var identifier = $(this).attr("id");
            var widget = oThis.lookAndFeel.createSelectionHybrid(identifier, $(this), controller);
            resultingWidgets[identifier] = widget;
        });
    };
    WidgetFactory.prototype.initListBoxes = function (potentialWidgets, resultingWidgets, controller) {
        var oThis = this;
        potentialWidgets.filter("select").each(function () {
            var identifier = $(this).attr("id");
            var widget = oThis.lookAndFeel.createListbox(identifier, $(this), controller);
            resultingWidgets[identifier] = widget;
        });
    };
    /*  initSliders (potentialWidgets, resultingWidgets, controller) {
          var oThis = this;
  
          potentialWidgets.filter("input[type=range]").each(function () {
              var identifier = $(this).attr("id");
              var widget = oThis.lookAndFeel.createSlider($(this), controller);
  
              resultingWidgets[identifier] = widget;
          });
      } */
    WidgetFactory.prototype.initPanels = function (potentialWidgets, resultingWidgets, controller) {
        var oThis = this;
        potentialWidgets.filter(".panel").each(function () {
            var identifier = $(this).attr("id");
            var contents = $(this).html();
            var widget = oThis.lookAndFeel.createPanel(identifier, contents, $(this), controller, oThis, Action.NONE);
            resultingWidgets[identifier] = widget;
        });
    };
    WidgetFactory.prototype.initLabels = function (potentialWidgets, resultingWidgets, controller) {
        var oThis = this;
        potentialWidgets.filter("span.label").each(function () {
            var identifier = $(this).attr("id");
            var widget = oThis.lookAndFeel.createLabel($(this), controller);
            resultingWidgets[identifier] = widget;
        });
    };
    return WidgetFactory;
}());
;
//# sourceMappingURL=widget_factory.js.map