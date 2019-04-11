import { Pipe, PipeTransform } from '@angular/core';

const URL = 'https://image.tmdb.org/t/p';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
  

  transform(img: any, size: string = 'w500') : string {
    if (!img) {
      return './assets/no-image-banner.jpg';
    }
    const imgUrl = `${ URL }/${ size }${ img }`;    
    return imgUrl;
  }

}
