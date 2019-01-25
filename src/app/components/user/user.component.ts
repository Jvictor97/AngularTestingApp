import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    //template: '<h2>John Doe</h2>'
    //styles: [` h2 { color: blue }`]
})

export class UserComponent implements OnInit{
    // Properties
    user: User;

    // Methods
    constructor() {
        
    }

    ngOnInit() {
        this.user = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com'
        }
    }
}