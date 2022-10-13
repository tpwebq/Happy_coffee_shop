import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricesRoutingModule } from './prices-routing.module';
import { PricesS1Component } from './prices-s1/prices-s1.component';
import { PricesS2Component } from './prices-s2/prices-s2.component';
import { PricesFiltersComponent } from './prices-filters/prices-filters.component';
import { PricesListComponent } from './prices-list/prices-list.component';
import { PricesComponent } from './prices.component';


@NgModule({
  declarations: [
    PricesS1Component,
    PricesS2Component,
    PricesFiltersComponent,
    PricesListComponent,
    PricesComponent
  ],
  imports: [
    CommonModule,
    PricesRoutingModule
  ]
})
export class PricesModule { }
