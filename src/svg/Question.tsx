import React from 'react';
import { IconIProps, IconWrapper } from 'sezy-design/components/icon';

export const Question = (props: IconIProps) => {
    return IconWrapper(undefined, props,
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
                <circle cx="17" cy="17" r="12.75" stroke="white" />
                <ellipse cx="17.0001" cy="25.5001" rx="0.708333" ry="0.708332" fill="white" />
                <path d="M17 22.6667V21.453C17 20.4412 17.5057 19.4963 18.3476 18.935L19.1954 18.3698C20.479 17.5141 21.25 16.0735 21.25 14.5307V14.1668C21.25 11.8195 19.3472 9.91675 17 9.91675V9.91675C14.6528 9.91675 12.75 11.8195 12.75 14.1667V14.1667" stroke="white" />
            </g>
        </svg>
    )
}

export default Question