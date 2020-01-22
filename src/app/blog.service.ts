import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiUrl: string = 'https://grandcircusco.github.io/demo-apis/blog-posts.json'
  constructor(private http: HttpClient) { }
  getBlog() {
    console.log(this.http.get(`${this.apiUrl}/blog`));
  }
}
