import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  UserRegistrationRequestData,
  userRegistrationUrl,
} from './endpoints/RegistrationEndpoint';
import {
  lastValueFrom,
  share,
} from 'rxjs';
import { HttpResponse } from '../../../application/interfaces/HttpResponse';

@Injectable()
export class AuthApiService {
  public constructor(
    private http: HttpClient,
  ) { }

  public async registration(requestData: UserRegistrationRequestData): Promise<HttpResponse<void>> {
    const request = this.http.post<HttpResponse<void>>(userRegistrationUrl, requestData)
      .pipe(
        share(),
      );

    return lastValueFrom(request);
  }
}
