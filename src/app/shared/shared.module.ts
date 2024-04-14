import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    FooterComponent
  ]
})
export class SharedModule { }
