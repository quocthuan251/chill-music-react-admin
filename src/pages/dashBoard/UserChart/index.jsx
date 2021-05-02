import { TinyArea } from '@ant-design/charts'
import React from 'react'

const VisitChart = () => {
    var data = [
        264,
        417,
        438,
        887,
        309,
        397,
        550,
        575,
        563,
        430,
        525,
        592,
        492,
        467,
        513,
        546,
        983,
        340,
        539,
        243,
        226,
        192,
    ]
    var config = {
        height: 60,
        autoFit: false,
        data: data,
        smooth: true,
        areaStyle: { fill: '#d6e3fd' },
    }
    return <TinyArea {...config} />
}

export default VisitChart
