const Spinner = (props) => {
  return (
    <svg
      style={{
        margin: 'auto',
        background: 'transparent',
      }}
      width={21}
      height={21}
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
      display='block'
      {...props}
    >
      <circle
        cx={50}
        cy={50}
        fill='none'
        stroke='#fff'
        strokeWidth={10}
        r={35}
        strokeDasharray='164.93361431346415 56.97787143782138'
      >
        <animateTransform
          attributeName='transform'
          type='rotate'
          repeatCount='indefinite'
          dur='1s'
          values='0 50 50;360 50 50'
          keyTimes='0;1'
        />
      </circle>
    </svg>
  );
};

export default Spinner;
