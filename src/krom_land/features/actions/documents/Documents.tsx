import { forwardRef, Ref } from "react";
import SectionTitle from "shared/components/sectionTitle/SectionTitle";

import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import file1 from "../docs/List účastníka víkendovky KromLand.pdf";
import DocumentsStyled from "./styledComponents/DocumentsStyled";

interface IProps {}

const Documents = forwardRef((props: IProps, ref: Ref<HTMLDivElement>) => {
  // Other
  const handleDocumentDownloadOnCLick = async (pDocument: "*.pdf") => {
    const anchor: HTMLAnchorElement = document.createElement("a");
    anchor.href = URL.createObjectURL(
      await createBlobFromImportedFile(pDocument)
    );
    anchor.download = "List účastníka víkendovky KromLand.pdf"; // TODO: P5i uploadu souboru v administraci se do db ulozi nazev soubori
    anchor.click();
  };

  const createBlobFromImportedFile = async (pDocument: "*.pdf") => {
    let result: Blob = new Blob();

    await fetch(pDocument)
      .then((response) => response.blob())
      .then((blob) => {
        result = blob;
      });

    return result;
  };

  // TODO: V prázdném Boxu vedle tlačítka by měla být velikost souboru
  return (
    <DocumentsStyled ref={ref}>
      <Box>
        <Stack>
          <SectionTitle mainText='Dokumenty ke stažení' />
          <Stack spacing={2}>
            <Box className='document-wrapper'>
              <Box className='document-inner-wrapper'>
                <Stack spacing={2} direction='row'>
                  <PictureAsPdfIcon />
                  <Box>List účastníka víkendovky KromLand.pdf</Box>
                </Stack>
                <Stack spacing={2} direction='row'>
                  {/* <Box></Box> */}
                  <Button
                    startIcon={<FileDownloadIcon />}
                    variant='contained'
                    onClick={() => handleDocumentDownloadOnCLick(file1)}
                  >
                    Stáhnout
                  </Button>
                </Stack>
              </Box>
            </Box>

            {/* <Box className='document-wrapper'>
              <Box className='document-inner-wrapper'>
                <Stack spacing={2} direction='row'>
                  <PictureAsPdfIcon />
                  <Box>asdf</Box>
                </Stack>
                <Stack spacing={2} direction='row'>
                  <Box>asdf</Box>
                  <Button startIcon={<FileDownloadIcon />} variant='contained'>
                    Stáhnout
                  </Button>
                </Stack>
              </Box>
            </Box> */}
          </Stack>
        </Stack>
      </Box>
    </DocumentsStyled>
  );
});

export default Documents;
