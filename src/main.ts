import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/components/header/header.component';
import { HeroComponent } from './app/components/hero/hero.component';
import { AboutComponent } from './app/components/about/about.component';
import { SkillsComponent } from './app/components/skills/skills.component';
import { ProjectsComponent } from './app/components/projects/projects.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { ScrollTopComponent } from './app/components/scroll-top/scroll-top.component';
import { ParticlesComponent } from './app/components/particles/particles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    ScrollTopComponent,
    ParticlesComponent
  ],
  template: `
    <div class="bg-gray-900 min-h-screen">
      <app-header></app-header>
      <app-particles></app-particles>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-contact></app-contact>
      <app-footer></app-footer>
      <app-scroll-top></app-scroll-top>
    </div>
  `
})
export class App {}

bootstrapApplication(App);