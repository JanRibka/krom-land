import { forwardRef, HTMLAttributes, Ref, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useSelector } from "react-redux";
import OkDialog from "shared/dialogs/OkDialog";
import { selectCommon } from "shared/infrastructure/store/common/commonSlice";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import SectionTitle from "../../../../shared/components/sectionTitle/SectionTitle";
import ActionRegistrationDialog from "../actionRegistrationDialog/ActionRegistrationDialog";
import DialogContentFormModel from "../actionRegistrationDialog/models/DialogContentFormModel";
import ActionsService from "../ActionsService";
import DetailInfo from "./detailInfo/DetaulInfo";
import ActionStyled from "./styledComponents/ActionStyled";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  idAction: number;
  name: string;
  description: string;
  backgroundColor: string;
  image: string;
  imageAlt: string;
  videoUrl?: string;
  kdy: string;
  kde: string;
  cena: string;
  zdaPoznamkaKCene: boolean;
  poznamkaKCene: string;
  capacityFull: boolean;
}
//TODO: Bude tu možnost zakázat registravi a zobrazí ze hláška že je plná kapacita
// TODO: Ano, existuje několik způsobů, jak přehrát video z TikTok v React JS. Jedním z alternativních způsobů je použití iframe, který je podporován v React JS.

// Nejprve získáte embed kód videa z TikTok. K tomu můžete přejít na stránku videa v prohlížeči a kliknout na tlačítko "Share" (dílítko) a poté na tlačítko "Embed". Zkopírujte kód do schránky.

// Poté můžete vytvořit komponentu TikTokVideo s použitím iframe tagu, která bude mít jako src atribut TikTok embed kód. Například:

// jsx
// Copy code
// import React from "react";

// function TikTokVideo() {
//   const embedCode = "<paste your TikTok embed code here>";
//   return (
//     <div>
//       <h1>My TikTok Video</h1>
//       <iframe
//         title="TikTok Video"
//         src={embedCode}
//         width="500"
//         height="500"
//         frameBorder="0"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// }

// export default TikTokVideo;
// Tento kód vytvoří komponentu TikTokVideo, která zobrazí video z TikTok v iframe tagu. V src atributu je potřeba vložit embed kód videa, který jste zkopírovali v prvním kroku.

// Poznámka: Pokud použijete tento způsob, musíte mít na paměti, že výsledný vzhled přehrávače videa bude záviset na embed kódu, který poskytuje TikTok. Pokud potřebujete přizpůsobit vzhled přehrávače, musíte použít jinou metodu, například vlastní komponentu pro přehrávání videa s využitím některé z knihoven jako react-player nebo react-media-player.

const Action = forwardRef((props: IProps, ref: Ref<HTMLDivElement>) => {
  // Store
  const common = useSelector(selectCommon);

  // State
  const [open, setOpen] = useState<boolean>(false);
  const [termOfConditionsDialogOpen, setTermOfConditionsDialogOpen] =
    useState<boolean>(false);

  // Constants
  const _actionsService = new ActionsService();
  const theme = useTheme();
  const {
    idAction,
    name,
    description,
    backgroundColor,
    image,
    imageAlt,
    videoUrl,
    kdy,
    kde,
    cena,
    zdaPoznamkaKCene,
    poznamkaKCene,
    capacityFull,
    ...restProps
  } = props;
  const xlDwn = useMediaQuery(theme.breakpoints.down("xl"));
  const lgDwn = useMediaQuery(theme.breakpoints.down("lg"));
  const pictDescWrapperDirection = lgDwn ? "column" : "row";
  const pictDescWrapperSpacing = lgDwn ? 5 : xlDwn ? 15 : 30;

  // Other
  const handleOnAfterFormSubmit = async (formData: DialogContentFormModel) => {
    await _actionsService.create(formData);
    setOpen(false);
  };

  const renderRegistrationButton = () => {
    return (
      <Stack className='button-wrapper' direction='column' spacing={2}>
        {(() => {
          switch (backgroundColor) {
            case theme.palette.secondary.main:
              return (
                <>
                  <DetailInfo
                    kdy={kdy}
                    kde={kde}
                    cena={cena}
                    zdaPoznamkaKCene={zdaPoznamkaKCene}
                    className='detail-info'
                    capacityFull={capacityFull}
                  />
                  {!capacityFull && (
                    <Button variant='contained' onClick={() => setOpen(true)}>
                      Chci se registrovat
                    </Button>
                  )}
                </>
              );
            case theme.palette.primary.main:
              return (
                <>
                  <DetailInfo
                    kdy={kdy}
                    kde={kde}
                    cena={cena}
                    zdaPoznamkaKCene={zdaPoznamkaKCene}
                    className='second'
                    capacityFull={capacityFull}
                  />
                  {!capacityFull && (
                    <Button
                      variant='contained'
                      className='detail-info second'
                      onClick={() => setOpen(true)}
                    >
                      Chci se registrovat
                    </Button>
                  )}
                </>
              );
            case theme.palette.common.purple.main:
              return (
                <>
                  <DetailInfo
                    kdy={kdy}
                    kde={kde}
                    cena={cena}
                    zdaPoznamkaKCene={zdaPoznamkaKCene}
                    className='third'
                    capacityFull={capacityFull}
                  />
                  {!capacityFull && (
                    <Button
                      variant='contained'
                      className='detail-info third'
                      onClick={() => setOpen(true)}
                    >
                      Chci se registrovat
                    </Button>
                  )}
                </>
              );
            default:
              return (
                !capacityFull && (
                  <Button variant='contained' onClick={() => setOpen(true)}>
                    Chci se registrovat
                  </Button>
                )
              );
          }
        })()}
      </Stack>
    );
  };

  return (
    <ActionStyled
      sx={{ backgroundColor: backgroundColor }}
      ref={ref}
      {...restProps}
    >
      <Stack spacing={5} direction='column' sx={{ width: "100%" }}>
        {/* Obrázek */}
        <Stack
          spacing={pictDescWrapperSpacing}
          direction={pictDescWrapperDirection}
        >
          <Box className='action-image-wrapper'>
            <Box
              component='img'
              src={image}
              alt={imageAlt}
              loading='lazy'
              className='action-image'
            />
          </Box>

          {/* Popis */}
          <Box className='description-wrapper'>
            <Box>
              <Box className='description-inner-wrapper'>
                <Box>
                  <SectionTitle mainText={name} />
                  {!!description ? (
                    <Box
                      component='span'
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  ) : (
                    <Stack spacing={1}>
                      <Skeleton
                        variant='rectangular'
                        className='skeleton-line'
                      />
                      <Skeleton
                        variant='rectangular'
                        className='skeleton-line'
                      />
                      <Skeleton
                        variant='rectangular'
                        className='skeleton-line'
                      />
                      <Skeleton
                        variant='rectangular'
                        className='skeleton-line'
                      />
                      <Skeleton
                        variant='rectangular'
                        className='skeleton-paragraph'
                      />
                    </Stack>
                  )}
                </Box>
              </Box>

              {/* Registrační tlačítko */}
              {renderRegistrationButton()}
            </Box>
          </Box>
        </Stack>

        {/* Přehrávač */}
        {!!videoUrl && (
          <Stack className='player-wrapper'>
            <SectionTitle mainText='Upoutávka na akci' />
            <ReactPlayer url={videoUrl} />
          </Stack>
        )}

        {!!props.poznamkaKCene && (
          <Box className='price-remark'>* {props.poznamkaKCene}</Box>
        )}
      </Stack>
      {/* Registrační dialog */}
      <ActionRegistrationDialog
        open={open}
        id={idAction}
        actionName={name}
        actionPrice={cena}
        actionDate={kdy}
        actionPlace={kde}
        setOpen={setOpen}
        handleOnClickTermsOfConditions={() =>
          setTermOfConditionsDialogOpen(true)
        }
        handleOnAfterFormSubmit={handleOnAfterFormSubmit}
      />
      {/* Term of donditions */}
      <OkDialog
        isOpen={termOfConditionsDialogOpen}
        onClickOkButton={() => setTermOfConditionsDialogOpen(false)}
        title={common.Conditions.TermsOfConditionsLabel}
        isClosable
        content={
          <Box
            component='span'
            dangerouslySetInnerHTML={{
              __html: common.Conditions.TermsOfConditionsText,
            }}
          />
        }
      />
    </ActionStyled>
  );
});

export default Action;
