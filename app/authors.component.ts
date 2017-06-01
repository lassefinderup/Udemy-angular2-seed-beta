import {Component} from 'angular2/core'
import {AuthorService} from './author.service'

// interpolation = {{ x }} in html tags

@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        {{ title }}
        <ul>
            <li *ngFor="#author of authors">
                {{ author }}
            </li>
        </ul>
        `,
    providers: [AuthorService]
})
export class AuthorsComponent {
    //decorator = attribute
    title = "her er forfatterne!";
    authors;

    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
}