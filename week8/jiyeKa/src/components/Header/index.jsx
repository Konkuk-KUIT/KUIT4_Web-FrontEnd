import './index.css';

/**
 *
 * @param {Object} props - The props for the Header component.
 * @param {React.ReactNode} title - The title of the header (required).
 * @param {React.ReactNode} subtitle - The subtitle of the header (optional).
 */
export default function Header({ title, subtitle }) {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      {subtitle != null && <p className="header-subtitle">{subtitle}</p>}
    </header>
  );
}