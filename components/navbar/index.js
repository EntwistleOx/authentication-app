import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
// Context
import { useUser } from '../../context/userContext';
// Firebase
import { signOut } from '../../firebase/client';
import Logo from '../icons/logo';
import Logout from '../icons/logout';
// Components
import User from '../icons/user';
// CSS
import styles from './Navbar.module.css';

const Navbar = () => {
  const { user } = useUser();

  const handleClick = async () => {
    await signOut();
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Logo />
        Authentication App
      </div>
      <div className={styles.dropdown}>
        {user ? (
          <img
            src={user && user.photoURL}
            alt='avatar'
            className={styles.avatar}
          />
        ) : (
          <Skeleton height={32} width={32} style={{ marginRight: '12px' }} />
        )}

        <div>{user ? user.displayName : <Skeleton width={100} />}</div>
        <div className={styles.dropdownContent}>
          <Link href='/profile' passHref>
            <a>
              <User /> My Profile
            </a>
          </Link>
          <hr />
          <Link href='/' passHref>
            <a onClick={handleClick}>
              {' '}
              <Logout /> Logout
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
