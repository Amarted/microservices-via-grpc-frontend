/**
 * The description of the User Registration request endpoint including the  URL and the request and response data structures.
 * Has no response.
 */
import { apiConfiguration } from '../../../../../configurations/api-configuration';

export const userRegistrationUrl = `${apiConfiguration.baseApiUrl}/auth/registration`;

export interface UserRegistrationRequestData {
  username: string;
  password: string;
}

export interface UserRegistrationResponseData {
  accessToken: string;
}
