import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityShort } from './activity-short';

describe('ActivityShort', () => {
  let component: ActivityShort;
  let fixture: ComponentFixture<ActivityShort>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityShort],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityShort);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
