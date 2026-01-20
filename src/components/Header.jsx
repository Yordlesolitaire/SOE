export default function Header({ className, logo }) {
  return (
    <header className={className}>
      <div>{logo}</div>
      <div className={className.center}></div>  {/* ❌ PAS CA */}
      <div>{logo}</div>
    </header>
  );
}
