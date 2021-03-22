import React from 'react';
import AsyncComponent from '../../components/asyncComponent'
import { useSelector, useDispatch } from 'react-redux'
import {fetchAsync} from './asyncSlice'
const AsyncPage = () => {
    const count = useSelector(state => state.asyncR)
    const dispatch = useDispatch()
    console.log(count)

    
    const clickHandler = () => (
        dispatch(fetchAsync())
    );
    let asyncElem = count.list === null ? null : <h1>{count.list.data}</h1>
    return (
        <>
        <button onClick={clickHandler}>Click to perform Async Operation</button>
        <AsyncComponent />
        {asyncElem}
        </>
    );
};


export default AsyncPage;