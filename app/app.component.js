System.register(['angular2/core', 'angular2/router', './dataService/data.service', './components/about.component', './components/resume.component', './components/projects.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, data_service_1, about_component_1, resume_component_1, projects_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (resume_component_1_1) {
                resume_component_1 = resume_component_1_1;
            },
            function (projects_component_1_1) {
                projects_component_1 = projects_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_dataService, location) {
                    this._dataService = _dataService;
                    this.currentNavigationId = 1;
                    //hacking location status so page refresh doesn't break the app
                    if (location.path() == '/resume') {
                        this.currentNavigationId = 2;
                    }
                    else if (location.path() == '/projects') {
                        this.currentNavigationId = 3;
                    }
                    else {
                        this.currentNavigationId = 1;
                    }
                }
                AppComponent.prototype.onSelect = function (id) {
                    this.currentNavigationId = id;
                };
                AppComponent.prototype.isSelected = function (id) {
                    return id == this.currentNavigationId;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'main',
                        templateUrl: './views/main.html',
                        styleUrls: ['./scss/sass/scssSheets/_main.scss'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [data_service_1.DataService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: about_component_1.AboutComponent, as: 'About' },
                        { path: '/resume', component: resume_component_1.ResumeComponent, as: 'Resume' },
                        { path: '/projects', component: projects_component_1.ProjectsComponent, as: 'Projects' }
                    ]), 
                    __metadata('design:paramtypes', [data_service_1.DataService, router_1.Location])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map