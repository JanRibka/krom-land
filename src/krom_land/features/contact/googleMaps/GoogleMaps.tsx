import GoogleMapsStyled from './styledComponents/GoogleMapsStyled';

interface IProps {
  googleMapsUrl: string;
}

const GoogleMaps = (props: IProps) => {
  return (
    <GoogleMapsStyled component='section'>
      <iframe
        title='KROM Land - Mapa'
        src={props.googleMapsUrl}
        width='100%'
        height='100%'
        frameBorder=''
        style={{ border: "0" }}
        allowFullScreen={false}
        tabIndex={0}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </GoogleMapsStyled>
  );
};

export default GoogleMaps;
