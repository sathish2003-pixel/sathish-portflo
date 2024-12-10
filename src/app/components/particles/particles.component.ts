import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-particles',
  standalone: true,
  template: `
    <canvas #particleCanvas 
      class="absolute inset-0 z-0"
      [style.opacity]="0.2">
    </canvas>
  `
})
export class ParticlesComponent implements OnInit {
  @ViewChild('particleCanvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationFrameId: number = 0;

  ngOnInit() {
    this.initCanvas();
    this.createParticles();
    this.animate();
    this.handleResize();
  }

  private initCanvas() {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.setCanvasSize();
  }

  private setCanvasSize() {
    this.canvas.nativeElement.width = window.innerWidth;
    this.canvas.nativeElement.height = window.innerHeight;
  }

  private handleResize() {
    window.addEventListener('resize', () => {
      this.setCanvasSize();
      this.createParticles();
    });
  }

  private createParticles() {
    this.particles = [];
    const numberOfParticles = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    
    for (let i = 0; i < numberOfParticles; i++) {
      this.particles.push(new Particle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight
      ));
    }
  }

  private animate() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    this.particles.forEach(particle => {
      particle.update();
      particle.draw(this.ctx);
    });

    this.connectParticles();
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  private connectParticles() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(66, 153, 225, ${0.2 * (1 - distance / 100)})`;
          this.ctx.lineWidth = 1;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationFrameId);
  }
}

class Particle {
  private velocity = { x: (Math.random() - 0.5) * 0.5, y: (Math.random() - 0.5) * 0.5 };
  private size = Math.random() * 2 + 1;

  constructor(public x: number, public y: number) {}

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (this.x < 0 || this.x > window.innerWidth) this.velocity.x *= -1;
    if (this.y < 0 || this.y > window.innerHeight) this.velocity.y *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = '#4299e1';
    ctx.fill();
  }
}