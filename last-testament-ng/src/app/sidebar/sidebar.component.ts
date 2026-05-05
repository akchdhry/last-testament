import {
  Component,
  signal,
  computed,
  HostBinding,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition} from '@angular/animations';

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  badge?: number;
  children?: NavItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('open', style({ height: '*', opacity: 1 })),
      state('closed', style({ height: '0px', opacity: 0 })),
      transition('open <=> closed', animate('240ms cubic-bezier(0.4, 0, 0.2, 1)')),
    ]),
    trigger('labelFade', [
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      state('hidden', style({ opacity: 0, transform: 'translateX(-8px)' })),
      transition('visible <=> hidden', animate('200ms ease')),
    ]),
  ],
})
export class SidebarComponent {
  collapsed = signal(false);
  activeId = signal('dashboard');
  expandedGroups = signal<Set<string>>(new Set(['analytics']));

  navItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: 'grid' },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: 'bar-chart',
      children: [
        { id: 'overview', label: 'Overview', icon: 'eye' },
        { id: 'reports', label: 'Reports', icon: 'file-text', badge: 3 },
        { id: 'funnels', label: 'Funnels', icon: 'filter' },
      ],
    },
    { id: 'projects', label: 'Projects', icon: 'folder', badge: 5 },
    {
      id: 'team',
      label: 'Team',
      icon: 'users',
      children: [
        { id: 'members', label: 'Members', icon: 'user' },
        { id: 'roles', label: 'Roles', icon: 'shield' },
      ],
    },
    { id: 'messages', label: 'Messages', icon: 'message-circle', badge: 12 },
    { id: 'calendar', label: 'Calendar', icon: 'calendar' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];

  bottomItems: NavItem[] = [
    { id: 'help', label: 'Help & Docs', icon: 'help-circle' },
    { id: 'profile', label: 'My Profile', icon: 'user-circle' },
  ];

  labelState = computed(() => this.collapsed() ? 'hidden' : 'visible');

  toggleCollapse(): void {
    this.collapsed.update(v => !v);
    if (this.collapsed()) {
      // close all expanded groups when collapsing
      this.expandedGroups.set(new Set());
    }
  }

  toggleGroup(id: string, event: Event): void {
    event.stopPropagation();
    if (this.collapsed()) return;
    this.expandedGroups.update(set => {
      const next = new Set(set);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  isGroupExpanded(id: string): boolean {
    return this.expandedGroups().has(id);
  }

  setActive(id: string): void {
    this.activeId.set(id);
  }

  isActive(id: string): boolean {
    return this.activeId() === id;
  }

  // SVG icon paths keyed by name
  icons: Record<string, string> = {
    grid: 'M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z',
    'bar-chart': 'M18 20V10M12 20V4M6 20v-6',
    eye: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zm11 3a3 3 0 100-6 3 3 0 000 6z',
    'file-text': 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8',
    filter: 'M22 3H2l8 9.46V19l4 2v-8.54L22 3z',
    folder: 'M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z',
    users: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm14 10v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75',
    user: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z',
    shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    'message-circle': 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z',
    calendar: 'M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM16 2v4M8 2v4M3 10h18',
    settings: 'M12 15a3 3 0 100-6 3 3 0 000 6zm8.66-2.5a8.5 8.5 0 00.17-1.5 8.5 8.5 0 00-.17-1.5l2.17-1.7a.5.5 0 00.12-.63l-2.06-3.57a.5.5 0 00-.61-.22l-2.57 1.03a8.6 8.6 0 00-2.58-1.5L14.9 1.5A.48.48 0 0014.43 1H9.57a.48.48 0 00-.47.4L8.73 4.1a8.6 8.6 0 00-2.58 1.5L3.58 4.57a.5.5 0 00-.61.22L.91 8.36a.49.49 0 00.12.63l2.17 1.7A8.9 8.9 0 003 12c0 .51.06 1.02.17 1.5L1 15.2a.5.5 0 00-.12.63l2.06 3.57c.12.22.38.3.61.22l2.57-1.03a8.6 8.6 0 002.58 1.5l.37 2.6c.06.23.27.41.52.41h4.86c.25 0 .46-.18.52-.4l.37-2.61a8.6 8.6 0 002.58-1.5l2.57 1.03c.23.09.49 0 .61-.22l2.06-3.57a.5.5 0 00-.12-.63l-2.17-1.7z',
    'help-circle': 'M12 22a10 10 0 100-20 10 10 0 000 20zM9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01',
    'user-circle': 'M12 22a10 10 0 100-20 10 10 0 000 20zM12 8a4 4 0 100 8 4 4 0 000-8zM6.17 18.94a6 6 0 0111.66 0',
    chevronDown: 'M6 9l6 6 6-6',
    menu: 'M3 12h18M3 6h18M3 18h18',
    arrowLeft: 'M19 12H5M12 19l-7-7 7-7',
  };

  svgPath(name: string): string {
    return this.icons[name] ?? '';
  }
}
