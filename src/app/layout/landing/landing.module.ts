import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingRoutingModule} from './landing-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatTableModule} from '@angular/material';
import {LandingComponent} from './landing.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [LandingComponent]
})
export class LandingModule {
}
