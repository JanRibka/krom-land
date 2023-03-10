import DetailInfoStyled from "./styledComponents/DetailInfoStyled";

interface IProps {
  kdy: string;
  kde: string;
  cena: string;
  className?: string;
}

const DetailInfo = (props: IProps) => {
  return (
    <DetailInfoStyled className={props.className}>
      <p>
        Kde: {props.kde}&nbsp;&nbsp;&nbsp;&nbsp;Kdy: {props.kdy}
      </p>
      <p>Cena: {props.cena} Kč</p>
    </DetailInfoStyled>
  );
};

export default DetailInfo;
