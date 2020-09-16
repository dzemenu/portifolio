// Import Styles
import style from './IntroText.module.scss';

const IntroText = () => (
  <div className={style.introText}>
    <div className={style.mainText}>I&apos;m Akhil &nbsp;</div>
    <div className={style.droppingTexts}>
      <div>Developer</div>
      <div>Designer</div>
      <div>Gamer</div>
      <div>Learner</div>
    </div>
  </div>
);

export default IntroText;
