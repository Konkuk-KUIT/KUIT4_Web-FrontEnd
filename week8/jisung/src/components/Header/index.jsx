import './index.css'

/**
 * 
 * @param {React.ReactNode} title
 *  @param {React.ReactNode} subtitle
 * 
 */

export default function Header({ title, subtitle }) {
    return (
        <header className="header">
            <h1 className="header-title">{title}</h1>
            {subtitle != null && <p className="header-subtitle">{subtitle}</p>}
        </header>
    )
}