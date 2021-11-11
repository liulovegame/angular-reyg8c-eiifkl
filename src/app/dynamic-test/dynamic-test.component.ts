import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-test',
  templateUrl: './dynamic-test.component.html',
  styleUrls: ['./dynamic-test.component.css'],
})
export class DynamicTestComponent implements OnInit {
  @Input() type: string = 'success';
  @Output() output = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
