import { apiConfiguration } from '../../../../../configurations/api-configuration';

/**
 * The description of the User Greetings request endpoint including the  URL and the request and response data structures.
 * Has no respone data.
 */
export const userGreetingsUrl = `${apiConfiguration.baseApiUrl}/user/greetings`;

export interface UserGreetingsRequestData {
  username: string;
}
