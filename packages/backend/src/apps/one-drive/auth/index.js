import verifyCredentials from './verify-credentials.js';
import isStillVerified from './is-still-verified.js';
import refreshToken from './refresh-token.js';
import generateAuthUrl from './generate-auth-url.js';

export default {
  fields: [
    {
      key: 'screenName',
      label: 'Screen Name',
      type: 'string',
      required: true,
      readOnly: false,
      value: null,
      placeholder: null,
      description:
        'Screen name of your connection to be used on Automatisch UI.',
      clickToCopy: false,
    },
    {
      key: 'oAuthRedirectUrl',
      label: 'OAuth Redirect URL',
      type: 'string',
      required: true,
      readOnly: false,
      value: '{WEB_APP_URL}/app/one-drive/connections/add',
      placeholder: null,
      description:
        'When asked to input a redirect URL in OneDrive, enter the URL above.',
      clickToCopy: true,
    },
    {
      key: 'webUrl',
      label: 'OneDrive web URL',
      type: 'string',
      required: true,
      readOnly: false,
      value: null,
      placeholder: null,
      description: 'Your OneDrive web URL.',
      docUrl:
        'https://learn.microsoft.com/en-us/onedrive/developer/rest-api/?view=odsp-graph-online',
      clickToCopy: true,
    },
    {
      key: 'clientId',
      label: 'Client Id',
      type: 'string',
      required: true,
      readOnly: false,
      value: null,
      placeholder: null,
      description: 'Your OneDrive Application (client) Id',
      clickToCopy: false,
    },
    {
      key: 'clientSecret',
      label: 'Client Secret',
      type: 'string',
      required: true,
      readOnly: false,
      value: null,
      placeholder: null,
      description: 'Your OneDrive Application (client) secret',
      clickToCopy: false,
    },
  ],

  generateAuthUrl,
  verifyCredentials,
  isStillVerified,
  refreshToken,
};
