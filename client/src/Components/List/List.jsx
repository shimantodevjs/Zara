import React from 'react'
import './List.scss'
import Card from '../Card/Card'
import { useSelector } from 'react-redux';
import data from '../Data/data'

const List = () => {

  const selectedGender = useSelector((state) => state.gender);
     

    const filteredData = selectedGender === 'all' ? data : data.filter(item => item.gender === selectedGender);

    return (
    <div className='list'>
      {filteredData.map((item)=>(
        <Card item={item} key={item.id} />
      ))}
    </div>
  )
}

export default List
