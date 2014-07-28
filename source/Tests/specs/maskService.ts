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

describe('mask Service', () => {

    beforeEach(module('app'));

    describe('toLocalFilter', () => {

        describe('with a known mask', () => {

            var resultMask: Spiro.Angular.ILocalFilter; 

            beforeEach(inject((mask: Spiro.Angular.IMask) => {
                resultMask = mask.toLocalFilter("d");
            }));

            it('returns a matching mask', () => {
                expect(resultMask.name).toBe("date");
                expect(resultMask.mask).toBe("d MMM yyyy");
            });
        });

        describe('with a unknown mask', () => {

            var resultMask: Spiro.Angular.ILocalFilter;

            beforeEach(inject((mask: Spiro.Angular.IMask) => {
                resultMask = mask.toLocalFilter("f");
            }));

            it('returns a undefined mask', () => {
                expect(resultMask).toBeUndefined();
            });
        });
    });
}); 