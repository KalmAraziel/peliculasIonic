import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
// tslint:disable-next-line: no-input-rename
  @Input() idPelicula: number;
  constructor(private movisServ: MoviesService) {
  }

  ngOnInit() {
    console.log('idPelicula: ', this.idPelicula);
    this.movisServ.getDetallePelicula(this.idPelicula).subscribe(detallePelicula => {
      console.log(detallePelicula);
    });

    this.movisServ.getActoresPelicula(this.idPelicula).subscribe(actores => {
      console.log(actores);
    });
  }

}
