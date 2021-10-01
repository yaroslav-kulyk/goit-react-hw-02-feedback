function Section({ children, title }) {
  return (
    <div className="Section">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default Section;
