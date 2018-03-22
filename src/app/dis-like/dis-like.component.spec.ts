import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisLikeComponent } from './dis-like.component';

describe('DisLikeComponent', () => {
  let component: DisLikeComponent;
  let fixture: ComponentFixture<DisLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call dislike method', () => {
    component.disLike();
    expect(component.disLikeCounter).toBe(1);
  });
});
