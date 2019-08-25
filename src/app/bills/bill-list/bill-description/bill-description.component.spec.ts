import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillDescriptionComponent } from './bill-description.component';

describe('BillDescriptionComponent', () => {
  let component: BillDescriptionComponent;
  let fixture: ComponentFixture<BillDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
