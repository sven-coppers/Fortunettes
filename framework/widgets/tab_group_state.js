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
var TabGroupState = /** @class */ (function (_super) {
    __extends(TabGroupState, _super);
    function TabGroupState() {
        return _super.call(this) || this;
    }
    TabGroupState.prototype.selectTab = function (selectedTabName) {
        for (var tabName in this.childrenStates) {
            this.childrenStates[tabName].selected = false;
        }
        this.childrenStates[selectedTabName].selected = true;
    };
    /**
     * check if two instances of widgetState are equal
     * @param otherWidgetState
     */
    TabGroupState.prototype.equals = function (otherWidgetState) {
        if (!_super.prototype.equals.call(this, otherWidgetState))
            return false;
        return true;
    };
    /**
     * Create a copy of this state
     */
    TabGroupState.prototype.getCopy = function () {
        var result = new TabGroupState();
        result.enabled = this.enabled;
        result.copyChildrenStates(this);
        return result;
    };
    return TabGroupState;
}(WidgetState));
//# sourceMappingURL=tab_group_state.js.map