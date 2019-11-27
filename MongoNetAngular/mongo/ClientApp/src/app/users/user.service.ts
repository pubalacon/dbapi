import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { User } from './user';

/*
@Injectable({
    providedIn: 'root'
})
*/
@Injectable()

export class UserService {
    Url = 'http://localhost:51336/api/users';

    users: User[];

    /*
    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<User[]>(baseUrl + 'api/users').subscribe(result => {
            this.users = result;
        }, error => console.error(error));
    }
    */
    constructor(private http: HttpClient) {
        http.get<User[]>(this.Url).subscribe(result => {
            this.users = result;
        }, error => console.error(error));
    }

    InsertUser(user: User) {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post<User[]>(this.Url + '/insert/', user, httpOptions);
    }

    GetUser(): Observable<User[]> {
        // return this.http.get<Users[]>(this.Url + '/GetAllUsers');
        return this.http.get<User[]>(this.Url);
    }

    DeleteUser(id: string): Observable<number> {
        return this.http.get<number>(this.Url + '/Delete/?id=' + id);
    }

    GetUserById(id: string) {
        return this.http.get<User>(this.Url + '/GetUserById/?id=' + id);
    }

    UpdateUser(user: User) {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post<User[]>(this.Url + '/UpdateUser/', user, httpOptions);
    }

    // Retourne la liste des types des Pokémons
    getConfirmLabels(): Array<string> {
        return ['not confirmed', 'confirmed'];
    }

}
