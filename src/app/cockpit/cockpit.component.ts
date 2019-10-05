import { Component, Output, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter();
  @Output('bCreates') blueprintCreated = new EventEmitter();
  @ViewChild('newServerContent', {static: true}) newServerContent: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(newServerName) {
    this.serverCreated.emit({serverName: newServerName.value, serverContent: this.newServerContent.nativeElement.value});
  }

  onAddBlueprint(newServerName) {
    this.blueprintCreated.emit({serverName: newServerName.value, serverContent: this.newServerContent.nativeElement.value});
  }
}