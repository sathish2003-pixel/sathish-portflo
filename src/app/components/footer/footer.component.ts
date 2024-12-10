import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="py-12">
      <div class="container mx-auto px-6">
        <div class="glass rounded-2xl p-8">
          <div class="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 class="text-xl font-semibold mb-4 text-gradient">Quick Links</h3>
              <ul class="space-y-2">
                <li><a href="#home" class="text-gray-400 hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#about" class="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#projects" class="text-gray-400 hover:text-blue-400 transition-colors">Projects</a></li>
                <li><a href="#contact" class="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-4 text-gradient">Connect</h3>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">GitHub</a></li>
                <li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">Twitter</a></li>
                <li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-4 text-gradient">Newsletter</h3>
              <p class="text-gray-400 mb-4">Subscribe to my newsletter for updates</p>
              <div class="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  class="flex-1 px-4 py-2 glass rounded-l-lg focus:ring-2 focus:ring-blue-600 outline-none">
                <button class="px-6 py-2 bg-blue-600 rounded-r-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div class="text-center text-gray-400 pt-8 border-t border-gray-800">
            <p>© 2024 Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}