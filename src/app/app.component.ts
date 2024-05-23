import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
  ],
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{



  title = 'room3d';

  s1: number = 0;
  s2: number = 0;
  s3: number = -7;
  s4: number = 0;
  s5: number = 0;
  s6: number = 45;
  s7: number = 0;
  s8: number = 75;
  s9: number = 0;
  swBtnTv: number = 0;

  ngOnInit() {
    this.obtenerAnchoResolucion();
    window.addEventListener("resize", this.obtenerAnchoResolucion);

    const h = document.querySelector("#h") as HTMLElement;
    const b = document.querySelector(".contRoom") as HTMLElement;

    let base = (e: MouseEvent) => {
      var rect = h.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      h.style.transform = `
      perspective(90vw)
      rotateX(${y * 4 + (this.s8 + this.s9)}deg)
      rotateZ(${-x * 12 + (this.s6 + this.s7)}deg)
      translateZ(${this.s3 + this.s2}vw)
      translateX(${this.s4}vw)
      translateY(${this.s5}vw)
      scale3d(${this.s1 + 0.9},${this.s1 + 0.9},${this.s1 + 0.9})
      `;
    };

    let resetRotation = () => {
      var rect = h.getBoundingClientRect();
      var x = 0;
      var y = 0;
      h.style.transform = `
      perspective(90vw)
      rotateX(${y * 4 + (this.s8 + this.s9)}deg)
      rotateZ(${-x * 12 + (this.s6 + this.s7)}deg)
      translateZ(${this.s3 + this.s2}vw)
      translateX(${this.s4}vw)
      translateY(${this.s5}vw)
      scale3d(${this.s1 + 0.9},${this.s1 + 0.9},${this.s1 + 0.9})
    `;
    };

    b.addEventListener("pointermove", base);
    b.addEventListener("mouseleave", resetRotation);
  }

  obtenerAnchoResolucion(): number {
    const ancho = window.innerWidth;
    console.log("Ancho de resolución:", ancho);
    return ancho;
  }

  scalep() {
    this.s1 = this.s1 + 1;
    this.transformar();
  }

  scalem() {
    this.s1 = this.s1 - 1;
    this.transformar();
  }

  up() {
    this.s2 = this.s2 + 10;
    this.transformar();
  }

  down() {
    this.s2 = this.s2 - 10;
    this.transformar();
  }

  left() {
    this.s4 = this.s4 - 10;
    this.transformar();
  }

  front() {
    this.s5 = this.s5 - 1;
    this.transformar();
  }

  back() {
    this.s5 = this.s5 + 1;
    this.transformar();
  }

  right() {
    this.s4 = this.s4 + 10;
    this.transformar();
  }

  rr() {
    this.s7 = this.s7 + 1;
    this.transformar();
  }

  scaleDisplay() {
    if (this.swBtnTv == 0) {
      this.s1 = 4;
      this.s2 = -60;
      this.s3 = 0;
      this.s7 = 45;
      this.s8 = 90;
      this.transformar();
      this.swBtnTv = 1;
    } else {
      this.s1 = 0;
      this.s2 = 0;
      this.s3 = -7;
      this.s7 = 0;
      this.s8 = 75;
      this.transformar();
      this.swBtnTv = 0;
    }
  }

  rl() {
    this.s7 = this.s7 - 1;
    this.transformar();
  }

  ru() {
    this.s9 = this.s9 + 1;
    this.transformar();
  }

  rd() {
    this.s9 = this.s9 - 1;
    this.transformar();
  }

  transformar() {
    const h = document.querySelector("#h") as HTMLElement;
    h.style.transform = `perspective(90vw) rotateX(${
      this.s8 + this.s9
    }deg) rotateZ(${this.s6 + this.s7}deg) translateZ(${
      this.s3 + this.s2
    }vw) translateX(${this.s4}vw) translateY(${this.s5}vw) scale3d(${
      this.s1 + 0.9
    },${this.s1 + 0.9},${this.s1 + 0.9})`;
  }

  onZoomChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = +target.value;
    if (value < 50) {
      this.s1 = (value / 50) - .10; // Zoom out
    } else {
      this.s1 = (value - 50) / 10; // Zoom in
    }
    this.transformar();
  }

  onRotateXChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = +target.value;
    if (value < 50) {
      this.s7 = -((50 - value) / 10) * 20; // Rotate left
    } else {
      this.s7 = ((value - 50) / 10) * 20; // Rotate right
    }
    this.transformar();
  }

  onRotateYChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = +target.value;
    if (value < 50) {
      this.s9 = -((50 - value) / 10) * 20; // Rotate down
    } else {
      this.s9 = ((value - 50) / 10) * 20; // Rotate up
    }
    this.transformar();
  }

  onMoveYChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = +target.value;
    if (value < 50) {
      this.s5 = -((50 - value) / 50) * 50; // Move down
    } else {
      this.s5 = ((value - 50) / 50) * 50; // Move up
    }
    this.transformar();
  }

  onMoveXChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = +target.value;
    if (value < 50) {
      this.s4 = -((50 - value) / 50) * 50; // Move left
    } else {
      this.s4 = ((value - 50) / 50) * 50; // Move right
    }
    this.transformar();
  }

  onMoveZChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = +target.value;
    if (value < 50) {
      this.s2 = -((50 - value) / 50) * 100; // Move down
    } else {
      this.s2 = ((value - 50) / 50) * 25; // Move up
    }
    this.transformar();
  }


}
