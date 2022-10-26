import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mi-carrusel',
  templateUrl: './mi-carrusel.component.html',
  styleUrls: ['./mi-carrusel.component.css']
})
export class MiCarruselComponent implements OnInit {

  /* array for images in ../../assets/ */
  images: string[];
  img: string;
  c: number;

  constructor() {
    this.images = ["../../assets/html.webp", "../../assets/css.webp", 
    "../../assets/bootstrap.png", "../../assets/WordPress.webp", 
    "../../assets/vue.png", "../../assets/angular.jpg"];
    this.c = 0;
    this.img = this.images[this.c];
  }

  ngOnInit(): void {
  }

  /* function for next image */
  next() {
    if (this.c < this.images.length - 1) {
      this.c++;
    } else {
      this.c = 0;
    }
    this.img = this.images[this.c];   
  }

  /* function for previous image */
  prev() {
    if (this.c > 0) {
      this.c--;
    } else {
      this.c = this.images.length - 1;
    }
    this.img = this.images[this.c];
  }

}
