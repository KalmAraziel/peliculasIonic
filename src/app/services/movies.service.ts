import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMDB, PeliculaDetalle, RespuestaCredits } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const URL = environment.url;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private popularesPages = 0;
  constructor(private http: HttpClient) {

  }

  private ejecutarQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${API_KEY}&include_image_language=es&language=es`;
    console.log(query);
    return this.http.get<T>(query);
  }

  getFeature() {
    const hoy = new Date();
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0 ).getDate();
    const mes = hoy.getMonth() + 1;
    // tslint:disable-next-line: prefer-const
    let mesString;
    if (mes < 10) {
      mesString = '0' + mes;
    } else {
      mesString = mes;
    }
    const inicio = `${hoy.getFullYear()}-${mes}-01`;
    const fin = `${hoy.getFullYear()}-${mes}-${ultimoDia}`;

    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${ inicio }&primary_release_date.lte=${ fin }`);
  }

  getPopulares() {
    this.popularesPages++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPages}`;
    return this.ejecutarQuery<RespuestaMDB>(query);
  }

  getDetallePelicula(id: any) {
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${id}?a=1`);
  }

  getActoresPelicula(id: any) {
    return this.ejecutarQuery<RespuestaCredits>(`/movie/${id}/credits?a=1`);
  }
}
