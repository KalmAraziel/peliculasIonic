import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula} from '../interfaces/interfaces';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  peliculasPopulares: Pelicula[] = [];
  peliculasRecientes: Pelicula[] = [];

  constructor( private movies: MoviesService ) {

  }

  ngOnInit(): void {
    this.movies.getFeature().subscribe( (peliculas) => {
      this.peliculasRecientes = peliculas.results;
    });

    this.movies.getPopulares().subscribe( peliculas => {
      console.log('Populares: ', peliculas.results);
      this.peliculasPopulares = peliculas.results;
    });
  }
}
