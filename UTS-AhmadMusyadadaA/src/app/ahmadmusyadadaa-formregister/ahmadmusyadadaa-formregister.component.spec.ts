import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhmadmusyadadaaFormregisterComponent } from './ahmadmusyadadaa-formregister.component';

describe('AhmadmusyadadaaFormregisterComponent', () => {
  let component: AhmadmusyadadaaFormregisterComponent;
  let fixture: ComponentFixture<AhmadmusyadadaaFormregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhmadmusyadadaaFormregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhmadmusyadadaaFormregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
