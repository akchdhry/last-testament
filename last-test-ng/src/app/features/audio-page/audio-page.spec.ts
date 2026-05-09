import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioPage } from './audio-page';

describe('AudioPage', () => {
  let component: AudioPage;
  let fixture: ComponentFixture<AudioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AudioPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
