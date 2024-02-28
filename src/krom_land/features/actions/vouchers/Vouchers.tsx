import { forwardRef, HtmlHTMLAttributes, Ref } from "react";
import SectionTitle from "shared/components/sectionTitle/SectionTitle";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import VouchersStyled from "./styledComponents/VouchersStyled";
import VouchersForm from "./vouchersForm/VouchersForm";

interface IProps extends HtmlHTMLAttributes<HTMLDivElement> {
  backgroundColor: string;
}

const Vouchers = forwardRef((props: IProps, ref: Ref<HTMLDivElement>) => {
  const { ...restProps } = props;

  return (
    <VouchersStyled
      ref={ref}
      {...restProps}
      sx={{ backgroundColor: props.backgroundColor }}
    >
      <Box>
        <Stack>
          <SectionTitle mainText="Dárkové poukazy" />
          <VouchersForm />
        </Stack>
      </Box>
    </VouchersStyled>
  );
});

export default Vouchers;
