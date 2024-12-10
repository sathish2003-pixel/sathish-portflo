import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="home" class="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900/20"></div>
      <div class="container mx-auto px-6 text-center relative z-10">
        <div class="glass p-8 rounded-2xl max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 text-gradient">Software Developer</h1>
          <p class="text-xl text-gray-300 mb-8">Crafting Digital Experiences with Code</p>
          <div class="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <a href="#projects" 
              class="glass px-8 py-4 rounded-lg hover:bg-blue-600/30 transition-all duration-300 transform hover:scale-105">
              View Projects
            </a>
            <a href="#contact" 
              class="glass px-8 py-4 rounded-lg hover:bg-purple-600/30 transition-all duration-300 transform hover:scale-105">
              Contact Me
            </a>
          </div>
          <div class="mt-12 flex justify-center space-x-6">
            <div class="text-center">
              <span class="block text-3xl font-bold text-gradient">5+</span>
              <span class="text-sm text-gray-400">Years Experience</span>
            </div>
            <div class="text-center">
              <span class="block text-3xl font-bold text-gradient">50+</span>
              <span class="text-sm text-gray-400">Projects</span>
            </div>
            <div class="text-center">
              <span class="block text-3xl font-bold text-gradient">20+</span>
              <span class="text-sm text-gray-400">Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}