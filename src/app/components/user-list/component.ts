import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared';

@Component({
    selector: 'user-list-component',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class UserListComponent implements OnInit {
    userList: any;
    searchString: string;

    constructor(private httpService: HttpService) {
        this.userList = [];
    }

    ngOnInit() {
        this.getUserList(1);
    }

    getUserList(since) {
        if (since == 1) {
            this.userList = [];
        }
        let params = {
            since: since
        };
        this.httpService.requestGithub('users', 'GET', params, (resp) => {
            this.userList = this.userList.concat(resp);
        }, (err) => {
            console.log('An error Occured', err);
        });
    }

    loadMore() {
        let since = this.userList[this.userList.length - 1].id;
        if (this.searchString) {
            this.searchUsers(since);
        }
        else {
            this.getUserList(since);
        }
    }

    searchUsers(since) {
        if (!this.searchString) {
            this.getUserList(1);
        }
        
        else {
            if (since == 1) {
                this.userList = [];
            }
            let params = {
                since: since,
                q: this.searchString
            };
            this.httpService.requestGithub('search/users', 'GET', params, (resp) => {
                this.userList = this.userList.concat(resp.items);
            }, (err) => {
                console.log('An error Occured', err);
            });
        }
    }
}