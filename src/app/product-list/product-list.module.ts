import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTestComponent } from '../dynamic-test/dynamic-test.component';

@NgModule({
  imports: [CommonModule],
  entryComponents: [DynamicTestComponent],
  declarations: [DynamicTestComponent],
})
export class ProductListModule {}
