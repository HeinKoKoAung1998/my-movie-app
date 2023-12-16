import { Component, OnInit } from '@angular/core';
import { Result } from './result';
import { MovieResponse } from './movie_response';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movieListResult? : Result[];

  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      
  }

  getMovieList() {
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1`);
  }
 
  getMovies(){
    this.getMovieList()
      .subscribe((response: MovieResponse) => {
        this.movieListResult = response.results;
        console.log(this.movieListResult)
        this.loading = false;
      })
  }
}
