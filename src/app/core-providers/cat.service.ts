import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CreateCatRequest } from '../cat/cat.model';
import { CoreProvidersModule } from './core-providers.module';

@Injectable({providedIn: CoreProvidersModule})
export class CatService {

  constructor(@Inject('API_WRITE_BASE_URL') private readonly apiWriteURL: string,
              @Inject('API_READ_BASE_URL') private readonly apiReadURL: string,
              private readonly httpClient: HttpClient) {
  }

  public create(request: CreateCatRequest): Observable<any> {
    // Removing metadata of base64 encoding.
    request.pictureURL = request.pictureURL.replace(/^data:image\/(png|jpg);base64,/, '');
    return this.httpClient.post(this.apiWriteURL.concat('/api/write'), request, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      catchError(this.handleError)
    );
  }

  public readAll(): Observable<any> {
    return this.httpClient.get(this.apiReadURL.concat('/api/read')).pipe(
      catchError(this.handleError)
    );
  }

  // TODO: Handle a bit better messages there.
  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${ error.status }, ` +
        `body was: ${ error.error }`);
    }
    console.log('Error object', error);
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
