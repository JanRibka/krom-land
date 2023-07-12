import TagManager from 'react-gtm-module';

import { CookieHelper } from './cookieHelper';

const cookieHelper: CookieHelper = new CookieHelper();

export class GoogleTagManagerHelper {
  Init(id: string) {
    const tagManagerArgs = {
      gtmId: id,
    };
    TagManager.initialize(tagManagerArgs);
  }

  Remove() {
    let domain: string | undefined = undefined;

    if (process.env.REACT_APP_INSTANCE_NAME === "Prod") {
      domain = "." + window.location.host;
    }

    cookieHelper.Remove("_ga", domain);
    cookieHelper.Remove("_gid", domain);
    cookieHelper.Remove("_gat", domain);

    const cookies: string[] = cookieHelper.GetNames();

    cookies
      .filter((f) => f.startsWith("_ga"))
      ?.forEach((cookie) => {
        cookieHelper.Remove(cookie, domain);
      });
  }
}

export const pushToDataLayer = (event: string, data: any) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: event, data: data });
};
