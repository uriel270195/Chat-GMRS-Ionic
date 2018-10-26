import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDQQBdi7PPOF0vcDmH1wXiNCAkMHTW2Psk",
  authDomain: "chat-gmrs.firebaseapp.com",
  databaseURL: "https://chat-gmrs.firebaseio.com",
  projectId: "chat-gmrs",
  storageBucket: "chat-gmrs.appspot.com",
  messagingSenderId: "1016682480653"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
