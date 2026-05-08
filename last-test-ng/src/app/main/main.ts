import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
