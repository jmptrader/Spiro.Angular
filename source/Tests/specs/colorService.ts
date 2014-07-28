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

/// <reference path="../../Scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../Scripts/typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../Scripts/spiro.angular.services.color.ts" />
/// <reference path="helpers.ts" />

describe('context Service', () => {

    beforeEach(module('app'));

    describe('toColorFromHref', () => {

        describe('with a valid object href', () => {

            var resultColor;
            var href = "http://objects/AdventureWorksModel.Product/1";

            beforeEach(inject((color: Spiro.Angular.IColor) => {
                resultColor = color.toColorFromHref(href);
            }));

            it('returns a matching color', () => {
                expect(resultColor).toBe("bg-color-orangeDark");
            });
        });

        describe('with a valid service href', () => {

            var resultColor;
            var href = "http://services/AdventureWorksModel.CustomerRepository";

            beforeEach(inject((color: Spiro.Angular.IColor) => {
                resultColor = color.toColorFromHref(href);
            }));

            it('returns a matching color', () => {
                expect(resultColor).toBe("bg-color-redLight");
            });
        });

        describe('with an invalid  href', () => {

            var resultColor;
            var href = "invalid";

            beforeEach(inject((color: Spiro.Angular.IColor) => {
                resultColor = color.toColorFromHref(href);
            }));

            it('returns a default color', () => {
                expect(resultColor).toBe("bg-color-darkBlue");
            });
        });

    });

    describe('toColorFromType', () => {

        describe('with a valid type', () => {

            var resultColor;
            var typ = "AdventureWorksModel.Product";

            beforeEach(inject((color: Spiro.Angular.IColor) => {
                resultColor = color.toColorFromType(typ);
            }));

            it('returns a matching color', () => {
                expect(resultColor).toBe("bg-color-orangeDark");
            });
        });

     
        describe('with an invalid  type', () => {

            var colorService;
            var resultColor;
            var typ = "invalid";

            beforeEach(inject((color: Spiro.Angular.IColor) => {
                colorService = color;
                resultColor = color.toColorFromType(typ);
            }));

            it('returns a default color', () => {
                expect(resultColor).toBe("bg-color-purple");
            });

            it('returns a the same default color each time', () => {

                for (var i = 0; i < 10; i++) {
                    resultColor = colorService.toColorFromType(typ);
                    expect(resultColor).toBe("bg-color-purple");
                }
            });
        });

    });

}); 