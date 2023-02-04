import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No created servers yet';
  serverName = 'Testserver';
  userName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  visibilityOfDetails = false;
  numberOfClick = 0;
  arrayOfClicks: string[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  changeVisibilityOfDetails(): void {
    // this.numberOfClick++;
    // this.arrayOfClicks.push(this.numberOfClick);
    this.arrayOfClicks.push((new Date()).toString());
    console.log(typeof (new Date()), (new Date()).toDateString())
    this.visibilityOfDetails = !this.visibilityOfDetails;
  }



  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onCreateServer() {
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created!! Name is '
      + this.serverName;

    setTimeout(() => {
      this.serverCreationStatus = '';
      this.serverCreated = true;
    }, 2000);
  }

  userNameCheaker() {
    return this.userName.length === 0;
  }

  resetUserName() {
    this.userName = '';
  }
}
