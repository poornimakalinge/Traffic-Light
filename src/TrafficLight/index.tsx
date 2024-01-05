import { useEffect, useState } from "react";
import Circle from "../Circle";
import "../App.css";

const TrafficLight = () => {
  const colorOptions = [
    { color: "red", time: 4000 },
    { color: "yellow", time: 500 },
    { color: "green", time: 3000 },
  ];
  const [index, setIndex] = useState(0);

  /*
1) As we have no dependency array in the UseEffect, the useEffect will be triggered on every re-render.
2) Whenever setTimeOut is trigered we are setting the state, setting of state re-renders the component and as a result the useEffect is rendered again.
3) On every execution of useEffect the previous timer is cleared.
  */
  useEffect(() => {
    const timerId = setTimeout(() => {
      setIndex((old) => (old + 1) % 3);
    }, colorOptions[index].time);

    return () => clearTimeout(timerId);
  });

  return (
    <div
      style={{
        border: "2px solid black",
        width: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      {colorOptions.map((val, ind) => (
        <Circle
          color={index === ind ? colorOptions[index].color : "grey"}
          key={ind}
        />
      ))}
    </div>
  );
};

export default TrafficLight;
