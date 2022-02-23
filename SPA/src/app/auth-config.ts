/**
 * This file contains authentication parameters. Contents of this file
 * is roughly the same across other MSAL.js libraries. These parameters
 * are used to initialize Angular and MSAL Angular configurations in
 * in app.module.ts file.
 */

import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */
export const msalConfig: Configuration = {
  auth: {
    clientId: 'c6e6e365-9273-4fae-b854-6dc98928cc84', // This is the ONLY mandatory field that you need to supply.
    authority: 'https://login.microsoftonline.com/b4e2f98e-5c1e-43d3-871e-8a8e978b97fc', // Defaults to "https://login.microsoftonline.com/common"
    redirectUri: 'http://localhost:4200/', // Points to window.location.origin. You must register this URI on Azure portal/App Registration.
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage, // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
    storeAuthStateInCookie: isIE, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback(logLevel: LogLevel, message: string) {
        console.log(message);
      },
      logLevel: LogLevel.Verbose,
      piiLoggingEnabled: false
    }
  }
}

/**
 * Add here the endpoints and scopes when obtaining an access token for protected web APIs. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const protectedResources = {
  todoListApi: {
    endpoint: "https://localhost:44351/api/todolist",
    scopes: ["api://928d5766-2d85-4a85-bec9-a3e1618f5199/access_as_user"],
  },
  graphApi: {
    endpoint: "https://graph.microsoft.com/v1.0/me/memberOf",
    scopes: ["User.Read", "GroupMember.Read.All"]
  }
}

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
  scopes: []
};

export const groups = {
  groupAdmin: "e867c269-b76d-417b-873e-459fb9424adf",
  groupMember: "1136e80e-db78-423c-8ec2-c8a1ff085569"
}