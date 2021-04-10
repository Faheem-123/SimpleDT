import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError,map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getAuthors(): Observable<any>{
    return this.http.get('api/authors');
 }

 getId(id):Observable<any>{
  return this.http.get('api/authors/'+id);
 }

 updateAuthor(json): Observable<any>{
  
return this.http.put<any>('api/authors/'+json.id, JSON.stringify(json)).pipe(
  map((response) => {
    return response;
  }),
  )
}

deleteAuthor(id) {
  return this.http.delete('api/authors/' + id)
}

createAuthor(json): Observable<any> {
  return this.http.post<any>('api/authors', JSON.stringify(json)).pipe(
    map((response) => {
      return response;
    }),
  )
}
}
