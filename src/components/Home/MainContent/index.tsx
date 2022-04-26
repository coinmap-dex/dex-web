import React from 'react'
import _ from 'lodash';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { useBreakpoint } from '~hooks';

const MainContent = () => {
    const breakpoint = useBreakpoint();
    return breakpoint('xs') && !breakpoint('sm')? <Mobile /> : <Desktop />
}

export default MainContent