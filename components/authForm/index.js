import Link from 'next/link';
import Envelope from '../icons/envelope';
import Lock from '../icons/lock';
import Spinner from '../spinner';
import styles from './AuthForm.module.css';

const AuthForm = ({
  title,
  subTitle,
  legend,
  buttonText,
  smallOne,
  link,
  smallTwo,
  changeForm,
  onChange,
  onSubmit,
  email,
  password,
  children,
  loading,
}) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subTitle}>{subTitle}</h2>
      <span className={styles.legend}>{legend}</span>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.inputContainer}>
          <Envelope className={styles.icon} size='1.3rem' />
          <input
            type='email'
            name='email'
            className={styles.input}
            placeholder='Email'
            onChange={onChange}
            value={email}
            required
            autoComplete='email'
          />
        </div>
        <div className={styles.inputContainer}>
          <Lock className={styles.icon} size='1.3rem' />
          <input
            type='password'
            name='password'
            className={styles.input}
            placeholder='Password'
            onChange={onChange}
            value={password}
            required
            autoComplete='new-password'
          />
        </div>

        <button className={styles.button} disabled={loading ? true : false}>
          {loading && (
            <div>
              <Spinner />
            </div>
          )}
          {buttonText}
        </button>
      </form>
      <div className={styles.smallContainer}>
        <small className={styles.cardSmall}>{smallOne}</small>
      </div>
      {children}
      <div className={styles.smallContainer}>
        <small className={styles.cardSmall}>
          {smallTwo}{' '}
          <Link href='#!'>
            <a onClick={changeForm}>{link}</a>
          </Link>
        </small>
      </div>
    </>
  );
};

export default AuthForm;
