import ReactGA from 'react-ga4';
import { UaEventOptions } from 'react-ga4/types/ga4';
import CookieConstentModel from 'shared/components/cookieConsent/CookieConsentModel';

import { CookieHelper } from './cookieHelper';

const cookieHelper: CookieHelper = new CookieHelper();

export class GoogleAnalyticsHelper {
  InitGA(id: string) {
    ReactGA.initialize(id);
  }

  SendEventToGA = (category: string, action: string, label: string = "") => {
    const consent: CookieConstentModel = GetCookieConsentCookieValue();

    if (consent.diag === true) {
      const args: UaEventOptions = {
        category: category,
        action: action,
        label: label,
      };

      ReactGA.event(args);
    }
  };

  SendPageViewToGA = () => {
    const consent: CookieConstentModel = GetCookieConsentCookieValue();

    if (consent.diag === true) {
      ReactGA.send(window.location.href);
    }
  };

  RemoveGA() {
    cookieHelper.Remove("_ga");
    cookieHelper.Remove("_gid");
    cookieHelper.Remove("_gat");
  }
}

export const GetCookieConsentCookieValue = () => {
  const cookieHelper: CookieHelper = new CookieHelper();
  const value: string = cookieHelper.Get("CookieConsent");
  let result: CookieConstentModel = { funct: false, diag: false };

  if (value !== "") {
    result = JSON.parse(value);
  }

  return result;
};
