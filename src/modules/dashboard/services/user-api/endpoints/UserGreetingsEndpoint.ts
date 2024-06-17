import { apiConfiguration } from '../../../../../configurations/api-configuration';

/**
 * The description of the User Greetings request endpoint including the  URL and the request and response data structures.
 */
export const userGreetingsUrl = `${apiConfiguration.baseApiUrl}/user/greetings`;

export interface UserGreetingsRequest {
  username: string;
}

export interface UserGreetingsResponse {
  greetings: string;
}
