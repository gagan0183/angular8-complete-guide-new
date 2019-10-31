import { Component } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'This is server'}];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  value = 9;

  constructor(private loggingService: LoggingService) {}

   onServerAdded(serverData) {
    this.loggingService.logStatus('starts');
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onPChanges() {
    this.serverElements[0].name = 'Changes';
  }

  interval(number) {
    console.log(this.evenNumbers);
    if(number % 2 === 0) {
      this.evenNumbers.push(number);
    }
    else {
      this.oddNumbers.push(number);
    }
  }
}
