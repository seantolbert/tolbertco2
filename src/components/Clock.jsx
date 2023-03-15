import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const revolution = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(revolution);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const s = (seconds / 60) * 360;
  const m = ((minutes + seconds / 60) / 60) * 360;
  const h = ((hours + minutes / 60) / 12) * 360;

  const shadow = {
    background: "linear-gradient(145deg, #e7e7e7, #c2c2c2)",
    boxShadow: "6px 6px 11px #adadad, -6px -6px 11px #ffffff",
  };

  return (
    <div className="absolute h-full right-0 w-2/3 flex justify-center items-center z-0">
      <div className="w-[30rem] h-[30rem] rounded-full flex flex-col justify-between items-center">
        <div className="w-5 h-10 rounded-full" style={shadow}></div>
        <div className="flex w-full justify-between relative h-10 items-end">
          <div
            className="w-10 h-5 bg-transparent rounded-full"
            style={shadow}
          ></div>
          <div className="flex relative justify-center justify-items-center items-end">
            <div
              className="absolute bg-black h-40 w-4 rounded-full origin-bottom transition-all duration-100 "
              style={{
                transform: `rotate(${h}deg)`,
                background: "linear-gradient(145deg, #e7e7e7, #c2c2c2)",
                boxShadow: "6px 6px 11px #adadad, -6px -6px 11px #ffffff",
              }}
            ></div>
            <div
              className="absolute bg-red-400 h-48 w-4 rounded-full origin-bottom transition-all duration-100"
              style={{
                transform: `rotate(${m}deg)`,
                background: "linear-gradient(145deg, #e7e7e7, #c2c2c2)",
                boxShadow: "6px 6px 11px #adadad, -6px -6px 11px #ffffff",
              }}
            ></div>
            <div
              className="absolute bg-green-400 h-60 w-3 rounded-full origin-bottom transition-all duration-100"
              style={{
                transform: `rotate(${s}deg)`,
                background: "linear-gradient(145deg, #e7e7e7, #c2c2c2)",
                boxShadow: "6px 6px 11px #adadad, -6px -6px 11px #ffffff",
              }}
            ></div>
          </div>
          <div className="w-10 h-5 bg-black rounded-full" style={shadow}></div>
        </div>
        <div className="w-5 h-10 bg-black rounded-full" style={shadow}></div>
      </div>
    </div>
  );
};
export default Clock;
