import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map, Observable } from 'rxjs';
import { MovieMapper } from '../domain/mappers/movie.mapper';
import { Movie } from '../domain/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl = 'http://localhost:5000/movies';

  constructor(private http: HttpClient, private movieMapper: MovieMapper) { }

  getMovies(): Promise<Movie[]> {
    return lastValueFrom(this.http.get<any[]>(this.apiUrl).pipe(
      map(movies => movies.map(movie => this.movieMapper.mapToMovie(movie)))
    ));
  }
}