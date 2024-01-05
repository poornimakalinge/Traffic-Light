interface IProps {
    color: string;
  }
  const Circle = (props: IProps) => {
    const { color } = props;
    return (
      <div
        className="traffic-light-container"
        style={{
          backgroundColor: color,
        }}
      />
    );
  };
  
  export default Circle;
  