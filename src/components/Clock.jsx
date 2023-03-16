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

  return (
    <div className="w-1/3 z-0 flex items-center justify-center absolute right-0">
      <div className="w-[30rem] h-[30rem] rounded-full flex flex-col justify-center items-center">
        <div className="flex w-full justify-between relative h-10 items-end">
          <div className="flex relative justify-center items-end w-full">
            <div
              className="absolute border-4 border-gray-300 h-20 w-8 rounded-full origin-bottom transition-all duration-100 "
              style={{ transform: `rotate(${h}deg)` }}
            ></div>
            <div
              className="absolute bg-gray-200 h-24 w-4 rounded-full origin-bottom transition-all duration-100"
              style={{ transform: `rotate(${m}deg)` }}
            ></div>
            <div
              className="absolute bg-gray-100 h-32 w-3 rounded-full origin-bottom rotate-90"
              style={{
                transform: `rotate(${s}deg)`,
                transition: `${
                  s === 0
                    ? "none"
                    : "all 1s cubic-bezier(0, 0, 1, 1)"
                }`,
                transitionDelay: `${s === 0 ? "1s" : "0s"}`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Clock;
