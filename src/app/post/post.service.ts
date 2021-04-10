import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError,map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
    getPostsByAuthorId(id): Observable<any>{
      return this.http.get<any>('api/all_authors/'+id+'/posts');
    }

    getAuthor(): Observable<any>{
      return this.http.get('api/authors');
   }

   getPostsByAuthors(id1,id2): Observable<any>{
     console.log(id1,id2)
   return this.http.get<any>('api/all_authors/'+id1+'/posts/'+id2);
 }

 updatePostsForm(id1,json): Observable<any>{
  console.log(json)
return this.http.put<any>('api/all_authors/'+id1+'/posts/'+json.post_id, JSON.stringify(json)).pipe(
  map((response) => {

    return response;

  }),
  )
}

createPost(auth_id,json): Observable<any>{
  console.log(json)
  
  return this.http.post<any>('api/all_authors/'+auth_id+'/posts', JSON.stringify(json)).pipe(
    map((response) => {
  
      return response;
  
    }),
    )
  }

  deletePost(id1,id2) {
    return this.http.delete('api/all_authors/'+id1+'/posts/'+id2);
  }
 
}
