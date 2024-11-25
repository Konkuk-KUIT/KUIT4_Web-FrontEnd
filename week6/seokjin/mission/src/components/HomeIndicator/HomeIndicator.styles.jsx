import styled from "styled-components";

const StyledDiv = styled.div`

.home-indicator {
        position: absolute; /* 추가 */
        top: 810px;
        width: 390px;
        height: 34px;
        box-sizing: border-box;
        padding: 21px 128px 8px 128px;
    }

    .black-bar {
    width: 134px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 100px;
    background: #000;
    }
`

export default StyledDiv;