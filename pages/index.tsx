// Import Modules
import Head from 'next/head';
import WelcomeText from '../components/WelcomeText/WelcomeText';
import WelcomeProfile from '../components/WelcomeProfile/WelcomeProfile';
import IntroText from '../components/IntroText/IntroText';

// Import Styles
import style from '../styles/index.module.scss';

const Homepage = () => (
  <div className={style.homepage}>
    <Head>
      <title>Akhil Nair - Welcome</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className={style.welcomeWrapper}>
        <WelcomeText />
      </div>
      <div className={style.welcomeProfile}>
        <WelcomeProfile />
      </div>
      <div className={style.introWrapper}>
        <IntroText />
      </div>
    </main>
  </div>
);

export default Homepage;
