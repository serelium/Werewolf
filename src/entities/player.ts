export class Player{

  public username: string;
  public isReady: boolean;
  public userType: string;

  constructor(username: string, userType: string){

    this.username = username;
    this.isReady = false;
    this.userType = userType;
  }
}
