const Button = ({ children, onClick, styles }) => {
  return (
    <>
      <button onClick={onClick} className={styles}>
        {children}
      </button>
    </>
  );
};

export default Button;
