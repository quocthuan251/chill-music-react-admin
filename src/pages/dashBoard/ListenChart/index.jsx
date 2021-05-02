import { TinyColumn } from '@ant-design/charts'
import React from 'react'

const ListenChart = () => {
    var data = [274, 337, 81, 497, 666, 219, 269]
    var config = {
        height: 64,

        autoFit: false,
        data: data,
        tooltip: {
            customContent: function customContent(x, data) {
                var _data$, _data$$data
                return 'NO.'
                    .concat(x, ': ')
                    .concat(
                        (_data$ = data[0]) === null || _data$ === void 0
                            ? void 0
                            : (_data$$data = _data$.data) === null || _data$$data === void 0
                            ? void 0
                            : _data$$data.y.toFixed(2)
                    )
            },
        },
    }
    return <TinyColumn {...config} />
}

export default ListenChart
