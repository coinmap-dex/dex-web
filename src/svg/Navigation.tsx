
import React from 'react';
const NavigationIcon = ({onClick}) => {
    return <svg viewBox="0 0 18 18" onClick={onClick}>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H12C12.5523 0 13 0.447715 13 1C13 1.55228 12.5523 2 12 2H1C0.447715 2 0 1.55228 0 1Z" fill="#A6B1CC" />
        <path fillRule="evenodd" clipRule="evenodd" d="M0.125 7C0.125 6.44772 0.572715 6 1.125 6H16.875C17.4273 6 17.875 6.44772 17.875 7C17.875 7.55228 17.4273 8 16.875 8H1.125C0.572715 8 0.125 7.55228 0.125 7Z" fill="#A6B1CC" />
        <path fillRule="evenodd" clipRule="evenodd" d="M0 13C0 12.4477 0.447715 12 1 12H12C12.5523 12 13 12.4477 13 13C13 13.5523 12.5523 14 12 14H1C0.447715 14 0 13.5523 0 13Z" fill="#A6B1CC" />
    </svg>
}
export default NavigationIcon
