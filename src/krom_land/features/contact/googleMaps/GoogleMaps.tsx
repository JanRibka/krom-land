import GoogleMapsStyled from './styledComponents/GoogleMapsStyled';

const GoogleMaps = () => {
  return (
    <GoogleMapsStyled>
      <iframe
        title='KROM Land - Mapa'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5130.430090247172!2d18.051399585948435!3d49.98857760102343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47116169172bea15%3A0xabd870eda53f0445!2zT2JlY27DrSDDmsWZYWQgS29iZcWZaWNl!5e0!3m2!1scs!2sus!4v1676160824162!5m2!1scs!2sus'
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
