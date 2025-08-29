
import React from 'react';
import styled from 'styled-components';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &{
    text?: React.ReactNode,
}
const BlackButton = ({text, ...props}: ButtonProps) => {
    return (
        <StyledWrapper>
            <button {...props}>{text}</button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    button {
        font-family: inherit;
        width: 11.5em;
        background: transparent;
        height: 2.7em;
        line-height: 2.5em;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        border: solid 1px #000000ff;
        transition: color 0.5s;
        z-index: 1;
        font-size: 17px;
        border-radius: 30px;
        font-weight: 500;
        color: inherit;
    }

    button:before {
        content: "";
        position: absolute;
        z-index: -1;
        background: var(--background);
        height: 150px;
        width: 300px;
        border-radius: 50%;
    }

    button:hover {
        color: var(--foreground);
    }

    button:before {
        top: 100%;
        left: 100%;
        transition: all 0.7s;
    }

    button:hover:before {
        top: -30px;
        left: -30px;
    }

    button:active:before {
        background: #282828ff;
        transition: background 0s;
    }`
;



export default BlackButton;
