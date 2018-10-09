import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCanvasComponent } from './start-canvas.component';

describe('StartCanvasComponent', () => {
  let component: StartCanvasComponent;
  let fixture: ComponentFixture<StartCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
