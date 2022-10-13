import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryS1Component } from './gallery-s1/gallery-s1.component';
import { GalleryS2Component } from './gallery-s2/gallery-s2.component';
import { GallerySliderComponent } from './gallery-slider/gallery-slider.component';
import { GalleryComponent } from './gallery.component';


@NgModule({
  declarations: [
    GalleryS1Component,
    GalleryS2Component,
    GallerySliderComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
