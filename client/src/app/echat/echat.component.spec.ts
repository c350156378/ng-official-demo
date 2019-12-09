import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchatComponent } from './echat.component';

describe('EchatComponent', () => {
  let component: EchatComponent;
  let fixture: ComponentFixture<EchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
