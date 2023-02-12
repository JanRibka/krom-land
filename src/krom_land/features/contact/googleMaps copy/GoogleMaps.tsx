const GoogleMaps = () => {
  // TODO: title přidat do překladů
  return (
    <iframe
      title='Kadeřnictví Hairsalon PH - Mapa'
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1814.1030362845204!2d18.04880593054422!3d49.98268866785533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471161a0b0ab0411%3A0x6ca8d0574862b657!2sHairsalon%20PH!5e0!3m2!1scs!2scz!4v1670179135015!5m2!1scs!2scz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
      width='100%'
      height='100%'
      frameBorder=''
      style={{ border: "0" }}
      allowFullScreen={false}
      tabIndex={0}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    ></iframe>
  );
};

export default GoogleMaps;
