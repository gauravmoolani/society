import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyeventListComponent } from './societyevent-list.component';

describe('SocietyeventListComponent', () => {
  let component: SocietyeventListComponent;
  let fixture: ComponentFixture<SocietyeventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyeventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyeventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
