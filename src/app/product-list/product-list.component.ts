import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { products } from '../products';
import { DynamicTestComponent } from '../dynamic-test/dynamic-test.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  constructor(private cfr: ComponentFactoryResolver) {}

  @ViewChild('dlContainer', { read: ViewContainerRef })
  container: ViewContainerRef;

  share(name: string) {
    window.alert('The product has been shared!' + name);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  addComponent() {
    const com = this.cfr.resolveComponentFactory(DynamicTestComponent);
    this.container.createComponent(com);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
