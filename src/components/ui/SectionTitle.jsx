function SectionTitle({ children }) {
  return (
    <h2 className="flex items-center gap-2 text-2xl font-bold text-brand-green xs:text-4xl xl:text-3xl 4xl:text-4xl">
      {children}
    </h2>
  );
}

export default SectionTitle;
