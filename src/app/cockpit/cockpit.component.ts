import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter();
  @Output() blueprintCreated = new EventEmitter();
  newServerName: string;
  newServerContent: string;

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }
}