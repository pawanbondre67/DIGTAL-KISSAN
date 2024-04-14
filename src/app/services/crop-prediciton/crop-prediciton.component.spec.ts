import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropPredicitonComponent } from './crop-prediciton.component';

describe('CropPredicitonComponent', () => {
  let component: CropPredicitonComponent;
  let fixture: ComponentFixture<CropPredicitonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CropPredicitonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CropPredicitonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
