import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Swiper1Component } from './swiper1.component';

describe('Swiper1Component', () => {
  let component: Swiper1Component;
  let fixture: ComponentFixture<Swiper1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Swiper1Component]
    });
    fixture = TestBed.createComponent(Swiper1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
