import {Component, ViewChild} from '@angular/core';
import {Platform, Nav, Config, ToastController, NavController, App} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ConnectPage} from "../pages/connect/connect";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild('navCtrl') nav : NavController;

  rootPage:any = ConnectPage;
  lastTimeBackPress;

  constructor(public platform: Platform,
              public toastCtrl: ToastController,
              statusBar: StatusBar,
              splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    /*platform.registerBackButtonAction(() => {

      let activeView = this.nav.getActive();

      if(activeView != null){
        if(this.nav.canGoBack()) {
          this.nav.pop();
        }else if (typeof activeView.instance.backButtonAction === 'function')
          activeView.instance.backButtonAction();
        else this.nav.parent.select(0); // goes to the first tab
      }
    });*/

    /*platform.registerBackButtonAction(() => {

      let view = this.nav.getActive();
      if (view.component.name == "ConnectPage") {
        //Double check to exit app
        if (new Date().getTime() - this.lastTimeBackPress < 3000) {
          this.platform.exitApp(); //Exit from app
        } else {
          let toast = this.toastCtrl.create({
            message: 'Press back again to exit App',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          this.lastTimeBackPress = new Date().getTime();
        }
      } else {
        // go to previous page
        this.nav.pop({});
      }
    });*/
  }
}
