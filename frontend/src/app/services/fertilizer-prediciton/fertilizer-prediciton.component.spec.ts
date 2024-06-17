import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizerPredicitonComponent } from './fertilizer-prediciton.component';

describe('FertilizerPredicitonComponent', () => {
  let component: FertilizerPredicitonComponent;
  let fixture: ComponentFixture<FertilizerPredicitonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FertilizerPredicitonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FertilizerPredicitonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
