import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed w-full glass text-white py-4 z-50">
      <nav class="container mx-auto px-6">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold text-gradient">Portfolio</h1>
          
          <!-- Hamburger Menu -->
          <button 
            class="hamburger md:hidden focus:outline-none"
            [class.open]="isMenuOpen"
            (click)="toggleMenu()"
            aria-label="Menu">
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>

          <!-- Desktop Menu -->
          <ul class="hidden md:flex space-x-8">
            <li><a href="#home" class="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#about" class="hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#skills" class="hover:text-blue-400 transition-colors">Skills</a></li>
            <li><a href="#projects" class="hover:text-blue-400 transition-colors">Projects</a></li>
            <li><a href="#contact" class="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        <!-- Mobile Menu -->
        <div 
          class="md:hidden"
          [class.hidden]="!isMenuOpen">
          <ul class="pt-4 pb-2 space-y-4">
            <li><a href="#home" class="block hover:text-blue-400 transition-colors" (click)="toggleMenu()">Home</a></li>
            <li><a href="#about" class="block hover:text-blue-400 transition-colors" (click)="toggleMenu()">About</a></li>
            <li><a href="#skills" class="block hover:text-blue-400 transition-colors" (click)="toggleMenu()">Skills</a></li>
            <li><a href="#projects" class="block hover:text-blue-400 transition-colors" (click)="toggleMenu()">Projects</a></li>
            <li><a href="#contact" class="block hover:text-blue-400 transition-colors" (click)="toggleMenu()">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}