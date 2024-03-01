function Section({ type, id = "", children }) {
  const heroClasses =
    "flex items-center justify-center text-center bg-cover bg-center mb-10 relative overflow-hidden h-[38.5rem]";

  const classes = type === "hero" ? heroClasses : "";

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}

export default Section;
