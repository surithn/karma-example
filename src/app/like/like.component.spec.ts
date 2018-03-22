import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeComponent } from './like.component';

describe('LikeComponent', () => {
  let component: LikeComponent;
  let fixture: ComponentFixture<LikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('count likes', () => {
    component.likeCounter();
    expect(component.likeCounter()).toBeTruthy();
    expect(component.getLikeCounter()).toBeGreaterThan(0);
  });

  it('get likes', () => {
    expect(component.getLikeCounter()).toBeGreaterThanOrEqual(0);
    spyOn(component, 'getLikeCounter').and.returnValue(200);
    expect(component.getLikeCounter()).toBe(200);
  });
  
});
