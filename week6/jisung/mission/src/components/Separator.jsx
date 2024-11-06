import React from 'react'
import styled from "styled-components";

const lineheight = {
    thin: {
      height: "1px"
    },
    medium: {
        height: "16px"
    },
    thick: {
        height: "30px"
    },
  };

const StyledSeparator = styled.div`
    background-color: #F2F4F6;
    width: 100%;
    height: ${(props) => lineheight[props.lineheight]?.height};
`

const Separator = ({ heightType = "thin" }) => {
  return (
    <StyledSeparator lineheight={heightType}/>
  )
}

export default Separator
