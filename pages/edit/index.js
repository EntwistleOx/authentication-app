import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
// Components
import Footer from '../../components/footer';
import Camera from '../../components/icons/camera';
import Left from '../../components/icons/left';
import Layout from '../../components/layout';
import NavBar from '../../components/navbar';
import Spinner from '../../components/spinner';
// Context
import { useUser } from '../../context/userContext';
// Firebase Client
import { listenForUpdatedUser, updateProfile } from '../../firebase/client';
// CSS
import styles from './Edit.module.css';

const Edit = () => {
  const { user, setUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    user === null && router.push('/');
  }, [user]);

  const fileInput = useRef(null);

  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    phoneNumber: '',
    photoURL: '',
    bio: '',
    password: '',
  });
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormData({
      displayName: user && user.displayName ? user.displayName : '',
      email: user && user.email ? user.email : '',
      phoneNumber: user && user.phoneNumber ? user.phoneNumber : '',
      photoURL: user && user.photoURL ? user.photoURL : '',
      bio: user && user.bio ? user.bio : '',
      password: '',
    });
    setPreview(user && user.photoURL ? user.photoURL : '/images/default.png');
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFile = (e) => {
    setFormData({
      ...formData,
      photoURL: fileInput.current.files[0],
    });
    setPreview(URL.createObjectURL(fileInput.current.files[0]));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const response = await updateProfile(formData);
    if (response.ok) {
      listenForUpdatedUser(setUser);
      toast.success('Successfully Updated!');
      setLoading(false);
    } else {
      toast.error(response.message);
      setLoading(false);
    }
    setFormData({ ...formData, password: '' });
  };

  return (
    <Layout pageTitle={`Authentication App | Edit`}>
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
          <Link href='/profile' passHref>
            <a className={styles.back}>
              <Left className={styles.left} /> Back
            </a>
          </Link>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.title}>Change Info</h3>
                <p className={styles.text}>
                  Changes will be reflected to every services
                </p>
              </div>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.avatarContainer}>
                <div className={styles.uploadWrapper}>
                  <img src={preview} alt='avatar' className={styles.avatar} />
                  <Camera className={styles.camera} />
                  <input
                    type='file'
                    name='photoURL'
                    onChange={handleFile}
                    ref={fileInput}
                  />
                </div>
                <span>Change Photo</span>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor='displayName' className={styles.label}>
                  Name
                </label>
                <input
                  type='text'
                  name='displayName'
                  id='displayName'
                  className={styles.input}
                  placeholder='Enter your name...'
                  value={formData.displayName}
                  onChange={handleChange}
                  required
                  autoFocus
                />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor='bio' className={styles.label}>
                  Bio
                </label>
                <textarea
                  name='bio'
                  id='bio'
                  className={styles.input}
                  rows='4'
                  placeholder='Enter your bio...'
                  value={formData.bio}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor='phoneNumber' className={styles.label}>
                  Phone
                </label>
                <input
                  type='text'
                  name='phoneNumber'
                  id='phoneNumber'
                  className={styles.input}
                  placeholder='Enter your phone...'
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputContainer}>
                <label htmlFor='email' className={styles.label}>
                  Email
                </label>
                <input
                  type='text'
                  name='email'
                  id='email'
                  className={styles.input}
                  placeholder='Enter your email...'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              {user && user.provider === 'password' && (
                <>
                  <div className={styles.inputContainer}>
                    <label htmlFor='password' className={styles.label}>
                      Password
                    </label>
                    <input
                      type='password'
                      name='password'
                      className={styles.input}
                      placeholder='Enter your new password...'
                      value={formData.password || ''}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}
              <button
                className={styles.saveBtn}
                disabled={loading ? true : false}
              >
                {loading && (
                  <div>
                    <Spinner />
                  </div>
                )}
                Save
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Edit;
