import { Component, OnInit, Input, SimpleChanges, OnChanges, TemplateRef, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MoviesService } from '../../core/services/movies.service';
import { Movie } from '../../core/domain/models/movie.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MovieListComponent implements OnInit, OnChanges {
  movies: Movie[] = [];
  showAllTimes: boolean[] = [];
  previewUrl = '';

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterDate']) {
      this.getMovies();
    }
  }

  async getMovies(): Promise<void> {
    try {
      this.movies = await this.moviesService.getMovies();
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  showAllShowtimes(movieId: number): void {
    this.showAllTimes[movieId] = true;
  }

  hideAllShowtimes(movieId: number): void {
    this.showAllTimes[movieId] = false;
  }
}