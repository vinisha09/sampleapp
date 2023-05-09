import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/image1.jpg',
    'assets/image2.jpg',
    'assets/image3.jpg'
  ];
  currentIndex: number = 0;
  changeImageInterval = 10000; // Time interval in milliseconds (10 seconds)
  private intervalId: any;


  constructor() {}
  ngOnInit(): void {
    this.startImageChangeInterval();
  }

  ngOnDestroy(): void {
    this.stopImageChangeInterval();
  }

  showImage(index: number) {
    this.currentIndex = index;
  }

  startImageChangeInterval() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, this.changeImageInterval);
  }

  stopImageChangeInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
