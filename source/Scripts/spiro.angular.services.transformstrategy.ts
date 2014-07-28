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
/// <reference path="spiro.models.ts" />

module Spiro.Angular {

    export interface ITransformStrategy {
        transform(rep: Spiro.DomainObjectRepresentation, loader: ILoaderWithTransform): ng.IPromise<any>;
        transform(rep: Spiro.ActionResultRepresentation, loader: ILoaderWithTransform): ng.IPromise<any>;
        transform(rep: Spiro.ResourceRepresentation, loader: ILoaderWithTransform): ng.IPromise<any>;
    }

    // this is the default transform strategy that flattens the object
    app.service('transformStrategy', function($q : ng.IQService) {

        var transformStrategy = <ITransformStrategy>this;

        function transformObject(rep: Spiro.DomainObjectRepresentation) {

            var defer = $q.defer();

            var names = _.map(rep.propertyMembers(), (v, n: string) => n);
            var values = _.map(rep.propertyMembers(), (v: Spiro.PropertyMember) => v.value().toString());
            var result = <any>_.object(names, values);
            result["nof_rep"] = rep;
            result["nof_url"] = "#" + "/" + rep.domainType() + "/" + rep.instanceId();

            defer.resolve(result);

            return defer.promise;
        };

        function transformActionResult(ar: Spiro.ActionResultRepresentation, loader: ILoaderWithTransform) {
            var list = ar.result().list().value().models;
            var resultArray : ng.IPromise<any>[] = [];

            _.each((list), (link: Spiro.Link) => {
                resultArray.push(loader.loadAndTransform(link.getTarget().hateoasUrl, Spiro.DomainObjectRepresentation));
            });

            return $q.all(resultArray);
        };

        transformStrategy.transform = (rep: Spiro.ResourceRepresentation, loader: ILoaderWithTransform) => {
            if (rep instanceof Spiro.DomainObjectRepresentation) {
                return transformObject(<Spiro.DomainObjectRepresentation>rep);
            }
            if (rep instanceof Spiro.ActionResultRepresentation) {
                return transformActionResult(<Spiro.ActionResultRepresentation>rep, loader);
            }

            var defer = $q.defer();
            defer.reject("not supported representation");
            return defer.promise;
        };

    });
}