import { Component, OnInit } from '@angular/core';
import { Pelicula, PeliculaDetalle, Genre } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  {
  peliculas: PeliculaDetalle[] = [];
  generos = [];
  favoritoGenero: any[] = [];

  constructor(private dataLocal: DataLocalService,
    private moviesServices: MoviesService) {
  }

  // cada vez que entra a la pagina se ejecuta
  async ionViewWillEnter() {
    this.peliculas = await this.dataLocal.cargarFavoritos();
    this.generos = await this.moviesServices.cargarGeneros();
    this.pelisPorGenero( this.generos, this.peliculas);
  }
  pelisPorGenero(generos: Genre[], peliculas: PeliculaDetalle[]) {
    this.favoritoGenero = [];
    generos.forEach(genero => {
      this.favoritoGenero.push(
        {
          genero: genero.name,
          pelis: peliculas.filter(peli => {
           return peli.genres.find(genre => genre.id === genero.id)
          })
        }
      );
    });
    console.log( this.favoritoGenero);
  }
}
