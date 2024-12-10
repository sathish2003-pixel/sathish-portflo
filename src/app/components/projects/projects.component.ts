import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects" class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-16 text-center text-gradient">Featured Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="glass rounded-xl overflow-hidden card-3d">
            <div class="relative">
              <img src="https://via.placeholder.com/400x250" alt="Project 1" class="w-full">
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-gradient">E-Commerce Platform</h3>
              <p class="text-gray-300 mb-4">A full-stack e-commerce solution with modern UI/UX</p>
              <div class="flex flex-wrap gap-2">
                <span class="glass px-3 py-1 rounded-full text-sm">Angular</span>
                <span class="glass px-3 py-1 rounded-full text-sm">Node.js</span>
                <span class="glass px-3 py-1 rounded-full text-sm">MongoDB</span>
              </div>
              <div class="mt-4 flex justify-between items-center">
                <a href="#" class="text-blue-400 hover:text-blue-300 transition-colors">Live Demo</a>
                <a href="#" class="text-blue-400 hover:text-blue-300 transition-colors">Source Code</a>
              </div>
            </div>
          </div>
          
          <div class="glass rounded-xl overflow-hidden card-3d">
            <div class="relative">
              <img src="https://via.placeholder.com/400x250" alt="Project 2" class="w-full">
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-gradient">Task Management App</h3>
              <p class="text-gray-300 mb-4">Collaborative task management solution</p>
              <div class="flex flex-wrap gap-2">
                <span class="glass px-3 py-1 rounded-full text-sm">React</span>
                <span class="glass px-3 py-1 rounded-full text-sm">Firebase</span>
                <span class="glass px-3 py-1 rounded-full text-sm">Redux</span>
              </div>
              <div class="mt-4 flex justify-between items-center">
                <a href="#" class="text-blue-400 hover:text-blue-300 transition-colors">Live Demo</a>
                <a href="#" class="text-blue-400 hover:text-blue-300 transition-colors">Source Code</a>
              </div>
            </div>
          </div>
          
          <div class="glass rounded-xl overflow-hidden card-3d">
            <div class="relative">
              <img src="https://via.placeholder.com/400x250" alt="Project 3" class="w-full">
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-gradient">Analytics Dashboard</h3>
              <p class="text-gray-300 mb-4">Real-time data visualization platform</p>
              <div class="flex flex-wrap gap-2">
                <span class="glass px-3 py-1 rounded-full text-sm">Angular</span>
                <span class="glass px-3 py-1 rounded-full text-sm">D3.js</span>
                <span class="glass px-3 py-1 rounded-full text-sm">WebSocket</span>
              </div>
              <div class="mt-4 flex justify-between items-center">
                <a href="#" class="text-blue-400 hover:text-blue-300 transition-colors">Live Demo</a>
                <a href="#" class="text-blue-400 hover:text-blue-300 transition-colors">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {}