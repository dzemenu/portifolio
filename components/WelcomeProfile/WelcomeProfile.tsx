// Import Modules
import { useState } from 'react';

// Import Styles
import style from './WelcomeProfile.module.scss';

const SocialLinks = [
  {
    name: 'Github',
    href: 'https://github.com/dzemenu',
    favicon: 'fab fa-github',
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/dilu-kefale-zemenu-b888711a/',
    favicon: 'fab fa-linkedin',
  },
  {
    name: 'Email',
    href: 'mailto: dilu.kefale@gmail.com',
    favicon: 'fas fa-envelope',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/dilukz',
    favicon: 'fab fa-twitter',
  },
  
  
];

const WelcomeProfile = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <div className={`${style.profileButton} ${profileOpen ? `${style.profileButtonOpen}` : ''}`} title="Dilu kefale">
      <img role="presentation" src="/images/dilu_profile.jpg" 
      className={style.profileButtonImage} alt="Profile" onClick={() => setProfileOpen(!profileOpen)} />
      {SocialLinks.map((link) => (
        <a
          className={`${style.socialButton} ${profileOpen ? `${style.socialButtonOpen}` : ''}`}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          title={link.name}
          key={link.name}
        >
          <i className={link.favicon} title={link.name} />
        </a>
      ))}
    </div>
  );
};

export default WelcomeProfile;
