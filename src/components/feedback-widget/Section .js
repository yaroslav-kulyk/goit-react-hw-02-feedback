import s from './Section.module.css';

function Section({ children, title }) {
  return (
    <div className={s.section}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default Section;
