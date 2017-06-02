import {Component, Input} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Lasse's Typescript Angular2 sandbox project</h1>
        <courses></courses>
        <authors></authors>
        <button class="btn btn-primary" [class.active]="isActive">button class binding test (if isActive is true, button will be active)</button>
        <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'black'">button style binding blue for active, black for not</button>
        <div (click)="onDivClick()">
            <button (click)="onClick($event)">button event firing (sets isActive to true)</button>
        </div>
        <input type="text" [value]="title" (input)="title = $event.target.value" />
        <input type="button" (click)="title = ''" value="Clear - component to the dom (comp property changes, dom changes)" />
        Preview: {{ title }}
        
        <favorite [isFavorite]="post.isFavorite"></favorite>
        `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent]
})

//note: use property and event binding

//view component for entire page (or app)
export class AppComponent {
    title = "changes in DOM is reflected in Component" 
    isActive = true;

    post = {
        title: "title",
        isFavorite: true
    }

    onClick($event){
        console.log("clicked!!!", $event);
        this.isActive = false;
        // can stop even propagartion, e.g. even will not be passed to div
        //$event.stopPropagation();
    }

    onDivClick($event) {
        console.log("event also handled by div!");
    }
}   