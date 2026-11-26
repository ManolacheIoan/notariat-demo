/** Monograma „AV”: A și V legate printr-un traseu comun, într-un chenar fin. Identitate proprie, fără însemne oficiale. */
export function Monogram({ className = "", title }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      <rect x="1" y="1" width="46" height="46" rx="3" fill="#14233b" />
      <rect x="4.5" y="4.5" width="39" height="39" rx="1.5" fill="none" stroke="#b8975e" strokeOpacity=".55" strokeWidth=".8" />
      <g fill="none" stroke="#d9bf8c" strokeWidth="2.1" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M10.5 35 L19 13 L27.5 35" />
        <path d="M14 26.5 H24" />
        <path d="M19 13 L27.5 35 L37.5 13" />
      </g>
      <path d="M8.5 35 H13 M34.5 13 H40.5 M16 13 H22" stroke="#d9bf8c" strokeWidth="1.2" />
    </svg>
  );
}
