import './index.css'

/**
 * 
 * @param {React.ReactNode} title - the title of the header. {required} 
 * @param {React.ReactNode} subtitle = the subtitle of the header. {optional}
 */

export default function Header({ title, subtitle }) {
    return(
        <header className='header'>
            <h1 className='header-title'>{title}</h1>
            {subtitle != null && <p className='header-subtitle'>{subtitle}</p>}
        </header>
    )
}