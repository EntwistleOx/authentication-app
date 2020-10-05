function Facebook(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox='0 0 43 43'
      fill='none'
      {...props}
    >
      <circle cx={21.809} cy={21.598} r={20.5} stroke='#828282' />
      <g clipPath='url(#prefix__clip0)'>
        <path
          d='M28.796 13.442H16.07c-1.454 0-2.637 1.154-2.637 2.572V28.43c0 1.419 1.183 2.573 2.637 2.573h5.308v-6.208h-2.11v-3.087h2.11v-2.092c0-1.703 1.42-3.087 3.164-3.087h3.2v3.087h-3.2v2.092h3.2l-.528 3.087h-2.672v6.208h4.254c1.454 0 2.637-1.154 2.637-2.573V16.014c0-1.418-1.183-2.572-2.637-2.572z'
          fill='#828282'
        />
      </g>
      <defs>
        <clipPath id='prefix__clip0'>
          <path
            fill='#fff'
            transform='translate(13.433 13.442)'
            d='M0 0h18v17.561H0z'
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Facebook;
