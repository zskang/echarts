import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PEchartsComponent } from './p-echarts.component';

describe('PEchartsComponent', () => {
  let component: PEchartsComponent;
  let fixture: ComponentFixture<PEchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PEchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
