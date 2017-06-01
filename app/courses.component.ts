//component bygget op fra bunden

import {Component} from 'angular2/core'
import {CourseService} from './course.service'

@Component({
    //css selector for host html element.
    selector: 'courses',
    //specifies the html that will be inserted in the DOM. Can be inline or separate file
    // ngFor = #course er lokalvariablen, of er et keyword, courses objektet som loopes
    template: `
        <h2>Courses</h2>
        {{ title }}
        <ul>
            <li *ngFor="#course of courses">
                {{ course }}
            </li>
        </ul>
        `
})
export class CoursesComponent {
    //decorator = attribute
    title = "Her e r titlen!";
    courses;

    // constructor(courseService: CourseService){

    // }

}