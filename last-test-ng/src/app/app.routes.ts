import { Routes } from '@angular/router';
import { QuranPage } from './core/features/quran-page/quran-page';
import { SunnahPage } from './core/features/sunnah-page/sunnah-page';
import { AudioPage } from './core/features/audio-page/audio-page';
import { AboutPage } from './core/features/about-page/about-page';
import { AuthPage } from './auth-page/auth-page';
import { TermsPage } from './terms-page/terms-page';
import { PrivacyPage } from './privacy-page/privacy-page';

export const routes: Routes = [
    {path: 'quran', component: QuranPage },
    {path: 'sunnah', component: SunnahPage },
    {path: 'audio', component: AudioPage },
    {path: 'about', component: AboutPage },
    {path: 'oauth/callback', component: AuthPage },
    {path: 'terms-and-conditions', component: TermsPage},
    {path: 'privacy', component: PrivacyPage},
];
