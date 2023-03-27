const AnimatedBar = () => {
  return (
    <div className="absolute h-screen w-full flex justify-end items-center overflow-x-clip pointer-events-none">
      <div className="w-24 h-[600vh] rounded-full shadow-[0_0_86px_30px_rgba(30,64,175,0.67)] bg-blue-800 rotate-[60deg] animate-[twitch_5s_ease-in-out_infinite]"></div>
      <div className="w-24 h-[600vh] rounded-full shadow-[0_0_86px_30px_rgba(22,101,52,0.67)] bg-green-800 rotate-[60deg] animate-[twitch_5s_ease-in-out_0.3s_infinite]"></div>
      <div className="w-24 h-[600vh] rounded-full shadow-[0_0_86px_30px_rgba(133,77,14,0.67)] bg-yellow-800 rotate-[60deg] animate-[twitch_5s_ease-in-out_0.6s_infinite]"></div>
      <div className="w-24 h-[600vh] rounded-full shadow-[0_0_86px_30px_rgba(159,18,57,0.67)] bg-rose-800 rotate-[60deg] animate-[twitch_5s_ease-in-out_0.9s_infinite]"></div>
    </div>
  );
};
export default AnimatedBar;
