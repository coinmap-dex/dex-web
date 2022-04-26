
import React from 'react';
const GasChartNumber = ({ d, number = 30 }) => {
    const step = number / 12;
    return <svg viewBox="0 0 360 300">
        {
            textList1.map((data, index) => {
                return <text fontSize="13px" key={`GasChartNumber1_${index}`} x={data.x} y={data.y} textAnchor={data.anchor} fill="#fff">{index * step}</text>;
            })
        }
        {
            textList2.map((data, index) => {
                return <text fontSize="11px" key={`GasChartNumber2_${index}`} x={data.x} y={data.y} textAnchor={data.anchor} fill="#fff">
                    {index === 0 ? 0 : d && (index * step * 23000 * d.usdPrice / 1000000000).toFixed(2)}
                </text>;
            })
        }
        {/* <path fill="#6E14D7" d="m64 131.9l8-120.8l8 120.8z" /> */}
    </svg >
}

const textList1 = [
    {
        x: 65,
        y: 280,
        anchor: "end",
    },
    {
        x: 40,
        y: 228,
        anchor: "end",
    },
    {
        x: 28,
        y: 170,
        anchor: "end",
    },
    {
        x: 45,
        y: 108,
        anchor: "end",
    },
    {
        x: 80,
        y: 62,
        anchor: "end",
    },
    {
        x: 125,
        y: 30,
        anchor: "middle",
    },
    {
        x: 180,
        y: 20,
        anchor: "middle",
    },
    {
        x: 235,
        y: 30,
        anchor: "middle",
    },
    {
        x: 280,
        y: 62,
        anchor: "start",
    },
    {
        x: 315,
        y: 108,
        anchor: "start",
    },
    {
        x: 328,
        y: 170,
        anchor: "start",
    },
    {
        x: 320,
        y: 228,
        anchor: "start",
    },
    {
        x: 290,
        y: 280,
        anchor: "start",
    },
]

const textList2 = [
    {
        x: 105,
        y: 234,
        anchor: "start",
    },
    {
        x: 88,
        y: 204,
        anchor: "start",
    },
    {
        x: 82,
        y: 170,
        anchor: "start",
    },
    {
        x: 92,
        y: 135,
        anchor: "start",
    },
    {
        x: 105,
        y: 110,
        anchor: "start",
    },
    {
        x: 146,
        y: 92,
        anchor: "middle",
    },
    {
        x: 180,
        y: 85,
        anchor: "middle",
    },
    {
        x: 215,
        y: 92,
        anchor: "middle",
    },
    {
        x: 255,
        y: 110,
        anchor: "end",
    },
    {
        x: 268,
        y: 135,
        anchor: "end",
    },
    {
        x: 278,
        y: 170,
        anchor: "end",
    },
    {
        x: 272,
        y: 204,
        anchor: "end",
    },
    {
        x: 255,
        y: 234,
        anchor: "end",
    },
]

export default GasChartNumber