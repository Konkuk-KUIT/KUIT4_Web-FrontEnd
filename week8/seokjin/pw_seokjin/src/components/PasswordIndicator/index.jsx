import './index.css';

/**
 * 
 * @param {number} length - The length of the password. (required)
 * @param {string} value - The value of the password. (required)
 */

export default function PassWordIndicator({ length, value }) {
    return(
        <div className='password-indicator-container'>
            {Array.from({ length }).map((_, index) => {
                if(index < value.length) {
                    return <div key={index} className='password-indicator-dot filled'/>;
                }
                return <div key={index} className='password-indicator-dot empty'/>
            }

            )}
        </div>
    )
}