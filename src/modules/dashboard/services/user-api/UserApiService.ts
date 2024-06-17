import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  lastValueFrom,
  share,
} from 'rxjs';
import {
  UserGreetingsRequest, UserGreetingsResponse, userGreetingsUrl,
} from './endpoints/UserGreetingsEndpoint';

@Injectable()
export class UserApiService {
  public constructor(
    private http: HttpClient,
  ) { }
  public async greetings(requestData: UserGreetingsRequest): Promise<UserGreetingsResponse> {
    const request = this.http.post<UserGreetingsResponse>(userGreetingsUrl, requestData)
      .pipe(
        share(),
      );

    return await lastValueFrom(request);
  }
}
