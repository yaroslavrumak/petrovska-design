function VideoSection({ src }) {
  return (
    <>
      <video
        className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full translate-x-[-50%] translate-y-[-50%]"
        src={src}
        muted
        autoPlay
        playsInline
        loop
      ></video>
      <h1 className="font-shipporiReg text-[2.5rem] z-[1] text-white">
        Welcome to Pertrovska Design
      </h1>
    </>
  );
}

export default VideoSection;
