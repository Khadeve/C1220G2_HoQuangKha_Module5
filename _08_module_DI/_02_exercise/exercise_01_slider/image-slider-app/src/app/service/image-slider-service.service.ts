import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class ImageSliderServiceService {

  listImage = [
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'
  ];

  constructor() { }

  findImageByNumber(i: number): string {
    return this.listImage[i];
  }

  getAll(): string[] {
    return this.listImage;
  }
}
