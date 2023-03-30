import DetailInfoStyled from "./styledComponents/DetailInfoStyled";

interface IProps {
  kdy: string;
  kde: string;
  cena: string;
  zdaPoznamkaKCene: boolean;
  className?: string;
  capacityFull: boolean;
}

const DetailInfo = (props: IProps) => {
  return (
    <DetailInfoStyled className={props.className}>
      <p>
        Kde: {props.kde}&nbsp;&nbsp;&nbsp;&nbsp;Kdy: {props.kdy}
      </p>
      {props.capacityFull ? (
        <p>!!Kapacita je naplněná!!</p>
      ) : (
        <p>
          Cena: {props.cena} Kč{props.zdaPoznamkaKCene ? " *" : ""}
        </p>
      )}
    </DetailInfoStyled>
  );
};

export default DetailInfo;
