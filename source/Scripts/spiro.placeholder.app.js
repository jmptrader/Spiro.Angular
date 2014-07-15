/// <reference path="typings/angularjs/angular.d.ts" />
var Spiro;
(function (Spiro) {
    (function (Angular) {
        /* Declare app level module */
        Angular.app = angular.module('app', []);

        // test data
        Angular.app.run(function (color, mask) {
            color.setColorMap({
                "AdventureWorksModel.CustomerRepository": "redLight",
                "AdventureWorksModel.Store": "red",
                "AdventureWorksModel.Individual": "red",
                "AdventureWorksModel.OrderRepository": "green",
                "AdventureWorksModel.SalesOrderHeader": "greenDark",
                "AdventureWorksModel.SalesOrderDetail": "green",
                "AdventureWorksModel.ProductRepository": "orange",
                "AdventureWorksModel.Product": "orangeDark",
                "AdventureWorksModel.ProductInventory": "orange",
                "AdventureWorksModel.ProductReview": "orange",
                "AdventureWorksModel.ProductModel": "yellow",
                "AdventureWorksModel.ProductCategory": "redLight",
                "AdventureWorksModel.ProductSubCategory": "red",
                "AdventureWorksModel.EmployeeRepository": "blue",
                "AdventureWorksModel.Employee": "blueDark",
                "AdventureWorksModel.EmployeePayHistory": "blue",
                "AdventureWorksModel.EmployeeDepartmentHistory": "blue",
                "AdventureWorksModel.SalesRepository": "purple",
                "AdventureWorksModel.SalesPerson": "purple",
                "AdventureWorksModel.SpecialOfferRepository": "pink",
                "AdventureWorksModel.SpecialOffer": "pinkDark",
                "AdventureWorksModel.ContactRepository": "teal",
                "AdventureWorksModel.Contact": "teal",
                "AdventureWorksModel.VendorRepository": "greenDark",
                "AdventureWorksModel.Vendor": "greenDark",
                "AdventureWorksModel.PurchaseOrderRepository": "grayDark",
                "AdventureWorksModel.PurchaseOrder": "grayDark",
                "AdventureWorksModel.WorkOrderRepository": "orangeDark",
                "AdventureWorksModel.WorkOrder": "orangeDark",
                "AdventureWorksModel.OrderContributedActions": "darkBlue",
                "AdventureWorksModel.CustomerContributedActions": "darkBlue"
            });

            color.setDefaultColorArray([
                "blue",
                "blueLight",
                "blueDark",
                "green",
                "greenLight",
                "greenDark",
                "red",
                "yellow",
                "orange",
                "orange",
                "orangeDark",
                "pink",
                "pinkDark",
                "purple",
                "grayDark",
                "magenta",
                "teal",
                "redLight"
            ]);

            color.setDefaultColor("darkBlue");

            // map to convert from mask representation in RO extension to client represention.
            mask.setMaskMap({
                "d": { name: "date", mask: "d MMM yyyy" }
            });
        });
    })(Spiro.Angular || (Spiro.Angular = {}));
    var Angular = Spiro.Angular;
})(Spiro || (Spiro = {}));
//# sourceMappingURL=spiro.placeholder.app.js.map
