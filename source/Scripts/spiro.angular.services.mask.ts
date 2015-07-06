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

module Spiro.Angular {

    export interface ILocalFilter {
        name: string;
        mask: string;
    }

    export interface IMaskMap {
        [index: string]: ILocalFilter;
    }


    export interface IMask {
        toLocalFilter(remoteMask: string): ILocalFilter;
        setMaskMap(map : IMaskMap);
    }

    app.service('mask', function () {

        var mask = <IMask>this;
        var maskMap: IMaskMap = {};

        mask.toLocalFilter = (remoteMask: string) => {
            return maskMap ? maskMap[remoteMask] : null;
        }

        mask.setMaskMap = (map: IMaskMap) => {
            maskMap = map; 
        }
    });
}