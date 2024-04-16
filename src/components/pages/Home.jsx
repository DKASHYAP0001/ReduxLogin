import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_FakeStoreData_Api } from '../../redux/actions/Agency';

export const Home = () => {

  const dispatch = useDispatch();
  const fakeStoreData = useSelector((state) => state.Agency.fakeStoreData);
  fakeStoreData && console.log(fakeStoreData)

  useEffect(() => {
    if (fakeStoreData.length === 0) dispatch(get_FakeStoreData_Api)
  }, []);

  return (
    <div className="App">
      <h1>This is Dev Tiwari</h1>
      {
        fakeStoreData.data?.map((item, id) => {
          return <div> {item?.category} </div>
        })
      }
    </div>
  );
}
