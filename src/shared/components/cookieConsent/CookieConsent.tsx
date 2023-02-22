import { MouseEvent, useEffect, useRef, useState } from 'react';
import { CookieHelper } from 'shared/helpers/cookieHelper';
import { GoogleAnalyticsHelper } from 'shared/helpers/googleAnalyticsHelper';

import CookieConsentDialog from './cookieConsentDialog/CookieConsentDialog';
import CookieConstentModel from './CookieConsentModel';
import CookieConsentSettingsDialog from './cookieConsentSettingsDialog/CookieConsentSettingsDialog';

const CookienConsent = () => {
  // References
  const effectRan = useRef<boolean>(false);

  // Consts
  const cookieExpiresIn: number = 180;
  const cookieHelper: CookieHelper = new CookieHelper();
  const googleAnalyticsHelper: GoogleAnalyticsHelper =
    new GoogleAnalyticsHelper();

  // Sate
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenSettings, setIsOpenSettings] = useState<boolean>(false);
  const [functCookieValue, setFunctCookieValue] = useState<boolean>(true);
  const [diagCookieValue, setDiagCookieValue] = useState<boolean>(true);

  // Other
  useEffect(() => {
    if (
      process.env.REACT_APP_INSTANCE_NAME === "Prod" ||
      effectRan.current === true
    ) {
      GetCookieConsentValue();
    }

    return () => {
      effectRan.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const GetCookieConsentValue = () => {
    const value: string = cookieHelper.Get("CookieConsent");

    if (value === "") {
      googleAnalyticsHelper.RemoveGA();
      setIsOpen(true);
    }
  };

  const HandleAccepAllOnClickAction = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      googleAnalyticsHelper.InitGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    }

    const consent: CookieConstentModel = {
      funct: functCookieValue,
      diag: diagCookieValue,
    };

    cookieHelper.Set("CookieConsent", JSON.stringify(consent), cookieExpiresIn);
    setIsOpen(false);
  };

  const HandleOpenSettingsOnClickAction = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    if (!diagCookieValue) {
      setDiagCookieValue(true);
    }

    setIsOpenSettings(true);
  };

  const HandleAgreeAllOnClickAction = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      googleAnalyticsHelper.InitGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    }

    const consent: CookieConstentModel = {
      funct: true,
      diag: true,
    };

    cookieHelper.Set("CookieConsent", JSON.stringify(consent), cookieExpiresIn);
    setIsOpenSettings(false);
    setIsOpen(false);
  };

  const HandleSaveSettingsOnClickAction = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    if (diagCookieValue && process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      googleAnalyticsHelper.InitGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    }

    const consent: CookieConstentModel = {
      funct: functCookieValue,
      diag: diagCookieValue,
    };

    cookieHelper.Set("CookieConsent", JSON.stringify(consent), cookieExpiresIn);
    setIsOpenSettings(false);
    setIsOpen(false);
  };

  return (
    <>
      <CookieConsentDialog
        isOpen={isOpen}
        accepAllOnClickAction={HandleAccepAllOnClickAction}
        openSettingsOnClickAction={HandleOpenSettingsOnClickAction}
      />

      <CookieConsentSettingsDialog
        isOpen={isOpenSettings}
        setIsOpen={setIsOpenSettings}
        necCookieValue={functCookieValue}
        setNecCookieValue={setFunctCookieValue}
        diagCookieValue={diagCookieValue}
        setDiagCookieValue={setDiagCookieValue}
        agreeAllOnClickAction={HandleAgreeAllOnClickAction}
        saveSettingsOnClickAction={HandleSaveSettingsOnClickAction}
      />
    </>
  );
};

export default CookienConsent;
