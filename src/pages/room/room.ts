import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'page-room',
  templateUrl: 'room.html'
})
export class RoomPage {

  players: object[] = [];
  public username;
  public isReady = false;
  public roomSubscription: Subscription;
  public playerKey;

  public readyButtonClasses = {
    "ready-button": !this.isReady,
    "not-ready-button": this.isReady
  };

  constructor(
    public db: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.username = this.navParams.get("username");
    //this.players.push({username: this.username, isReady: false});
    this.roomSubscription = this.db.list('/main').valueChanges().subscribe( data => {

      this.players = data;
    });

    this.players.unshift({username: this.username, isReady: false});

    var push = this.db.list('/main').push({

      isReady: this.isReady,
      username: this.username
    })
    push.then(() =>{


    })

    this.playerKey = push.key;
  }

  readyButton(){

    this.isReady = !this.isReady;
    this.db.object('/main/' + this.playerKey).update({isReady: this.isReady})
  }

}
