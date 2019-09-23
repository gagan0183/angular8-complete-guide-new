import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers: boolean = false;
  serverName: any = '';
  userName: any = '';
  serverCreated: boolean;
  servers = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 1000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(e: any) {
    console.log(e);
    this.serverName = (<HTMLInputElement>e.target).value;
  }

  resetUserName() {
    this.userName = '';
  }

  ngOnInit() {}
}
