import React from 'react';
import ReduxComponent from '../../components/reduxComponent'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './reduxSlice';
const ReduxPage = () => {

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    

    return (
    <>
    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>
    <ReduxComponent value={count}/>
    </>
    
    
    );
};


export default ReduxPage;