import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-16 text-center text-gradient">About Me</h2>
        <div class="glass rounded-2xl p-8 max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12">
            <div class="space-y-6">
              <h3 class="text-2xl font-semibold mb-4 text-gradient">Who I Am</h3>
              <p class="text-gray-300 leading-relaxed">
                I'm a passionate software developer with expertise in modern web technologies.
                I specialize in building responsive and performant web applications using
                cutting-edge tools and frameworks.
              </p>
              <div class="space-y-4">
                <div class="flex items-center space-x-4">
                  <span class="text-blue-400">📍</span>
                  <span>Based in New York, USA</span>
                </div>
                <div class="flex items-center space-x-4">
                  <span class="text-blue-400">🎓</span>
                  <span>Computer Science Graduate</span>
                </div>
                <div class="flex items-center space-x-4">
                  <span class="text-blue-400">💼</span>
                  <span>Full Stack Developer</span>
                </div>
              </div>
            </div>
            <div class="space-y-6">
              <h3 class="text-2xl font-semibold mb-4 text-gradient">What I Do</h3>
              <ul class="space-y-4">
                <li class="flex items-center space-x-3">
                  <span class="text-blue-400">▹</span>
                  <span>Web Application Development</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span class="text-blue-400">▹</span>
                  <span>Mobile App Development</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span class="text-blue-400">▹</span>
                  <span>UI/UX Design Implementation</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span class="text-blue-400">▹</span>
                  <span>Database Architecture</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span class="text-blue-400">▹</span>
                  <span>Cloud Infrastructure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}