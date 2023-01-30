import React, {useState} from 'react';
import Chart from 'react-apexcharts';

const StockChart = ({chartData, symbol}) => {

    const {day,week,year} = chartData;
    const [dateFormat, setDateFormat] = useState("24h");

    const determineDateFormat = () =>{
        switch(dateFormat){
            case "24h": 
                return day;
            case "7d":
                return week;
            case "1y":
                return year;
            default:
                return day;
        }   
    }

    // on récupère la dernière entrée de nos données (soit day/week/year )
    console.log(determineDateFormat())
    console.log(dateFormat)
    // const color = determineDateFormat()[determineDateFormat().length-1].y - determineDateFormat()[0].y > 0 ? "#26C281" : "#ed3419";
    const options = {
        // colors : [color],
        title:{
            text: symbol,
            align: "center",
            style: {
                fontSize: "24px"
            }
        },
        chart:{
            id: "stock data",
            animation: {
                speed:300,
            }
        },
        xaxis : {
            type: "datetime",
            label:{
                datetimeUTC : false
            }
        },
        tooltip: {
            x:{
                format:"MMM dd HH:MM"
            }
        }
    }

    const series = [{
        name: symbol,
        data: determineDateFormat()
    }]

    const renderButtonSelected = (button) =>{
        let classes = "btn m-1 ";
        if(button === dateFormat){
            return classes += "btn-primary";
        }else {
            return classes += "btn-outline-primary"
        }
    }
    return (
        <div className="mt-5 p-4 shadow bg-white">
            <Chart options={options} series={series} type="area" width="100%" />
            <div>
                <button onClick={()=> setDateFormat('24h')} className={renderButtonSelected("24h")}>24h</button>
                <button onClick={()=> setDateFormat('7d')} className={renderButtonSelected("7d")}>7d</button>
                <button onClick={()=> setDateFormat('1y')} className={renderButtonSelected("1y")}>1y</button>
            </div>
        </div>
    );
};

export default StockChart;