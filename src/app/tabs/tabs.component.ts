import { Component } from "@angular/core";

@Component({
  selector: "app-tabs",
  template: `
    <tab>
      <pane id="1"></pane>
      <pane id="2"></pane>
      <pane id="3" *ngIf="shouldShow">
        <tab>
          <pane id="3_1"></pane>
          <pane id="3_2"></pane>
        </tab>
      </pane>
    </tab>

    <button (click)="show()">Show 3</button>
  `
})
export class TabsComponent {
  shouldShow = false;

  show() {
    this.shouldShow = true;
  }
}
