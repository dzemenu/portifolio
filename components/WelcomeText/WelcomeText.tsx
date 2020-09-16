// Import Styles
import style from './WelcomeText.module.scss';

const WelcomeText = () => (
  <div className={style.welcomeText}>
    <span className={style.mainText}>Welcome</span>
    <div className={style.helloText}>
      <div>
        <div>
          Hello
          <span role="img" aria-label="Hello">👋</span>
        </div>
      </div>
      <div>
        <div>
          Namaste
          <span role="img" aria-label="Namaste">🙏</span>
        </div>
      </div>
      <div>
        <div>
          Hola
          <span role="img" aria-label="Hola">👋</span>
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeText;
