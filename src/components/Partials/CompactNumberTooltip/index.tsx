import React from 'react';
import {Tooltip as SezyTooltip} from 'sezy-design';

interface ICompactNumberTooltipProps {
    numberInput: string,
}

const compactNumber = (numberInput: string): string => {
    if (!numberInput) return '0';
    const [wholePart, decimalPart] = numberInput.split('.');
    if (decimalPart?.length > 5) {
        if (isDecimalPartStartWithFiveZero(decimalPart)) {
            return `${wholePart}.0...${decimalPart.substring(5, decimalPart.length)}`
        } else {
            return (+numberInput).toFixed(5) + '';
        }
    }
    return numberInput;
}

const isDecimalPartStartWithFiveZero = (decimalPart: string) => {
    let numberOfZero = 0;
    for (let i = 0; i < decimalPart.length; i++) {
        const char = decimalPart.charAt(i);
        if (char === '0') {
            numberOfZero++;
        } else break;
    }
    return numberOfZero >= 5;
}

const CompactNumberTooltip = ({ numberInput }: ICompactNumberTooltipProps) => {
    const shortNumber: string = compactNumber(numberInput);
    return (
        <SezyTooltip size="s" content={numberInput} className="compact-number-tooltip">
            <div>{shortNumber}</div>
        </SezyTooltip>
    )
}

export default CompactNumberTooltip;
