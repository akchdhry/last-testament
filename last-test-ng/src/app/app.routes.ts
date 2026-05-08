import { Routes } from '@angular/router';
import { QuranPage } from './quran-page/quran-page';
import { SunnahPage } from './sunnah-page/sunnah-page';
import { AudioPage } from './audio-page/audio-page';

export const routes: Routes = [
    {path: 'quran', component: QuranPage },
    {path: 'sunnah', component: SunnahPage },
    {path: 'audio', component: AudioPage },
];
