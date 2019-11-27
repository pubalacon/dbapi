import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'app-userlist',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
    private U: Observable<User[]>;
    message: string;
    dataSaved = false;

    constructor(private router: Router, private userService: UserService) { }

    getConfirmedText(confirmed: boolean) {
        return confirmed ? 'confirmed' : 'not confirmed yet';
    }

    LoadUser() {
        this.U = this.userService.GetUser();
        console.log(this.U);
    }

    UserEdit(id: string) {
        localStorage.removeItem('id');
        localStorage.setItem('id', id.toString());
        this.router.navigate(['/user/add'], { queryParams: { Id: id } });
    }

    DeleteUser(id: string) {
        if (confirm('Are You Sure To Delete this Informations')) {
            this.userService.DeleteUser(id).subscribe(
                () => {
                    this.dataSaved = true;
                    this.message = 'Deleted Successfully';
                }
            );
        }
    }

    ngOnInit() {
        localStorage.clear();
        this.LoadUser();
    }

}
