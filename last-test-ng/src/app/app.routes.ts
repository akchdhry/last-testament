import { Routes } from '@angular/router';
import { QuranPage } from './features/quran-page/quran-page';
import { SunnahPage } from './features/sunnah-page/sunnah-page';
import { AudioPage } from './features/audio-page/audio-page';

export const routes: Routes = [
    {path: 'quran', component: QuranPage },
    {path: 'sunnah', component: SunnahPage },
    {path: 'audio', component: AudioPage },
];
