import { Component,OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';

// Initialization for ES Users
import {
  Popover,
  Ripple,
  initTWE,
} from "tw-elements";


//npm install tw-elements
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  ngOnInit(): void {
    // Inizializza i componenti di Tailwind Elements
    initTWE({ Popover, Ripple });
  }
}
