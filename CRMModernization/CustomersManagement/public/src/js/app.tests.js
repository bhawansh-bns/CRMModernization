"use strict";
 
describe("Counter tests", function () {
 
    //beforeEach(module('app'));
    
    /*
    describe('CustomersListCtrl', function(){
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                controller = $controller;
            }));

        it('should have a CustomersListCtrl controller', function() {
            controller('CustomersListCtrl', {$scope: scope});
            //expect(app.CustomersListCtrl).toBeDefined();
            expect(scope.testBtn).toBe('<button class="btn btn-default btn-xs" ng-click="testClick(row)">test</button>');
        });

    });
    */
   
    /*
    describe("App Module:", function() {
        var module;
        beforeEach(function() {
          module = angular.module("app");
        });

        it("should be registered", function() {
          expect(module).not.to.equal(null);
        });
    });
    */
   
    it("gives correct result", function(){
        var num1 = 1;
        var num2 = 2;
        var expected = 3;

        var result = num1 + num2;

        expect(result).toBe(expected);
    })
    
    /*
    it("gives wrong result", function(){
        var num1 = 1;
        var num2 = 2;
        var expected = 4; 

        var result = num1 + num2;

        expect(result).toBe(expected);
    })
    */

});