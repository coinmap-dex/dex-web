import moment from "moment";

export function thousandSeparator(v) {
    if (!v)
        return v;
    var numParts = v?.toString().replaceAll(',', '')?.toString().split(".");
    numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numParts.join(".");
}

export const formatDateXAxis = tickItem => {
    return moment.unix(tickItem).format('MMM DD')
}

export const formatYAxisNumber = (number) => {
    if (number > 1000000000)
        return (number / 1000000000).toString() + 'B';
    if (number > 1000000)
        return (number / 1000000).toString() + 'M';
    if (number > 1000)
        return (number / 1000).toString() + 'K';
    return number.toString()+'%';
}

