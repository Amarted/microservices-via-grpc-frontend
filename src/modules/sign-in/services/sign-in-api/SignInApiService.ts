import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  lastValueFrom,
  share,
} from 'rxjs';
import { HttpResponse } from '../../../application/types/HttpResponse';
import {
  SignInRequest,
  SignInResponse,
  signInUrl,
} from './SignInEndpoint';

@Injectable()
export class SignInApiService {
  public constructor(
    private http: HttpClient,
  ) { }

  public async signIn(requestData: SignInRequest): Promise<HttpResponse<SignInResponse>> {
    const request = this.http.post<HttpResponse<SignInResponse>>(signInUrl, requestData)
      .pipe(
        share(),
      );

    return lastValueFrom(request);
  }
}
