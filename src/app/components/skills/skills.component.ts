import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  category: string;
  proficiency: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-20 relative">
      <div class="parallax-bg absolute inset-0 bg-fixed"
           style="background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
                  opacity: 0.1;
                  background-size: cover;
                  background-position: center;
                  transform: translateZ(-1px) scale(2);">
      </div>
      <div class="container mx-auto px-6 relative z-10">
        <h2 class="text-4xl font-bold mb-16 text-center text-gradient">Skills & Technologies</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Frontend -->
          <div class="glass p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
            <h3 class="text-xl font-semibold mb-6 text-gradient">Frontend</h3>
            <div class="space-y-4">
              <div class="skill-item">
                <div class="flex justify-between mb-2">
                  <span>Angular</span>
                  <span>95%</span>
                </div>
                <div class="h-2 bg-gray-700 rounded-full">
                  <div class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style="width: 95%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Backend -->
          <div class="glass p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
            <h3 class="text-xl font-semibold mb-6 text-gradient">Backend</h3>
            <div class="space-y-4">
              <div class="skill-item">
                <div class="flex justify-between mb-2">
                  <span>Python</span>
                  <span>90%</span>
                </div>
                <div class="h-2 bg-gray-700 rounded-full">
                  <div class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style="width: 90%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Cloud -->
          <div class="glass p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
            <h3 class="text-xl font-semibold mb-6 text-gradient">Cloud</h3>
            <div class="space-y-4">
              <div class="skill-item">
                <div class="flex justify-between mb-2">
                  <span>AWS Lambda</span>
                  <span>85%</span>
                </div>
                <div class="h-2 bg-gray-700 rounded-full">
                  <div class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style="width: 85%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="flex justify-between mb-2">
                  <span>EC2</span>
                  <span>80%</span>
                </div>
                <div class="h-2 bg-gray-700 rounded-full">
                  <div class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style="width: 80%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Databases -->
          <div class="glass p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
            <h3 class="text-xl font-semibold mb-6 text-gradient">Databases</h3>
            <div class="space-y-4">
              <div class="skill-item">
                <div class="flex justify-between mb-2">
                  <span>MongoDB</span>
                  <span>88%</span>
                </div>
                <div class="h-2 bg-gray-700 rounded-full">
                  <div class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style="width: 88%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="flex justify-between mb-2">
                  <span>SQL</span>
                  <span>92%</span>
                </div>
                <div class="h-2 bg-gray-700 rounded-full">
                  <div class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style="width: 92%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Architecture -->
          <div class="glass p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
            <h3 class="text-xl font-semibold mb-6 text-gradient">Architecture</h3>
            <div class="space-y-4">
              <div class="skill-item">
                <div class="flex justify-between mb-2">
                  <span>Serverless</span>
                  <span>87%</span>
                </div>
                <div class="h-2 bg-gray-700 rounded-full">
                  <div class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style="width: 87%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {}