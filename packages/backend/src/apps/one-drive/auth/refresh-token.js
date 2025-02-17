import { URLSearchParams } from 'node:url';

import authScope from '../common/auth-scope.js';

const refreshToken = async ($) => {
  const params = new URLSearchParams({
    client_id: $.auth.data.clientId,
    client_secret: $.auth.data.clientSecret,
    grant_type: 'refresh_token',
    refresh_token: $.auth.data.refreshToken,
  });

  const { data } = await $.http.post(
    'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    params.toString(), {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      additionalProperties: {
        skipAddingBaseUrl: true,
      },
    }
  );

  await $.auth.set({
    accessToken: data.access_token,
    expiresIn: data.expires_in,
    scope: data.scope,
    tokenType: data.token_type,
  });
};

export default refreshToken;
