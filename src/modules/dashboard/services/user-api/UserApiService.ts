import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import {
  UserGreetingsRequestData, userGreetingsUrl,
} from './endpoints/UserGreetingsEndpoint';

@Injectable()
export class UserApiService {
  public constructor(
    private http: HttpClient,
  ) {}
  public async sendUsername(requestData: UserGreetingsRequestData): Promise<void> {
    const respone = await lastValueFrom(this.http.post(userGreetingsUrl, requestData));
    console.log('RESPONSE', respone);
  }
}
