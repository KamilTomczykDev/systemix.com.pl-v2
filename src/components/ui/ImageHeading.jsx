function ImageHeading({ src, children }) {
  return (
    <div className="flex w-full justify-center p-4">
      <div
        className={`${src} max-w-main flex min-h-[250px] w-full items-center justify-center rounded-xl bg-cover bg-center md:min-h-[350px]`}
      >
        <h2 className="max-w-[1200px] text-center text-5xl font-semibold tracking-wide text-white sm:text-[80px] md:text-[110px]">
          {children}
        </h2>
        <div></div>
      </div>
    </div>
  );
}

export default ImageHeading;
