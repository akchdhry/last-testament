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
      label: "The Prophet's Tradition"
    },
    {
      routeLink: 'quran',
      icon: 'fa-solid fa-book-quran',
      label: 'The Holy Quran'
    },
    {
      routeLink: 'audio',
      icon: 'fa-solid fa-headphones',
      label: 'Hear the Scripture'
    },
  ]
  toggleCollapse(): void {
    this.changeIsSidebarCollapsed.emit(!this.isSidebarCollapsed());
  }
}
