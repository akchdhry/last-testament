import { Component, computed, input } from '@angular/core';
import { RouterModule } from "@angular/router";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-main',
  imports: [
    RouterModule,
    RouterOutlet,
    CommonModule
],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  isSidebarCollapsed = input.required<boolean>();
  screenWidth = input.required<number>();
  sizeClass = computed(() => {
    const isSidebarCollapsed = this.isSidebarCollapsed();
    if (isSidebarCollapsed) {
      return ''
    }
    return (this.screenWidth() > 768 ? 'body-trimmed' : 'body-md-screen')
  });
}
