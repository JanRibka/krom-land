import { forwardRef, Ref } from "react";
import { useSelector } from "react-redux";
import SectionTitle from "shared/components/sectionTitle/SectionTitle";
import { selectDocumentsToDownload } from "shared/infrastructure/store/actions/actionsSlice";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Document from "./document/Document";
import DocumentsStyled from "./styledComponents/DocumentsStyled";

interface IProps {}

const Documents = forwardRef((props: IProps, ref: Ref<HTMLDivElement>) => {
  // Constants
  const documentsToDownload = useSelector(selectDocumentsToDownload);

  return (
    <DocumentsStyled ref={ref}>
      <Box>
        <Stack>
          <SectionTitle mainText='Dokumenty ke stažení' />
          <Stack spacing={2}>
            {documentsToDownload.map((documentToDownload) => {
              return (
                <Document
                  filePath={documentToDownload.Document.Path}
                  fileName={documentToDownload.Document.Name}
                />
              );
            })}
          </Stack>
        </Stack>
      </Box>
    </DocumentsStyled>
  );
});

export default Documents;
