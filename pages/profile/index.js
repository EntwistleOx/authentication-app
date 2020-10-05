import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import Modal from 'react-modal';
// Components
import Footer from '../../components/footer';
import Layout from '../../components/layout';
import NavBar from '../../components/navbar';
// Context
import { useUser } from '../../context/userContext';
// CSS
import styles from './Profile.module.css';

const Profile = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    user === null && router.push('/');
  }, [user]);

  return (
    <Layout pageTitle={`Authentication App | Profile`}>
      {!user && (
        <Modal
          isOpen={true}
          style={{
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              border: 'none',
            },
          }}
          ariaHideApp={false}
          contentLabel='Loading...'
        ></Modal>
      )}
      <NavBar />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.headerTitle}>Personal info</h1>
            <h2 className={styles.headerSubTitle}>
              Basic Info, like your name and photo
            </h2>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.left}>
                <h3 className={styles.title}>Profile</h3>
                <p className={styles.text}>
                  Some info may be visible to other people
                </p>
              </div>
              <div>
                <Link href='/edit'>
                  <button className={styles.editBtn}>Edit</button>
                </Link>
              </div>
            </div>
            <div className={styles.fields}>
              <div className={styles.field}>Photo</div>
              <div className={styles.avatarContainer}>
                {user ? (
                  <img
                    src={user && user.photoURL}
                    alt='avatar'
                    className={styles.avatar}
                  />
                ) : (
                  <Skeleton height={72} width={72} />
                )}
              </div>
            </div>
            <div className={styles.fields}>
              <div className={styles.field}>Name</div>
              <div className={styles.data}>
                {user ? user.displayName : <Skeleton width={'50%'} />}
              </div>
            </div>
            <div className={styles.fields}>
              <div className={styles.field}>Bio</div>
              <div className={styles.data}>
                {user ? user.bio : <Skeleton width={'50%'} />}
              </div>
            </div>
            <div className={styles.fields}>
              <div className={styles.field}>Phone</div>
              <div className={styles.data}>
                {user ? user.phoneNumber : <Skeleton width={'50%'} />}
              </div>
            </div>
            <div className={styles.fields}>
              <div className={styles.field}>Email</div>
              <div className={styles.data}>
                {user ? user.email : <Skeleton width={'50%'} />}
              </div>
            </div>
            {user && user.provider === 'password' && (
              <div className={styles.fields}>
                <div className={styles.field}>Password</div>
                <div className={styles.data}>********</div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Profile;
