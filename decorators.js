"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
function log(target, key) {
    console.log(target);
    console.log(key + 'Will be called');
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    // Extend funtionality of a method
    Person.prototype.sayMyName = function () {
        return this.name;
    };
    __decorate([
        log
    ], Person.prototype, "sayMyName");
    return Person;
}());
var person = new Person('Juan');
console.log(person.sayMyName()); // Juan // 'sayMyName will be called;
