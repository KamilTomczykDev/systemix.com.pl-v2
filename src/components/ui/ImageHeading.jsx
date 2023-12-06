function ImageHeading({ src, children }) {
  return (
    <div className="flex w-full justify-center p-4">
      <div
        className={`${src} flex min-h-[250px] w-full max-w-main items-center justify-center rounded-xl bg-cover bg-center md:min-h-[350px]`}
      >
        <h2 className="text-center text-5xl font-bold text-white sm:text-[80px] md:text-[110px]">
          {children}
        </h2>
        <div></div>
      </div>
    </div>
  );
}

export default ImageHeading;
