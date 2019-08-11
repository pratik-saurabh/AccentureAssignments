import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateStringComponent } from './duplicate-string.component';

describe('DuplicateStringComponent', () => {
  let component: DuplicateStringComponent;
  let fixture: ComponentFixture<DuplicateStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
