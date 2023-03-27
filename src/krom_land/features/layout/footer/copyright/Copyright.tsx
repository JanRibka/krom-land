import { useState } from "react";
import { useSelector } from "react-redux";
import OkDialog from "shared/dialogs/OkDialog";
import { selectCommon } from "shared/infrastructure/store/common/commonSlice";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CopyrightStyled from "./styledComponents/CopyrightStyled";

const Copyright = () => {
  // Store
  const common = useSelector(selectCommon);

  // State
  const [dialogData, setDialogData] = useState<{
    open: boolean;
    title: string;
    content: string;
  }>({ open: false, title: "", content: "" });

  // Constants
  const actYear: number = new Date().getFullYear();

  // Other
  const handleOnClickTermOfConditions = () => {
    setDialogData({
      open: true,
      title: common.Conditions.TermsOfConditionsLabel,
      content: common.Conditions.TermsOfConditionsText,
    });
  };

  const handleOnClickTermOfGdpr = () => {
    setDialogData({
      open: true,
      title: common.Conditions.GdprLabel,
      content: common.Conditions.GdprText,
    });
  };

  return (
    <CopyrightStyled>
      <Box className='left'>
        <Typography>
          &#169; {actYear === 2023 ? actYear : "2023 - " + actYear} KROM Land,
          Webdesign by&nbsp;
          <Box component='a' href='mailto:weby.ribka@gmail.com'>
            JAN RIBKA
          </Box>
        </Typography>
      </Box>

      <Box className='right'>
        <Box component='a' onClick={handleOnClickTermOfConditions}>
          OBCHODNí PODMÍNKY
        </Box>
        <Box component='a' onClick={handleOnClickTermOfGdpr}>
          GDPR
        </Box>
      </Box>
      <OkDialog
        isOpen={dialogData.open}
        onClickOkButton={() =>
          setDialogData({ open: false, title: "", content: "" })
        }
        title={dialogData.title}
        content={
          <Box
            component='span'
            dangerouslySetInnerHTML={{ __html: dialogData.content }}
          />
        }
      />
    </CopyrightStyled>
  );
};

export default Copyright;
