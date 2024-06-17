/**
 * The description of the User Registration request endpoint including the  URL and the request and response data structures.
 */
import { apiConfiguration } from '../../../../../configurations/api-configuration';

export const userRegistrationUrl = `${apiConfiguration.baseApiUrl}/auth/registration`;

export interface UserRegistrationRequest {
  username: string;
  password: string;
}

export interface UserRegistrationResponse {
  accessToken: string;
}
