import React from 'react';
import { IconIProps, IconWrapper } from 'sezy-design/components/icon';

export const SearchIcon = (props: IconIProps) => {
    return IconWrapper(undefined, props,
        <svg viewBox="0 0 20 21" >
            <circle cx="9.25783" cy="9.31672" r="7.78054" stroke="#5B5A99" strokeWidth="1.82001" />
            <path d="M14.5813 15.4593L18.5067 19.3847" stroke="#5B5A99" strokeWidth="1.82001" />
        </svg>
    )
}

export default SearchIcon