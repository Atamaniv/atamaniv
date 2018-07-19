import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {UserStore} from "./store/UserStore";
import {UserApi} from "exodus-web-api";
import {SignInStore} from "./store/SignInStore";

export class App {
    userApi: UserApi;
    userStore: UserStore;
    signInStore: SignInStore;

    constructor() {
        this.userApi = new UserApi();
        this.signInStore = new SignInStore(this.userApi);

        this.render();
    }

    render() {
        ReactDOM.render(<AppHotComponent app={this} />, document.getElementById('root'));
    }
}