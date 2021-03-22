import { Component, ContentChildren, QueryList } from "@angular/core";
import { Pane } from "./pand.directive";

@Component({
  selector: "tab",
  template: `
    <div class="top-level">Top level panes: {{ serializedPanes }}</div>
    <div class="nested">
      Arbitrary nested panes: {{ serializedNestedPanes }}
    </div>
  `
})
export class TabComponent {
  @ContentChildren(Pane) topLevelPanes!: QueryList<Pane>;
  @ContentChildren(Pane, { descendants: true })
  arbitraryNestedPanes!: QueryList<Pane>;

  get serializedPanes(): string {
    return this.topLevelPanes
      ? this.topLevelPanes.map(p => p.id).join(", ")
      : "";
  }
  get serializedNestedPanes(): string {
    return this.arbitraryNestedPanes
      ? this.arbitraryNestedPanes.map(p => p.id).join(", ")
      : "";
  }
}
