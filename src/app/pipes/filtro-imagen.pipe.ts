import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroImagen'
})
export class FiltroImagenPipe implements PipeTransform {

  transform(peliculas: any[] ): any[] {
    const pelis = peliculas.filter(peli => {
      return peli.backdrop_path;
    });
    return pelis;
  }

}
