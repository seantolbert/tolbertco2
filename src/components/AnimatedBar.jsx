const AnimatedBar = () => {
  return (
    <div className="absolute h-screen w-full flex justify-end items-center overflow-x-clip pointer-events-none">
      <div className="w-24 h-[600vh] rounded-full bg-blue-800 rotate-[60deg] animate-[twitch_5s_ease-in-out_infinite]"></div>
      <div className="w-24 h-[600vh] rounded-full bg-green-800 rotate-[60deg] animate-[twitch_5s_ease-in-out_0.3s_infinite]"></div>
      <div className="w-24 h-[600vh] rounded-full bg-yellow-800 rotate-[60deg] animate-[twitch_5s_ease-in-out_0.6s_infinite]"></div>
      <div className="w-24 h-[600vh] rounded-full bg-rose-800 rotate-[60deg] animate-[twitch_5s_ease-in-out_0.9s_infinite]"></div>
    </div>
  );
};
export default AnimatedBar;
