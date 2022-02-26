import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Changecash = () => {
  const dispath = useDispatch()
  const cash = useSelector(state => state.cash)

  const addCash = (cash) => {
    dispath({ type: "ADD_CASH", payload: cash })
  }

  const getCash = (cash) => {
    dispath({ type: "GET_CASH", payload: cash })
  }
  

  return (
    <div>
      <div> {cash} </div>
      <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
      <button onClick={() => getCash(Number(prompt()))}>Cнять деньги</button>
    </div>
  );
}

export default Changecash;
