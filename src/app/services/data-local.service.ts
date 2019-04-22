import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  peliculas: PeliculaDetalle[] = [];

  constructor(private storege: Storage) {

  }

  guardarPelicula( pelicula: PeliculaDetalle ) {
    this.peliculas.push(pelicula);
    this.storege.set('peliculas', this.peliculas);
  }
}
