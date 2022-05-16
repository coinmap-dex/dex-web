import {BREAKPOINT_WIDTH} from '../constants/breakpoint.constants';

export const isMobileScreen = () => {
    return window.innerWidth <= BREAKPOINT_WIDTH.XS;
}
