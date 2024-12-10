import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <section id="contact" class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-16 text-center text-gradient">Get In Touch</h2>
        <div class="max-w-3xl mx-auto">
          <div class="glass rounded-2xl p-8">
            <form class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium mb-2">First Name</label>
                  <input type="text" 
                    class="w-full px-4 py-2 glass rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                    placeholder="John">
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Last Name</label>
                  <input type="text" 
                    class="w-full px-4 py-2 glass rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                    placeholder="Doe">
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Email</label>
                <input type="email" 
                  class="w-full px-4 py-2 glass rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="john@example.com">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Subject</label>
                <input type="text" 
                  class="w-full px-4 py-2 glass rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="Project Inquiry">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows="4" 
                  class="w-full px-4 py-2 glass rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" 
                class="w-full glass hover:bg-blue-600/30 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Send Message
              </button>
            </form>

            <div class="mt-12 grid md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="text-blue-400 text-2xl mb-2">📧</div>
                <h3 class="font-semibold mb-1">Email</h3>
                <p class="text-sm text-gray-400">example.com</p>
              </div>
              <div class="text-center">
                <div class="text-blue-400 text-2xl mb-2">📱</div>
                <h3 class="font-semibold mb-1">Phone</h3>
                <p class="text-sm text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div class="text-center">
                <div class="text-blue-400 text-2xl mb-2">📍</div>
                <h3 class="font-semibold mb-1">Location</h3>
                <p class="text-sm text-gray-400">New York, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {}