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
    new TupleController();
});
var TupleController = /** @class */ (function (_super) {
    __extends(TupleController, _super);
    function TupleController() {
        return _super.call(this, $("#tuples_editor")) || this;
    }
    TupleController.prototype.initState = function (applicationState) {
        var tupleList = [];
        tupleList.push(new Tuple("Tuple 1", "1", false));
        tupleList.push(new Tuple("Tuple 2", "2", true));
        tupleList.push(new Tuple("Tuple 3", "3", false));
        applicationState.setModel(TupleController.TUPLE_LIST, tupleList);
        applicationState.setModel(TupleController.SELECTED_INDEX, -1);
        this.updateTupleListView(applicationState);
        this.updateButtons(applicationState);
    };
    TupleController.prototype.tuplesListSelect = function (event, applicationState) {
        applicationState.setModel(TupleController.SELECTED_INDEX, event.index);
        var tuple = applicationState.getModel(TupleController.TUPLE_LIST)[event.index];
        this.tupleToWidgets(applicationState, tuple);
        this.updateButtons(applicationState);
    };
    TupleController.prototype.previewTuplesListSelect = function (event, applicationState) {
        applicationState.setModel(TupleController.SELECTED_INDEX, event.index);
        var tuple = applicationState.getModel(TupleController.TUPLE_LIST)[event.index];
        this.tupleToWidgets(applicationState, tuple);
        this.updateButtons(applicationState);
    };
    TupleController.prototype.attributeXValueChange = function (event, applicationState) {
        this.updateButtons(applicationState);
    };
    TupleController.prototype.attributeY1Select = function (event, applicationState) {
        this.attributedYChanged(event, applicationState, 1);
    };
    TupleController.prototype.attributeY2Select = function (event, applicationState) {
        this.attributedYChanged(event, applicationState, 2);
    };
    TupleController.prototype.attributeY3Select = function (event, applicationState) {
        this.attributedYChanged(event, applicationState, 3);
    };
    TupleController.prototype.attributedYChanged = function (event, applicationState, value) {
        // Do nothing
    };
    TupleController.prototype.attributeZValueChange = function (event, applicationState) {
        // Do nothing
    };
    TupleController.prototype.deleteClick = function (event, applicationState) {
        var index = applicationState.getModel(TupleController.SELECTED_INDEX);
        if (index >= 0) {
            var tuples = applicationState.getModel(TupleController.TUPLE_LIST);
            tuples.splice(index, 1);
            //applicationState.setModel(TupleController.SELECTED_INDEX, index);
            if (index < tuples.length - 1) {
                applicationState.setModel(TupleController.SELECTED_INDEX, index);
            }
            else if (tuples.length > 0) {
                applicationState.setModel(TupleController.SELECTED_INDEX, tuples.length - 1);
            }
            else {
                applicationState.setModel(TupleController.SELECTED_INDEX, -1);
                // Reset Input
                applicationState.getMainWindowState().getWidgetState("attribute_x").value = "";
                applicationState.getMainWindowState().getWidgetState("attribute_y_1").selected = false;
                applicationState.getMainWindowState().getWidgetState("attribute_y_2").selected = false;
                applicationState.getMainWindowState().getWidgetState("attribute_y_3").selected = false;
                applicationState.getMainWindowState().getWidgetState("attribute_z_selected").selected = false;
            }
            this.updateTupleListView(applicationState);
            this.updateButtons(applicationState);
        }
    };
    TupleController.prototype.addClick = function (event, applicationState) {
        var tuples = applicationState.getModel(TupleController.TUPLE_LIST);
        tuples.push(this.widgetsToTuple(applicationState));
        applicationState.setModel(TupleController.SELECTED_INDEX, tuples.length - 1);
        this.updateTupleListView(applicationState);
        this.updateButtons(applicationState);
    };
    TupleController.prototype.resetClick = function (event, applicationState) {
        var index = applicationState.getModel(TupleController.SELECTED_INDEX);
        if (index >= 0) {
            var tuple = applicationState.getModel(TupleController.TUPLE_LIST)[index];
            this.tupleToWidgets(applicationState, tuple);
        }
    };
    TupleController.prototype.replaceClick = function (event, applicationState) {
        var index = applicationState.getModel(TupleController.SELECTED_INDEX);
        if (index >= 0) {
            var tuples = applicationState.getModel(TupleController.TUPLE_LIST);
            tuples[index] = this.widgetsToTuple(applicationState);
            this.updateTupleListView(applicationState);
        }
    };
    TupleController.prototype.widgetsToTuple = function (applicationState) {
        var x = applicationState.getMainWindowState().getWidgetState("attribute_x").value;
        var z = applicationState.getMainWindowState().getWidgetState("attribute_z_selected").selected;
        var y = "-1";
        if (applicationState.getMainWindowState().getWidgetState("attribute_y_1").selected) {
            y = "1";
        }
        else if (applicationState.getMainWindowState().getWidgetState("attribute_y_2").selected) {
            y = "2";
        }
        else if (applicationState.getMainWindowState().getWidgetState("attribute_y_3").selected) {
            y = "3";
        }
        return new Tuple(x, y, z);
    };
    TupleController.prototype.tupleToWidgets = function (applicationState, tuple) {
        applicationState.getMainWindowState().getWidgetState("attribute_x").value = tuple.x;
        applicationState.getMainWindowState().getWidgetState("attribute_y_1").selected = false;
        applicationState.getMainWindowState().getWidgetState("attribute_y_2").selected = false;
        applicationState.getMainWindowState().getWidgetState("attribute_y_3").selected = false;
        if (tuple.y != "-1") {
            applicationState.getMainWindowState().getWidgetState("attribute_y_" + tuple.y).selected = true;
        }
        applicationState.getMainWindowState().getWidgetState("attribute_z_selected").selected = tuple.z;
    };
    TupleController.prototype.updateTupleListView = function (applicationState) {
        var listboxState = applicationState.getMainWindowState().getWidgetState("tuples_list");
        var tuples = applicationState.getModel(TupleController.TUPLE_LIST);
        var index = applicationState.getModel(TupleController.SELECTED_INDEX);
        listboxState.options = [];
        for (var i = 0; i < tuples.length; ++i) {
            listboxState.options.push(new ListBoxOptionState(tuples[i].x, i == index));
        }
    };
    TupleController.prototype.updateButtons = function (applicationState) {
        var index = applicationState.getModel(TupleController.SELECTED_INDEX);
        var x = applicationState.getMainWindowState().getWidgetState("attribute_x").value;
        applicationState.getMainWindowState().getWidgetState("add").enabled = (x.length > 0 && this.isUnique(x, applicationState));
        applicationState.getMainWindowState().getWidgetState("delete").enabled = index >= 0;
        applicationState.getMainWindowState().getWidgetState("replace").enabled = index >= 0;
        applicationState.getMainWindowState().getWidgetState("reset").enabled = index >= 0;
    };
    TupleController.prototype.isUnique = function (x, applicationState) {
        var tuples = applicationState.getModel(TupleController.TUPLE_LIST);
        for (var i = 0; i < tuples.length; ++i) {
            if (tuples[i].x === x)
                return false;
        }
        return true;
    };
    TupleController.TUPLE_LIST = "tuple_list";
    TupleController.SELECTED_INDEX = "selected_index";
    return TupleController;
}(Controller));
//# sourceMappingURL=controller.js.map