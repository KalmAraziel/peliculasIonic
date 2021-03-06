import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Pelicula, PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
// tslint:disable-next-line: no-input-rename
  @Input() idPelicula: number;
  pelicula: PeliculaDetalle;
  ocultarCaracteres = 150;
  actores: Cast[] = [];
  slidesOptsActores = {
    slidesPerView: 2.5,
    freeMode: true
  };
  estrella = 'star-outline';
  constructor(
    private movisServ: MoviesService,
    private modalCtrl: ModalController,
    private dataLocal: DataLocalService
  ) {
  }

  ngOnInit() {
    // console.log('idPelicula: ', this.idPelicula);

    this.dataLocal.existePelicula(this.idPelicula).then(existe => {
      this.estrella = (existe) ? 'star' : 'star-outline' ;
    });
    this.movisServ.getDetallePelicula(this.idPelicula).subscribe(detallePelicula => {
      console.log(detallePelicula);
      this.pelicula = detallePelicula;
    });

    this.movisServ.getActoresPelicula(this.idPelicula).subscribe(actores => {
      this.actores.push(...actores.cast);
    });
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  favorito() {
    const existe = this.dataLocal.guardarPelicula(this.pelicula);
    this.estrella = (existe) ? 'star' : 'star-outline' ;

  }

}
