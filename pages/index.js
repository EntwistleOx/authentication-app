import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
//Components
import AuthForm from '../components/authForm';
import Footer from '../components/footer';
import Layout from '../components/layout';
import SocialLogin from '../components/socialLogin';
// Context
import { useUser } from '../context/userContext';
//Firebase
import {
  loginWithFacebook,
  loginWithGithub,
  loginWithGoogle,
  loginWithTwitter,
  signInUser,
  signUpUser,
} from '../firebase/client';
// CSS
import styles from './Index.module.css';

const log = {
  title: 'Authentication App',
  subTitle: 'Login',
  legend: null,
  buttonText: 'Login',
  smallOne: 'or continue with these social profile',
  link: 'Register',
  smallTwo: 'Dont have an account yet?',
};

const reg = {
  title: 'Authentication App',
  subTitle: 'Join thousands of learners from around the world',
  legend:
    'Master web development by making real-life proyects. There are multiple paths for you to choose',
  buttonText: 'Start coding now',
  smallOne: 'or continue with these social profile',
  link: 'Login',
  smallTwo: 'Already a member?',
};

const Index = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    user && router.replace('/profile');
  }, [user]);

  const [init, setInit] = useState(true);
  const [form, setForm] = useState(log);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const changeForm = () => {
    setFormData({ email: '', password: '' });
    setInit(!init);
    if (init) {
      setForm(reg);
    } else {
      setForm(log);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (init) {
      const response = await signInUser(formData);
      if (response.ok) {
        setLoading(false);
      } else {
        setLoading(false);
        toast.error(response.message);
      }
    } else {
      const response = await signUpUser(formData);
      if (response.ok) {
        toast.success('Successfully Registered & Logged In!');
        setLoading(false);
      } else {
        setLoading(false);
        toast.error(response.message);
      }
    }
  };

  const handleResponse = (response) => {
    if (response.ok) {
    } else {
      toast.error(response);
    }
  };

  const handleGoogleLogin = async () => {
    const response = await loginWithGoogle();
    handleResponse(response);
  };

  const handleFacebookLogin = async () => {
    const response = await loginWithFacebook();
    handleResponse(response);
  };

  const handleTwitterLogin = async () => {
    const response = await loginWithTwitter();
    handleResponse(response);
  };

  const handleGithubLogin = async () => {
    const response = await loginWithGithub();
    handleResponse(response);
  };

  return (
    <Layout pageTitle={`Authentication App`}>
      {user ? (
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
      ) : (
        <div className={styles.container}>
          <div className={styles.card}>
            <AuthForm
              title={form.title}
              subTitle={form.subTitle}
              legend={form.legend}
              buttonText={form.buttonText}
              smallOne={form.smallOne}
              link={form.link}
              smallTwo={form.smallTwo}
              changeForm={changeForm}
              onChange={handleChange}
              onSubmit={handleSubmit}
              email={formData.email}
              password={formData.password}
              loading={loading}
            >
              <SocialLogin
                google={handleGoogleLogin}
                facebook={handleFacebookLogin}
                twitter={handleTwitterLogin}
                github={handleGithubLogin}
              />
            </AuthForm>
          </div>
          <Footer />
        </div>
      )}
    </Layout>
  );
};

export default Index;
