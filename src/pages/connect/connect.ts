import { Component } from '@angular/core';
import {AlertController, Loading, LoadingController, NavController} from 'ionic-angular';
import { RoomPage } from "../room/room";

@Component({
  selector: 'page-connect',
  templateUrl: 'connect.html'
})
export class ConnectPage {

  loading: Loading;
  username: string;

  constructor(private navCtrl: NavController,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {

  }

  connectToRoom(){

    if(/^[a-zA-Z0-9]+$/.test(this.username) && this.username) {

      this.showLoading("Connecting to room...")
      this.navCtrl.push(RoomPage, {
        username: this.username
      });
    }
    else {
      this.username = "";
      this.showAlert('Error', 'Invalid Username');
    }
  }

  showLoading(message: string){

    this.loading = this.loadingCtrl.create({

      content: message,
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showAlert(title: string, message: string) {
    let alertBox = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alertBox.present();
  }

}
