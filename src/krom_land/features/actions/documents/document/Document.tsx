import { pushToDataLayer } from "shared/helpers/googleTagManagerHelper";

import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface IProps {
  filePath: string;
  fileName: string;
}

const Document = (props: IProps) => {
  // Other
  const handleDocumentDownloadOnCLick = async (pDocument: string) => {
    const anchor: HTMLAnchorElement = document.createElement("a");
    anchor.href = URL.createObjectURL(
      await createBlobFromImportedFile(pDocument)
    );
    anchor.download = props.fileName;
    anchor.click();

    pushToDataLayer("gtm.click", {
      buttonName: "document_download",
      buttonDesc: props.fileName,
    });
  };

  const createBlobFromImportedFile = async (pDocument: string) => {
    let result: Blob = new Blob();

    await fetch(pDocument)
      .then((response) => response.blob())
      .then((blob) => {
        result = blob;
      });

    return result;
  };

  return (
    <Box className='document-wrapper'>
      <Box className='document-inner-wrapper'>
        <Stack spacing={2} direction='row'>
          <PictureAsPdfIcon />
          <Box>{props.fileName}</Box>
        </Stack>
        <Stack spacing={2} direction='row'>
          {/* <Box></Box> */}
          <Button
            startIcon={<FileDownloadIcon />}
            variant='contained'
            onClick={() => handleDocumentDownloadOnCLick(props.filePath)}
          >
            Stáhnout
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Document;
