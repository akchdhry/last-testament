import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  items = [
    {
      routeLink: 'quran',
      icon: 'fa-solid fa-book-quran',
      label: 'The Holy Quran'
    },
    {
      routeLink: 'sunnah',
      icon: 'fa-solid fa-kaaba',
      label: "The Prophet's Tradition"
    },
    {
      routeLink: 'audio',
      icon: 'fa-solid fa-headphones',
      label: 'Hear the Scripture'
    },
  ]
}
