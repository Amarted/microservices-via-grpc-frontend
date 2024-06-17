/**
 * The description of the User Sign In request endpoint including the URL and the request and response data structures.
 */

import { apiConfiguration } from '../../../../configurations/api-configuration';

export const signInUrl = `${apiConfiguration.baseApiUrl}/auth/sign-in`;

export interface SignInRequest {
  username: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
}
