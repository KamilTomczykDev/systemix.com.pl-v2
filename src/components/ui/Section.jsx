function Section({ children }) {
  return (
    <section className="flex w-full items-center justify-center py-[125px] xl:py-[200px]">
      {children}
    </section>
  );
}

export default Section;
