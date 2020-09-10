import React from 'react';
import {Sparklines,SparklinesLine,SparklinesReferenceLine} from 'react-sparklines';

const Chart = (props) => {
    // console.log(props)
    var sum = _.round(_.sum(props.temp)/props.temp.length);
    // for(var i=0;i<props.temp.length;i++)
    //     sum+=props.temp[i];
    // console.log(sum/(props.temp.length))
    return (
        <React.Fragment>
            <td>
                <Sparklines height = {200} width = {180} data = {props.temp}>
                    <SparklinesLine color = {props.color}></SparklinesLine>
                    <SparklinesReferenceLine type = "avg"></SparklinesReferenceLine>
                </Sparklines>
                <div>{sum}</div>
            </td>
            
        </React.Fragment>
    )
}
export default Chart;