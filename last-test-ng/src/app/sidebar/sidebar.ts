import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  isSidebarCollapsed = input.required<boolean>();
  changeIsSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink: 'sunnah',
      icon: 'fa-solid fa-kaaba',
      label: "The Life of the Prophet"
    },
    {
      routeLink: 'quran',
      icon: 'fa-solid fa-book-quran',
      label: 'The Holy Quran'
    },
    {
      routeLink: 'audio',
      icon: 'fa-solid fa-headphones',
      label: "Recitations"
    },
    {
      routeLink: 'bible',
      icon: 'fa-solid fa-book',
      label: 'The Previous Scriptures'
    },
  ]
  toggleCollapse(): void {
    this.changeIsSidebarCollapsed.emit(!this.isSidebarCollapsed());
  }
}
