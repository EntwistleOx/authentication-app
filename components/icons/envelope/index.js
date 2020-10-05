function Envelope(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox='0 0 16 16'
      className='prefix__bi prefix__bi-envelope-fill'
      fill='#828282'
      {...props}
    >
      <path
        fillRule='evenodd'
        d='M.05 3.555A2 2 0 012 2h12a2 2 0 011.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 002 14h12a2 2 0 001.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z'
      />
    </svg>
  );
}

export default Envelope;
