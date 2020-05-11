import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScMcComponent } from './sc-mc.component';

describe('ScMcComponent', () => {
  let component: ScMcComponent;
  let fixture: ComponentFixture<ScMcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScMcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScMcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
