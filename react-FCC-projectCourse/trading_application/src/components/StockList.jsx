import React, {useState, useEffect, useContext} from 'react';
import finnHub from '../apis/finnHub';
import {BsFillCaretDownFill, BsFillCaretUpFill} from 'react-icons/bs'
import { WatchListContext } from '../watchListContext';
import  {useNavigate} from 'react-router-dom';
 
const StockList = () => {
    const {watchList, deleteStock} = useContext(WatchListContext)
    const [stock, setStock] = useState([]);
    const navigate = useNavigate();

    const changeColor = (change) =>{
       return change > 0 ? "success" : 'danger'
    }

    const renderIcon = (change) =>{
        return change > 0 ? <BsFillCaretUpFill /> :<BsFillCaretDownFill/>
    }

    const handleStockSelect = (symbol) =>{
        navigate(`detail/${symbol}`)
    }

    useEffect(()=>{
        let isMounted= true;
        const fetchData = async() =>{
            const responses = []
            try{
            //    const response = await finnHub.get("/quote", {
            //     params: {
            //         symbol: "MSFT"
            //     }
            //    });
            //    console.log(response);

            // Hard coded solution
               // promise.all() we provide a list of promises and it's going to try to resolve all of them at one, it will send the request all in one.
            //    const responses = Promise.all(
            //     finnHub.get("/quote", {
            //         params: {
            //             symbol: "MSFT"
            //         }
            //        }),
            //        finnHub.get("/quote", {
            //         params: {
            //             symbol: "GOOGL"
            //         }
            //        }),
            //        finnHub.get("/quote", {
            //         params: {
            //             symbol: "AMZN"
            //         }
            //        })
            //    )

            // Map solution
            const responses = await Promise.all(watchList.map((item)=> finnHub.get("/quote", {params: {symbol:item}})))
                // console.log(responses)
            const data = responses.map((response) => {
                return {
                    data: response.data,
                    symbol: response.config.params.symbol
                }
            })
            console.log(data)
               if(isMounted)setStock(data);
            }catch(err){
                console.log(err)
            }
        }
        fetchData();
        return () => (isMounted = false)
    }, [watchList])

    return (
        <div>
            <table className='table hover mt-5'>
                <thead style={{color:"rgb(79,89,102"}}>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Last</th>
                        <th scope='col'>Chg</th>
                        <th scope='col'>Chg%</th>
                        <th scope='col'>High</th>
                        <th scope='col'>Low</th>
                        <th scope='col'>Open</th>
                        <th scope='col'>PClose</th>
                    </tr>
                </thead>
                <tbody>
                    {stock.map((stockData)=>{
                        return (
                            <tr style={{cursor:"pointer"}} className='table-row' key={stockData.symbol} onClick={()=>handleStockSelect(stockData.symbol)}>
                                <th>{stockData.symbol}</th>
                                <td>{stockData.data.c}</td>
                                <td className={`text-${changeColor(stockData.data.d)}` }>{stockData.data.d} {renderIcon(stockData.data.d)}</td>
                                <td  className={`text-${changeColor(stockData.data.dp)}` }>{stockData.data.dp} {renderIcon(stockData.data.dp)}</td>
                                <td>{stockData.data.h}</td>
                                <td>{stockData.data.l}</td>
                                <td>{stockData.data.o}</td>
                                <td>{stockData.data.pc} <button className='btn btn-danger btn-sm ml-3 d-inline-block delete-button' onClick={(e)=>{
                                    e.stopPropagation()
                                    deleteStock(stockData.symbol)
                                }}>remove</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default StockList;