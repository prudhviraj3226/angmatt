

import {Injectable, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PostService {
    constructor(@Inject(Http) private http: Http) { }
    // Uses http.get() to load a single JSON file
    getPost() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts').map((res: Response) => res.json());
    }
}