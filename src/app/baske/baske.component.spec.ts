import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaskeComponent } from './baske.component';

describe('BaskeComponent', () => {
  let component: BaskeComponent;
  let fixture: ComponentFixture<BaskeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaskeComponent]
    });
    fixture = TestBed.createComponent(BaskeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
