function Section({ children, name }) {
  return (
    <section
      name={name}
      className="flex w-full items-center justify-center py-[90px] sm:py-[125px]"
    >
      {children}
    </section>
  );
}

export default Section;
