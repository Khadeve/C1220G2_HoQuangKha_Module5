import { TestBed } from '@angular/core/testing';

import { ImageSliderServiceService } from './image-slider-service.service';

describe('ImageSliderServiceService', () => {
  let service: ImageSliderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageSliderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
