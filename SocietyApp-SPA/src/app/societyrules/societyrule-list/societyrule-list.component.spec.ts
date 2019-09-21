import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyruleListComponent } from './societyrule-list.component';

describe('SocietyruleListComponent', () => {
  let component: SocietyruleListComponent;
  let fixture: ComponentFixture<SocietyruleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyruleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyruleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
