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
var TabGroup = /** @class */ (function (_super) {
    __extends(TabGroup, _super);
    function TabGroup(identifier, container, controller, widgetFactory, mode) {
        var _this = _super.call(this, identifier, Action.NONE, controller, container, mode) || this;
        _this.initHTML(container, widgetFactory);
        return _this;
    }
    TabGroup.prototype.newState = function () {
        return new TabGroupState();
    };
    TabGroup.prototype.selectFirstTab = function () {
        var state = this.getState();
        state.selectTab(this.firstChild);
        this.setState(state);
    };
    TabGroup.prototype.setState = function (newTabGroupState) {
        this.setChildrenStates(newTabGroupState);
    };
    TabGroup.prototype.getState = function () {
        var result = new TabGroupState();
        result.childrenStates = this.getChildrenStates();
        return result;
    };
    TabGroup.prototype.previewState = function (newTabGroupState, timeRatioLeft) {
        this.previewChildrenStates(newTabGroupState, timeRatioLeft);
    };
    TabGroup.prototype.removePreviewState = function () {
        this.removePreviewChildrenStates();
    };
    return TabGroup;
}(Widget));
//# sourceMappingURL=tab_group.js.map