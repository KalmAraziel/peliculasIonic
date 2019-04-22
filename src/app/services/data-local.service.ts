import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  peliculas: PeliculaDetalle[] = [];

  constructor(private storege: Storage, public toastController: ToastController) {

  }

  guardarPelicula( pelicula: PeliculaDetalle ) {
    let existe = false;
    let mensaje = '';
    for (const peli of this.peliculas) {
      if (peli.id === pelicula.id) {
        existe = true;
        break;
      }
    }
    if (existe) {
      this.peliculas.filter(peli => peli.id !== pelicula.id);
      mensaje = 'Removido de Favoritos';
    } else {
      this.peliculas.push(pelicula);
      mensaje = 'Agregada de Favoritos';
    }
    this.storege.set('peliculas', this.peliculas);
    this.presentToast(mensaje);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
