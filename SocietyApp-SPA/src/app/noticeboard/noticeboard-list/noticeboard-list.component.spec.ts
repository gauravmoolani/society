import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeboardListComponent } from './noticeboard-list.component';

describe('NoticeboardListComponent', () => {
  let component: NoticeboardListComponent;
  let fixture: ComponentFixture<NoticeboardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeboardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
