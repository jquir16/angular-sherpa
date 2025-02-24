import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieMapper {

  public mapToMovie(movie: any): Movie {
    return {
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      director: movie.director,
      casting: movie.casting,
      release_date: movie.release_date,
      start_date: movie.start_date,
      end_date: movie.end_date,
      runtime: movie.runtime,
      mpaa: movie.mpaa
    };
  }
}