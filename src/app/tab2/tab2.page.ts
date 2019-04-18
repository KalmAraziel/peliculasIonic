import { MoviesService } from './../services/movies.service';
import { Component } from '@angular/core';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar: string;
  peliculas: Pelicula[] = [];
  ideas: string[] = ['spiderman', 'advengers', 'pokemon', 'batman'];
  buscando = false;

  constructor(private movieServ: MoviesService,
    private modalCtrl: ModalController
  ) {

  }
  detallePelicula(pelicua: Pelicula) {

  }
  buscar(event) {
    this.buscando = true;
    const valor: string = event.detail.value;
    console.log(valor);
    if(valor !== ''){
      this.movieServ.buscarPeliculas(valor).subscribe(resp => {
        this.peliculas = resp['results'];
        this.buscando = false;
      });
    } else {
      this.peliculas = [];
      this.buscando = false;
    }
    
  }
}
