(function () {
'use strict';

var ShoppingList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "10"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Candies",
    quantity: "5"
  }
];

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var list = this;
  list.toBuyItems = ShoppingListCheckOffService.getBuyItems();

  list.boughtItems = function(itemIndex){
    ShoppingListCheckOffService.boughtItems(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var list = this;
  list.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
  var service = this;

  var toBuyItems = ShoppingList;
  var boughtItems = [];

  service.boughtItems = function (itemIndex){
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  }

  service.getBuyItems = function ()
  {
    return toBuyItems;
  }

  service.getBoughtItems = function ()
  {
    return boughtItems;
  }
}

})();
