import React from "react";
// import Lottie from "react-lottie";

const Props = {
  animationPath: string
};

const GreetingLottie = ( Props ) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div onClick={() => null}>
      {/* @ts-ignore */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
