// Import Modules
import PropTypes from 'prop-types';

// Import Styles
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

MyApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MyApp;
