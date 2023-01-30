import React from 'react';
import AutoComplete from '../components/AutoComplete';
import StockList from '../components/StockList';
const StockOverviewPage = () => {
    return (
        <div className='text-center'>
            stock overview page
            <AutoComplete/>
            <StockList/>
        </div>
    );
};

export default StockOverviewPage;