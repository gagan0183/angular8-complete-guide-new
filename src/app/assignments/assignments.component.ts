import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  displayText: boolean = false;
  logs: any = [];
  constructor() {}

  ngOnInit() {}

  toggleText() {
    this.displayText = !this.displayText;
    this.logs.push(new Date().getTime());
  }
}
