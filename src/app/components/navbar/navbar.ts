import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements OnInit {
  private mobileMenuOpen = false;
  private currentTime = new Date();
  public showTime = false;

  public get formattedTime(): string {
    // Format the time as HH:MMAM/PM
    const hours = this.currentTime.getHours();
    const minutes = this.currentTime.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero if needed
    return `${formattedHours}:${formattedMinutes}${ampm}`;
  }

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);

    setInterval(() => {
      this.showTime = !this.showTime;
    }, 5000);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  get isMobileMenuOpen(): boolean {
    return this.mobileMenuOpen;
  }
}
