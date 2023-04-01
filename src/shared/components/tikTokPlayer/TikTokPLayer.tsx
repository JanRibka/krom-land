import TikTokPlayerStyled from "./styledComponents/TikTokPlayerStyled";

// Nejprve získáte embed kód videa z TikTok. K tomu můžete přejít na stránku videa v prohlížeči a kliknout na tlačítko "Share" (dílítko) a poté na tlačítko "Embed". Zkopírujte kód do schránky.
interface IProps {
  src: string;
  title: string;
}

const TikTokPlayer = (props: IProps) => {
  return (
    <TikTokPlayerStyled>
      <iframe
        src={props.src}
        title={props.title}
        width='fit-content'
        height='fit-content'
        frameBorder={0}
      />
    </TikTokPlayerStyled>
  );
};

export default TikTokPlayer;
