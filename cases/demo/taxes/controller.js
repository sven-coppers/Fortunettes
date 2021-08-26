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
    new TaxesController();
});
var TaxesController = /** @class */ (function (_super) {
    __extends(TaxesController, _super);
    function TaxesController() {
        return _super.call(this, $("#taxes")) || this;
    }
    TaxesController.prototype.initState = function (newWindowState) {
        newWindowState.getWidgetState("tax_flow").selectTab("tab_income");
        newWindowState.getWidgetState("update_calculations").enabled = false;
        //newWindowState.getWidgetState("line_3_total_income").enabled = false;
        //newWindowState.getWidgetState("line_7_adjusted_gross_income").enabled = false;
        //newWindowState.getWidgetState("line_8_standard_deduction").enabled = false;
    };
    TaxesController.prototype.maritalStatusSingleSelected = function (event, newWindowState) {
        newWindowState.getWidgetState("line_8_standard_deduction").value = 12000;
        this.updateCalculations(event, newWindowState);
    };
    TaxesController.prototype.maritalStatusMarriedJointlySelected = function (event, newWindowState) {
        newWindowState.getWidgetState("line_8_standard_deduction").value = 24000;
        this.updateCalculations(event, newWindowState);
    };
    TaxesController.prototype.maritalStatusMarriedSeparatelySelected = function (event, newWindowState) {
        newWindowState.getWidgetState("line_8_standard_deduction").value = 12000;
        this.updateCalculations(event, newWindowState);
    };
    TaxesController.prototype.maritalStatusHeadSelected = function (event, newWindowState) {
        newWindowState.getWidgetState("line_8_standard_deduction").value = 18000;
        this.updateCalculations(event, newWindowState);
    };
    TaxesController.prototype.maritalStatusDivorcedSelected = function (event, newWindowState) {
        newWindowState.getWidgetState("line_8_standard_deduction").value = 24000;
        this.updateCalculations(event, newWindowState);
    };
    TaxesController.prototype.line1WagesValueChanged = function (event, newWindowState) {
        this.updateCalculations(event, newWindowState);
    };
    TaxesController.prototype.line7AdjustedGrossIncomeValueChanged = function (event, newWindowState) {
        this.updateCalculations(event, newWindowState);
    };
    TaxesController.prototype.line8StandardDeductionValueChanged = function (event, newWindowState) {
        this.updateCalculations(event, newWindowState);
    };
    TaxesController.prototype.line12ChildrenValueChanged = function (event, newWindowState) {
        this.updateCalculations(event, newWindowState);
    };
    TaxesController.prototype.line10TaxableIncomeValueChanged = function (event, newWindowState) {
        this.updateCalculations(event, newWindowState);
    };
    TaxesController.prototype.updateCalculations = function (event, newWindowState) {
        this.updateIncome(event, newWindowState);
        this.updateGrossIncome(event, newWindowState);
        this.updateTaxableIncome(event, newWindowState);
        this.updateTotalTaxes(event, newWindowState);
        this.updateTotalPayments(event, newWindowState);
        this.updateBalance(event, newWindowState);
    };
    TaxesController.prototype.updateIncome = function (event, newWindowState) {
        var wages = parseInt(newWindowState.getWidgetState("line_1_wages").value);
        var otherIncome = parseInt(newWindowState.getWidgetState("line_2_other_income").value);
        if (isNaN(otherIncome))
            otherIncome = 0;
        if (!isNaN(wages)) {
            newWindowState.getWidgetState("line_3_total_income").value = wages + otherIncome;
        }
    };
    TaxesController.prototype.updateGrossIncome = function (event, newWindowState) {
        var income = parseInt(newWindowState.getWidgetState("line_3_total_income").value);
        var adjustments = parseInt(newWindowState.getWidgetState("line_4_adjustments").value);
        if (isNaN(adjustments))
            adjustments = 0;
        if (!isNaN(income)) {
            newWindowState.getWidgetState("line_7_adjusted_gross_income").value = income - adjustments;
        }
    };
    TaxesController.prototype.updateTaxableIncome = function (event, newWindowState) {
        var gross = parseInt(newWindowState.getWidgetState("line_7_adjusted_gross_income").value);
        var deduction = parseInt(newWindowState.getWidgetState("line_8_standard_deduction").value);
        if (!isNaN(gross) && !isNaN(deduction)) {
            newWindowState.getWidgetState("line_10_taxable_income").value = Math.max(gross - deduction, 0);
        }
    };
    TaxesController.prototype.updateTotalTaxes = function (event, newWindowState) {
        var income = parseInt(newWindowState.getWidgetState("line_10_taxable_income").value);
        var children = parseInt(newWindowState.getWidgetState("line_12_children").value);
        var other = parseInt(newWindowState.getWidgetState("1040_14_other_taxes").value);
        if (isNaN(children))
            children = 0;
        if (isNaN(other))
            other = 0;
        if (!isNaN(income)) {
            newWindowState.getWidgetState("1040_15_total_tax").value = 0.25 * income - children + other;
        }
    };
    TaxesController.prototype.updateTotalPayments = function (event, newWindowState) {
        var federal = parseInt(newWindowState.getWidgetState("1040_16_federal_income").value);
        var refundable = parseInt(newWindowState.getWidgetState("1040_17_refundable_credits").value);
        if (isNaN(refundable))
            refundable = 0;
        if (!isNaN(federal)) {
            newWindowState.getWidgetState("1040_18_total_payments").value = federal + refundable;
        }
    };
    TaxesController.prototype.updateBalance = function (event, newWindowState) {
        var taxes = parseInt(newWindowState.getWidgetState("1040_15_total_tax").value);
        var payments = parseInt(newWindowState.getWidgetState("1040_18_total_payments").value);
        if (!isNaN(taxes) && !isNaN(payments)) {
            if (payments < taxes) {
                newWindowState.getWidgetState("1040_19_total_overpaid").value = 0;
                newWindowState.getWidgetState("1040_22_total_due").value = taxes - payments;
            }
            else {
                newWindowState.getWidgetState("1040_19_total_overpaid").value = payments - taxes;
                newWindowState.getWidgetState("1040_22_total_due").value = 0;
            }
        }
    };
    return TaxesController;
}(Controller));
//# sourceMappingURL=controller.js.map