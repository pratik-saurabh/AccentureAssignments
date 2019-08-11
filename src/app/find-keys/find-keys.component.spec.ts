import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindKeysComponent } from './find-keys.component';

describe('FindKeysComponent', () => {
  let component: FindKeysComponent;
  let fixture: ComponentFixture<FindKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
