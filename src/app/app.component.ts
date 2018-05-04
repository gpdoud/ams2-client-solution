import { Component } from '@angular/core';
import { SystemService } from '@feat/system/system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private syssvc: SystemService) {}
}
