import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicallerComponent } from './apicaller.component';

describe('ApicallerComponent', () => {
  let component: ApicallerComponent;
  let fixture: ComponentFixture<ApicallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApicallerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApicallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
