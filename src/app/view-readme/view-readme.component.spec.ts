import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReadmeComponent } from './view-readme.component';

describe('ViewReadmeComponent', () => {
  let component: ViewReadmeComponent;
  let fixture: ComponentFixture<ViewReadmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReadmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReadmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
