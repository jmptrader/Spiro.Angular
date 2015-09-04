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
/// <reference path="typings/lodash/lodash.d.ts" />
/// <reference path="spiro.models.ts" />
var Spiro;
(function (Spiro) {
    var Angular;
    (function (Angular) {
        Angular.app.service('mask', function () {
            var mask = this;
            var maskMap = {};
            mask.toLocalFilter = function (remoteMask) {
                return maskMap ? maskMap[remoteMask] : null;
            };
            mask.setMaskMap = function (map) {
                maskMap = map;
            };
            mask.defaultLocalFilter = function (format) {
                switch (format) {
                    case ("string"):
                        return null;
                    case ("date-time"):
                        return { name: "date", mask: "d MMM yyyy hh:mm:ss" };
                    case ("date"):
                        return { name: "date", mask: "d MMM yyyy" };
                    case ("time"):
                        return { name: "date", mask: "hh:mm:ss" };
                    case ("utc-millisec"):
                        return null;
                    case ("big-integer"):
                        return { name: "number", mask: "" };
                    case ("big-decimal"):
                        return { name: "number", mask: "" };
                    case ("blob"):
                        return null;
                    case ("clob"):
                        return null;
                    case ("decimal"):
                        return null;
                    //return { name: "currency", mask: "$" };
                    case ("int"):
                        return { name: "number", mask: "" };
                    default:
                        return null;
                }
            };
        });
    })(Angular = Spiro.Angular || (Spiro.Angular = {}));
})(Spiro || (Spiro = {}));
//# sourceMappingURL=spiro.angular.services.mask.js.map