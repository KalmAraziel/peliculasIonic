import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula} from '../interfaces/interfaces';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
 
  peliculasRecientes: Pelicula[] = [];
  constructor( private movies: MoviesService ) {

  }

  ngOnInit(): void {
    this.movies.getFeature().subscribe( (peliculas) => {
      console.log(peliculas.results);
      this.peliculasRecientes = peliculas.results;
    })
  }
}
