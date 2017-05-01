import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared';

@Component({
    selector: 'user-info-component',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class UserInfoComponent implements OnInit {
    selectedUser: any;
    sub: any;
    userInfo: any;
    gistList: any;
    repoList: any;

    gistPage: any = 1;
    repoPage: any = 1;

    constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService) {
        this.gistList = [];
        this.repoList = [];
    }

    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.selectedUser = params['login']; 
            console.log(this.selectedUser);
            this.getUserInfo();
            this.getGistList();
            this.getRepoList();
        });
    }

    getUserInfo() {
        this.httpService.requestGithub(`users/${this.selectedUser}`, 'GET', {}, (resp) => {
            this.userInfo = resp;
        }, (err) => {
            console.log('An error Occured', err);
        });
    }

    getGistList() {
        let params = {
            page: this.gistPage
        }
        this.httpService.requestGithub(`users/${this.selectedUser}/gists`, 'GET', params, (resp) => {
            this.gistList = this.gistList.concat(resp);
        }, (err) => {
            console.log('An error Occured', err);
        });
    }

    getRepoList() {
        let params = {
            page: this.repoPage
        }
        this.httpService.requestGithub(`users/${this.selectedUser}/repos`, 'GET', params, (resp) => {
            this.repoList = this.repoList.concat(resp);
        }, (err) => {
            console.log('An error Occured', err);
        });
    }

    loadMoreGists() {
        this.gistPage = this.gistPage + 1;
        this.getGistList();
    }

    loadMoreRepos() {
        this.repoPage = this.repoPage + 1;
        this.getRepoList();
    }
}