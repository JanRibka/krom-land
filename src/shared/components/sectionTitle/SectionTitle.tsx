import Typography from "@mui/material/Typography";

import SectionTitleStyled from "./styledComponents/SectionTitleStyled";

interface IProps {
  mainText: string;
  secondaryText?: string;
  secondaryTextColor?: string;

  textAlign?: "center" | "start";
}

const SectionTitle: React.FC<IProps> = (props) => {
  return (
    <SectionTitleStyled alignItems={props.textAlign}>
      {!!props.secondaryText && (
        <Typography
          className='secondary-text'
          variant='h6'
          sx={{
            color: !!props.secondaryTextColor
              ? props.secondaryTextColor + " !important"
              : undefined,
          }}
        >
          {props.secondaryText}
        </Typography>
      )}
      <Typography className='main-text' variant='h3'>
        {props.mainText}
      </Typography>
    </SectionTitleStyled>
  );
};

// Default props
SectionTitle.defaultProps = {
  textAlign: "center",
};

export default SectionTitle;
