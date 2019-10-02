import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter();
  @Output('bCreates') blueprintCreated = new EventEmitter();
  //newServerName: string;
  newServerContent: string;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(newServerName) {
    this.serverCreated.emit({serverName: newServerName.value, serverContent: this.newServerContent});
  }

  onAddBlueprint(newServerName) {
    this.blueprintCreated.emit({serverName: newServerName.value, serverContent: this.newServerContent});
  }
}