import './index.css'

export default function PasswordIndicator({ length, value }) {
    return (
        <div className="password_indicator-container">
            {Array.from({ length }).map((_, index) => {
                // Array.from({ length }) -> 
                // Length에 4가 전달됐으므로 [undefined, undefined, undefined, undefined] 생성
                if (index < value.length) {
                    return <div key={index} className="password-indicator-dot filled" />
                }

                return <div key={index} className="password-indicator-dot empty" />
            })}
        </div>
    )
}