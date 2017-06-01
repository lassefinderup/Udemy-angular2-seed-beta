import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
@Component({
    selector: 'my-app',
    template: '<h1>Hejsa Angular</h1><courses></courses>',
    directives: [CoursesComponent]
})
//view component for entire page (or app)
export class AppComponent { }