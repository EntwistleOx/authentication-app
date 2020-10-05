function Lock(props) {
  return (
    <svg height={21} viewBox='0 0 21 21' width={21} {...props}>
      <g fill='none' fillRule='evenodd' transform='translate(4 1)'>
        <path
          d='M2.5 8.5l-.006-1.995C2.487 2.502 3.822.5 6.5.5s4.011 2.002 4 6.005V8.5m-8 0h8.023a2 2 0 012 2.006l-.017 6a2 2 0 01-2 1.994H2.5a2 2 0 01-2-2v-6a2 2 0 012-2z'
          stroke='#2a2e3b'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <circle cx={6.5} cy={13.5} fill='#2a2e3b' r={1.5} />
      </g>
    </svg>
  );
}

export default Lock;
