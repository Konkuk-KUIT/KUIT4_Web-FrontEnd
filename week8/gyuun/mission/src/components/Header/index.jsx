import './index.css';

export default function Header({title,subtitle}){
    return (
        <Header 
        className = "header"
        >
            <h1 
            className='header-title'
            >{title}</h1>
            {subtitle != null && <p 
            className='header-subtitle'
            >{subtitle}</p>}
        </Header>
    );
}