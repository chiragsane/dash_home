import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

    constructor(private http: Http) { }
    getProjectsData() {
        return this.http.get('app/resources/data/projectsdata.json').map(
            (res) => res.json()
        );
    }
}