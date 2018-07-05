import { Component, OnInit, Input } from '@angular/core';
import { JsonResponse } from '@feat/utility/json-response';

@Component({
  selector: 'app-error-detail',
  templateUrl: './error-detail.component.html',
  styleUrls: ['./error-detail.component.css']
})
export class ErrorDetailComponent implements OnInit {

  @Input() resp: JsonResponse;

  constructor() { }

  ngOnInit() {
  }

}
