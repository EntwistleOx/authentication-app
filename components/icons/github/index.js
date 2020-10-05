function Github(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox='0 0 43 43'
      fill='none'
      {...props}
    >
      <circle cx={21.661} cy={21.598} r={20.5} stroke='#828282' />
      <g clipPath='url(#prefix__clip0)'>
        <path
          d='M22.285 13.442c-4.943 0-9 4.057-9 9 0 4.218 2.96 8.05 6.891 9v-2.978a2.2 2.2 0 01-1.144-.029c-.532-.157-.964-.511-1.285-1.051-.205-.345-.567-.72-.945-.692l-.093-1.05c.818-.07 1.525.498 1.945 1.203.186.314.401.498.677.579.266.078.552.04.885-.077.083-.667.389-.917.62-1.268-2.344-.35-3.279-1.594-3.65-2.576-.49-1.303-.227-2.931.642-3.96.017-.02.047-.073.035-.11-.398-1.203.088-2.199.105-2.304.46.136.535-.137 1.997.752l.253.151c.106.064.073.028.179.02a7.636 7.636 0 011.888-.266c.64.008 1.28.1 1.915.272l.082.009c-.007-.002.022-.006.072-.035 1.827-1.107 1.761-.745 2.251-.904.018.105.497 1.117.103 2.305-.053.164 1.584 1.663.676 4.07-.37.982-1.305 2.226-3.649 2.575.3.459.662.702.66 1.647v3.717c3.93-.95 6.89-4.782 6.89-9 0-4.943-4.056-9-9-9z'
          fill='#828282'
        />
      </g>
      <defs>
        <clipPath id='prefix__clip0'>
          <path
            fill='#fff'
            transform='translate(13.286 13.442)'
            d='M0 0h18v18H0z'
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Github;
