import Button from '../button';
import Facebook from '../icons/facebook';
import Github from '../icons/github';
import Google from '../icons/google';
import Twitter from '../icons/twitter';
import styles from './SocialLogin.module.css';

const SocialLogin = ({ google, facebook, twitter, github }) => {
  return (
    <>
      <div className={styles.socials}>
        <Button onClick={google} styles={styles.socialBtn}>
          <Google size='2.7rem' />
        </Button>
        <Button onClick={facebook} styles={styles.socialBtn}>
          <Facebook size='2.7rem' />
        </Button>
        <Button onClick={twitter} styles={styles.socialBtn}>
          <Twitter size='2.7rem' />
        </Button>
        <Button onClick={github} styles={styles.socialBtn}>
          <Github size='2.7rem' />
        </Button>
      </div>
    </>
  );
};

export default SocialLogin;
