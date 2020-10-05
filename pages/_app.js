import 'react-toastify/dist/ReactToastify.css';
import UserProvider from '../context/userContext';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
};

export default MyApp;
