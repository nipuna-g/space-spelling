import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeSummaryComponent } from './practice-summary.component';

describe('PracticeSummaryComponent', () => {
  let component: PracticeSummaryComponent;
  let fixture: ComponentFixture<PracticeSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
