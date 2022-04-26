import { useState, useEffect, useCallback } from 'react';

type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const breakpointFn = (bp: BreakpointType): boolean => {
    const bpToPointMapper = {
        'xs': 1,
        'sm': 2,
        'md': 3,
        'lg': 4,
        'xl': 5,
        'xxl': 6,
    }
    const windowBpPoint = (() => {
        const { innerWidth: width } = window;
        if (width > 1536)
            return 6;
        if (width > 1280)
            return 5;
        if (width > 1024)
            return 4;
        if (width > 768)
            return 3;
        if (width > 640)
            return 2;
        return 1;
    })();
    return windowBpPoint >= bpToPointMapper[bp];
}

const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState(() => breakpointFn);
    useEffect(() => {
        function handleResize() {
            setBreakpoint(() => breakpointFn.bind({}));
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return breakpoint;
}

export default useBreakpoint
