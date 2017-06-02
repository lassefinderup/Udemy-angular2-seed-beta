import {Component, Input} from 'angular2/core';

@Component({
    selector: 'favorite',
    template: `
    <i
        class="glyphicon"
        [class.glyphicon-star-empty]="!isFavorite"
        [class.glyphicon-star]="isFavorite"
        (click)="onClick()">
    </i>
    `
})
export class FavoriteComponent {
    //@Input() makes a private property into a public property, easily accessed from the outside
   @Input() isFavorite = false;

    onClick() {
        this.isFavorite = !this.isFavorite;
    }
}