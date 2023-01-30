import React, {useEffect, useState}  from 'react';
import finnHub from '../apis/finnHub';

const StockData = ({symbol}) => {
    const [stockedData, setStockedData] = useState([])
    let isMounted = true;
    useEffect(() =>{

        const fetchData = async() =>{
            try{
                const response = await finnHub.get("/stock/profile2", {
                    params:{
                        symbol
                    }
                })
                // console.log(response)
                if(isMounted) setStockedData(response.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
        return ()=> (isMounted = false) ;

    },[symbol])
    return (
        <div>
            {stockedData && ( 
                    <div className='row border-bg-white rounded shadow-sm p-4 mt-5'>
                        <div className="col">
                            <div>
                                <span className='fw-bold'>Name: </span>{stockedData.name}
                            </div>
                            <div>
                                <span className='fw-bold'>Country: </span>{stockedData.country}
                            </div>
                            <div>
                                <span className='fw-bold'>Ticker: </span>{stockedData.ticker}
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <span className='fw-bold'>Exchange: </span>{stockedData.exchange}
                            </div>
                            <div>
                                <span className='fw-bold'>Industry: </span>{stockedData.finnhubIndustry}
                            </div>
                            <div>
                                <span className='fw-bold'>IPO: </span>{stockedData.ipo}
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <span className='fw-bold'>MarketCap: </span>{stockedData.marketCapitalization}
                            </div>
                            <div>
                                <span className='fw-bold'>Shares Outstanding: </span>{stockedData.shareOustanding}
                            </div>
                            <div>
                                <span className='fw-bold'>Url: </span><a href={stockedData.weburl } target='_blank'>{stockedData.weburl}</a>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default StockData;