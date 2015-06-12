//Copyright 2014 Stef Cascarini, Dan Haywood, Richard Pawson
//Licensed under the Apache License, Version 2.0(the
//"License"); you may not use this file except in compliance
//with the License.You may obtain a copy of the License at
//    http://www.apache.org/licenses/LICENSE-2.0
//Unless required by applicable law or agreed to in writing,
//software distributed under the License is distributed on an
//"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
//KIND, either express or implied.See the License for the
//specific language governing permissions and limitations
//under the License.
/// <reference path="typings/angularjs/angular.d.ts" />
var Spiro;
(function (Spiro) {
    var Angular;
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
    })(Angular = Spiro.Angular || (Spiro.Angular = {}));
})(Spiro || (Spiro = {}));
//# sourceMappingURL=spiro.placeholder.app.js.map