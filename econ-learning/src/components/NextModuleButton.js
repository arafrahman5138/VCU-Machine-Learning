// Option between styled buttons or normal buttons

import React from 'react';
import { Link } from 'react-router-dom';
// import '../../home/home-components/Button.css';
import * as Styled from './StyledButton'

// Comment this section if using styled buttons -->
// const STYLES = ['btn--primary', 'btn-outline'];

// const SIZES = ['btn--medium', 'btn-large'];

// export const NextModuleButton = ({
//     children,
//     type,
//     onClick,
//     buttonStyle,
//     buttonSize,
//     link
// }) => {
//     const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
//     const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

//     return(
//         <Link to ={link} className='btn-mobile'>
//             <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//             onClick={onClick}
//             type={type}>
//                 {children}
//             </button>
//         </Link>
//     )
// };
// <-- Comment this section if using styled buttons

export const NextModuleButton = ({ children, onClick, type, title, value, link }) => {
  return (
    <Link to ={link} className='btn-mobile'>
        <Styled.Button onClick={onClick} 
            type={type} 
            value={value}> 
        <span>{title}</span>
            {children}
        </Styled.Button>
    </Link>
  )
};
