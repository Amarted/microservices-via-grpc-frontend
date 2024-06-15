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

@Injectable()
export class AuthApiService {
  public constructor(
    private http: HttpClient,
  ) { }

  public async registration(requestData: UserRegistrationRequestData): Promise<void> {
    const request = this.http.post(userRegistrationUrl, requestData)
      .pipe(
        share(),
      );

    await lastValueFrom(request);
  }
}
