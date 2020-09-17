// Import Modules
import PropTypes from 'prop-types';
import Router from 'next/router';

// Import Styles
import '../styles/globals.scss';

// Import Components
// import NavBar from '../components/NavBar/NavBar';

const MyApp = ({ Component, pageProps }) => (
  <>
    {/* <NavBar /> */}
    <Component {...pageProps} />
  </>
);

Router.events.on('routeChangeStart', () => {
  console.log('Start');
});

Router.events.on('routeChangeComplete', () => {
  console.log('Done');
});

Router.events.on('routeChangeError', () => {
  console.log('Error');
});

MyApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MyApp;
