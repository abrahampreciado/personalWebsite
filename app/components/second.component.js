System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SecondComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SecondComponent = (function () {
                function SecondComponent() {
                }
                SecondComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h3>Second Component</h3>\n    <p class=\"styleTest\">This is the content of SecondComponent</p>\n    <p>Routing Parameter ID: {{id}}</p>\n  ",
                        styleUrls: ['./scss/sass/scssSheets/_portfolio.scss']
                    }), 
                    __metadata('design:paramtypes', [])
                ], SecondComponent);
                return SecondComponent;
            })();
            exports_1("SecondComponent", SecondComponent);
        }
    }
});
//# sourceMappingURL=second.component.js.map