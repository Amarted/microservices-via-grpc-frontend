import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  lastValueFrom,
  share,
} from 'rxjs';
import { HttpResponse } from '../../../application/types/HttpResponse';
import {
  SignInRequestData,
  SignInResponseData,
  signInUrl,
} from './SignInEndpoint';

@Injectable()
export class SignInApiService {
  public constructor(
    private http: HttpClient,
  ) { }

  public async signIn(requestData: SignInRequestData): Promise<HttpResponse<SignInResponseData>> {
    const request = this.http.post<HttpResponse<SignInResponseData>>(signInUrl, requestData)
      .pipe(
        share(),
      );

    return lastValueFrom(request);
  }
}
