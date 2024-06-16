import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  UserRegistrationRequestData,
  UserRegistrationResponseData,
  userRegistrationUrl,
} from './endpoints/RegistrationEndpoint';
import {
  lastValueFrom,
  share,
} from 'rxjs';
import { HttpResponse } from '../../../application/interfaces/HttpResponse';

@Injectable()
export class RegistrationApiService {
  public constructor(
    private http: HttpClient,
  ) { }

  public async registration(requestData: UserRegistrationRequestData): Promise<HttpResponse<UserRegistrationResponseData>> {
    const request = this.http.post<HttpResponse<UserRegistrationResponseData>>(userRegistrationUrl, requestData)
      .pipe(
        share(),
      );

    return lastValueFrom(request);
  }
}
