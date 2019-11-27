import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { UserService } from './user.service';
import { User } from './user';

@Component({
    selector: 'app-userview',
    templateUrl: './user-view.component.html',
    styleUrls: ['./user-view.component.css']
})

export class UserViewComponent implements OnInit {
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}
