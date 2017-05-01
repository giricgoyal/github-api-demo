import { Component, Inject } from '@angular/core';
import { APP_CONFIG } from '../../shared';
import { SessionService } from '../../shared';

@Component({
    selector: 'app-header',
    templateUrl: './component.html',
    styleUrls: ['./component.scss'],
    providers: []
})

export class AppHeaderComponent {
    public title = '';

    constructor(private sessionService: SessionService) {
        this.title = APP_CONFIG.appTitle;
    }
}