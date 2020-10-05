function Lock(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox='0 0 16 16'
      className='prefix__bi prefix__bi-lock-fill'
      fill='#828282'
      {...props}
    >
      <path d='M2.5 9a2 2 0 012-2h7a2 2 0 012 2v5a2 2 0 01-2 2h-7a2 2 0 01-2-2V9z' />
      <path
        fillRule='evenodd'
        d='M4.5 4a3.5 3.5 0 117 0v3h-1V4a2.5 2.5 0 00-5 0v3h-1V4z'
      />
    </svg>
  );
}

export default Lock;
