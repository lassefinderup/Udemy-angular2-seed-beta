import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
@Component({
    selector: 'my-app',
    template: '<h1>Hejsa Angular</h1><courses></courses><authors></authors>',
    directives: [CoursesComponent, AuthorsComponent]
})
//view component for entire page (or app)
export class AppComponent { }