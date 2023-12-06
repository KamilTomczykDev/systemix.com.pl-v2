function BodyText({ children }) {
  return (
    <p className="max-w-[600px] lg:text-xl 4xl:max-w-[800px] 4xl:text-2xl 4xl:tracking-tight">
      {children}
    </p>
  );
}

export default BodyText;
