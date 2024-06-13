import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  lastValueFrom,
  share,
} from 'rxjs';
import {
  UserGreetingsRequestData, UserGreetingsResponseData, userGreetingsUrl,
} from './endpoints/UserGreetingsEndpoint';

@Injectable()
export class UserApiService {
  public constructor(
    private http: HttpClient,
  ) { }
  public async greetings(requestData: UserGreetingsRequestData): Promise<UserGreetingsResponseData> {
    const request = this.http.post<UserGreetingsResponseData>(userGreetingsUrl, requestData)
      .pipe(
        share(),
      );

    return await lastValueFrom(request);
  }
}
