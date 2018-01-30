import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from "rxjs/Subscription";
import { Player} from "../../entities/player";
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

  constructor(
    public db: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
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
