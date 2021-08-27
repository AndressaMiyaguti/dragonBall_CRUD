export default function Power(props) {
  const completed = props.value;
  const fillValue = `${completed}%`;

  const bar = {
    width: '100%',
    marginLeft: '0.5rem',
    height: '1.8rem',
    backgroundColor: '#e7e5e8',
    borderRadius: '0.4rem',
    border: '1px solid #e7e5e8',
    boxShadow:
      'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
  };

  const fill = {
    width: fillValue,
    backgroundColor: '#e76a24',
    height: '1.7rem',
    borderRadius: '0.4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'width 1s ease-in-out',
  };

  const text = {
    color: '#ffffff',
    textAlign: 'center',
  };

  return (
    <div style={bar}>
      <div style={fill}>
        <span style={text}>{completed}</span>
      </div>
    </div>
  );
}
