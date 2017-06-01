System.register(['angular2/core', './courses.component', './authors.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "changes in DOM is reflected in Component";
                    this.isActive = true;
                    this.isFavorite = false;
                    this.isFavorite = false;
                }
                AppComponent.prototype.onFavoriteClick = function () {
                    console.log("glyphicon star value: " + this.isFavorite);
                    this.isFavorite = !this.isFavorite;
                };
                AppComponent.prototype.onClick = function ($event) {
                    console.log("clicked!!!", $event);
                    this.isActive = false;
                    // can stop even propagartion, e.g. even will not be passed to div
                    //$event.stopPropagation();
                };
                AppComponent.prototype.onDivClick = function ($event) {
                    console.log("event also handled by div!");
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AppComponent.prototype, "isFavorite", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Lasse's Typescript Angular2 sandbox project</h1>\n        <courses></courses>\n        <authors></authors>\n        <button class=\"btn btn-primary\" [class.active]=\"isActive\">button class binding test (if isActive is true, button will be active)</button>\n        <button class=\"btn btn-primary\" [style.backgroundColor]=\"isActive ? 'blue' : 'black'\">button style binding blue for active, black for not</button>\n        <div (click)=\"onDivClick()\">\n            <button (click)=\"onClick($event)\">button event firing (sets isActive to true)</button>\n        </div>\n        <input type=\"text\" [value]=\"title\" (input)=\"title = $event.target.value\" />\n        <input type=\"button\" (click)=\"title = ''\" value=\"Clear - component to the dom (comp property changes, dom changes)\" />\n        Preview: {{ title }}\n        \n        <div>\n        <i class=\"glyphicon\"\n        [ngClass]=\"isFavorite ? 'glyphicon-star' : 'glyphicon-star-empty'\"            \n        (click)=\"onFavoriteClick()\"></i>\n        </div>\n        ",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map