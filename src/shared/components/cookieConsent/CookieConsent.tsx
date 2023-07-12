import { MouseEvent, useEffect, useRef, useState } from 'react';
import { CookieHelper } from 'shared/helpers/cookieHelper';
import { GoogleTagManagerHelper } from 'shared/helpers/googleTagManagerHelper';

import CookieConsentDialog from './cookieConsentDialog/CookieConsentDialog';
import CookieConstentModel from './CookieConsentModel';
import CookieConsentSettingsDialog from './cookieConsentSettingsDialog/CookieConsentSettingsDialog';

const CookienConsent = () => {
  // References
  const effectRan = useRef<boolean>(false);

  // Consts
  const cookieExpiresInMonths: number = 6;
  const cookieHelper: CookieHelper = new CookieHelper();
  const googletagManagerHelper: GoogleTagManagerHelper =
    new GoogleTagManagerHelper();

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
      googletagManagerHelper.Remove();
      setIsOpen(true);
    }
  };

  const HandleAccepAllOnClickAction = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    if (process.env.REACT_APP_GOOGLE_TAG_MANAGER_ID) {
      googletagManagerHelper.Init(process.env.REACT_APP_GOOGLE_TAG_MANAGER_ID);
    }

    const consent: CookieConstentModel = {
      funct: functCookieValue,
      diag: diagCookieValue,
    };

    cookieHelper.Set(
      "CookieConsent",
      JSON.stringify(consent),
      cookieExpiresInMonths
    );
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
    if (process.env.REACT_APP_GOOGLE_TAG_MANAGER_ID) {
      googletagManagerHelper.Init(process.env.REACT_APP_GOOGLE_TAG_MANAGER_ID);
    }

    const consent: CookieConstentModel = {
      funct: true,
      diag: true,
    };

    cookieHelper.Set(
      "CookieConsent",
      JSON.stringify(consent),
      cookieExpiresInMonths
    );
    setIsOpenSettings(false);
    setIsOpen(false);
  };

  const HandleSaveSettingsOnClickAction = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    if (diagCookieValue && process.env.REACT_APP_GOOGLE_TAG_MANAGER_ID) {
      googletagManagerHelper.Init(process.env.REACT_APP_GOOGLE_TAG_MANAGER_ID);
    }

    const consent: CookieConstentModel = {
      funct: functCookieValue,
      diag: diagCookieValue,
    };

    cookieHelper.Set(
      "CookieConsent",
      JSON.stringify(consent),
      cookieExpiresInMonths
    );
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
