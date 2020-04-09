import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootStrapPanelComponent } from './boot-strap-panel.component';

describe('BootStrapPanelComponent', () => {
  let component: BootStrapPanelComponent;
  let fixture: ComponentFixture<BootStrapPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootStrapPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootStrapPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
