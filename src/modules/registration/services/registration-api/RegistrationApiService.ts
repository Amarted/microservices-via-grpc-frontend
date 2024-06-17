import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  UserRegistrationRequest,
  UserRegistrationResponse,
  userRegistrationUrl,
} from './endpoints/RegistrationEndpoint';
import {
  lastValueFrom,
  share,
} from 'rxjs';
import { HttpResponse } from '../../../application/types/HttpResponse';

@Injectable()
export class RegistrationApiService {
  public constructor(
    private http: HttpClient,
  ) { }

  public async registration(requestData: UserRegistrationRequest): Promise<HttpResponse<UserRegistrationResponse>> {
    const request = this.http.post<HttpResponse<UserRegistrationResponse>>(userRegistrationUrl, requestData)
      .pipe(
        share(),
      );

    return lastValueFrom(request);
  }
}
