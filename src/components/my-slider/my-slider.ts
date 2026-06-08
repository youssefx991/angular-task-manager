import { ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-my-slider',
  imports: [],
  templateUrl: './my-slider.html',
  styleUrl: './my-slider.css',
})
export class MySlider {
  img : string = 'Messi';
  images: string[] = [
    this.img+'/1.jpg',
    this.img+'/2.jpg',
    this.img+'/3.jpg',
    this.img+'/4.jpg',
    this.img+'/5.jpg',
    this.img+'/6.jpg'
  ];

  currentIndex: number = 0;

  interval: ReturnType<typeof setInterval> | null = null;
  private readonly cdr = inject(ChangeDetectorRef);

  changeImage(index: number): void {
    this.currentIndex = index;
  }

  startSlider(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.cdr.detectChanges();
    }, 1000);
  }

  stopSlider(): void {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }

  }

  ngOnInit() {
    this.startSlider();
  }

  ngOnDestroy(): void {
    this.stopSlider();
  }
}


