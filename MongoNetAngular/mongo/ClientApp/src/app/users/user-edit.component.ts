import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
import { Router } from '@angular/router';

import { UserService } from './user.service';
import { User } from './user';

@Component({
    selector: 'app-useredit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {
    message: string;
    dataSaved = false;
    AddUser: FormGroup;
    UserIdUpdate = '0';

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}
