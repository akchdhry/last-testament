import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunnahPage } from './sunnah-page';

describe('SunnahPage', () => {
  let component: SunnahPage;
  let fixture: ComponentFixture<SunnahPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunnahPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SunnahPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
