import { environment } from '../../../environments/environment';

const api = {
    prod: '',
    dev: '',
    localhost: 'http://localhost:3000/api'
}

var env = 'dev';
if (environment.production) {
    env = 'prod'
}

export const APP_CONFIG = {
    api: api[env],
    appTitle: 'Github UserList Demo',
    storage: 'localStorage',
    jwtKey: 'jwtToken'
}