import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropPredicitonComponent } from './crop-prediciton/crop-prediciton.component';
import { FertilizerPredicitonComponent } from './fertilizer-prediciton/fertilizer-prediciton.component';
import { ServicesRoutingModule } from './services-routing.module';



@NgModule({
  declarations: [
    CropPredicitonComponent,
    FertilizerPredicitonComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule 
  ],
  exports: [
    CropPredicitonComponent,
    FertilizerPredicitonComponent
  ]

})
export class ServicesModule { }
