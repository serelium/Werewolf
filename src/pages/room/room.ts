import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from "rxjs/Subscription";
import { Player} from "../../entities/player";
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import {GamePage} from "../game/game";

@Component({
  selector: 'page-room',
  templateUrl: 'room.html'
})
export class RoomPage {

  public players: Player[] = [];
  public numberOfPlayers = 0;
  public player: Player = new Player("", "");

  public playersSubscription: Subscription;
  public playerKey;
  public roomRef;
  public playersRef;

  constructor(
    public db: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {

    this.roomRef = this.db.list('/room');
    this.playersRef = this.db.list('/room/players');

    this.subscribeToRoom();
  }

  async subscribeToRoom(){

    await new Promise(resolve => {
      this.playersSubscription = this.playersRef.valueChanges().subscribe( data => {

        this.players = data;
        this.players.splice(8);
        this.numberOfPlayers = Object.keys(data).length;
        this.db.object('/room').update({numberOfPlayers: this.numberOfPlayers})

        console.log(this.player.userType);
        if(this.player.userType === "host"){

          let gameStart = true;
          this.players.forEach(p => {

            if(!p.isReady)
              gameStart = false;
          });

          if(gameStart)
            this.db.object('/room').update({gameStart: true})
        }

        resolve();
      });
    });

    this.db.object('/room/gameStart').valueChanges().subscribe( data =>{

      if(data == true)
        this.navCtrl.push(GamePage);
    });

    console.log(this.numberOfPlayers);

    if(this.numberOfPlayers >= 8){

      this.showAlert("Room Full", "Sorry the room is full!");
      this.navCtrl.pop();
    }

    if(this.numberOfPlayers == 0)
      this.player = new Player(this.navParams.get("username"), "host");
    else
      this.player = new Player(this.navParams.get("username"), "player");

    let push = this.playersRef.push(this.player);

    push.then(() =>{

    });

    this.playerKey = push.key;
  }

  readyButton(){

    this.player.isReady = !this.player.isReady;
    this.db.object('/room/players/' + this.playerKey).update({isReady: this.player.isReady})
  }

  disconnectPlayer(){

    this.playersSubscription.unsubscribe();
    this.playersRef.remove(this.playerKey);
  }

  ionViewWillLeave(){

    this.disconnectPlayer()
  }

  ionViewDidLeave(){

    this.disconnectPlayer();
  }

  ionViewWillUnload(){

    this.disconnectPlayer();
  }

  /*backButtonAction(){

    console.log("BACK");
    this.disconnectPlayer();
  }*/

  showAlert(title: string, message: string) {

    let alertBox = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alertBox.present();
  }

}
