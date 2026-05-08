import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuranPage } from './quran-page';

describe('QuranPage', () => {
  let component: QuranPage;
  let fixture: ComponentFixture<QuranPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuranPage],
    }).compileComponents();

    fixture = TestBed.createComponent(QuranPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
