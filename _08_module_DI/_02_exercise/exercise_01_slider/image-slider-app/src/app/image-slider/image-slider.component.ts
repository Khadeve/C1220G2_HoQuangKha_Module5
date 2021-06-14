import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ImageSliderServiceService } from '../service/image-slider-service.service';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  providers: [ImageSliderServiceService]
})
export class ImageSliderComponent implements OnInit, OnChanges {

  img: string = '';
  imageList: string[] = [];
  @Input() imageNumber: number = 0;

  constructor(private imageSliderService: ImageSliderServiceService) {
    this.imageList = this.imageSliderService.getAll();
  }

  ngOnChanges(): void {
    this.img = this.imageList[this.imageNumber];
    console.log(this.imageList[this.imageNumber]);
  }

  ngOnInit(): void {
  }
}
