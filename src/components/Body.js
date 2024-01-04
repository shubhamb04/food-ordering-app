import RestaurantCard from './RestaurantCard'
import Search from './Search'
import uberData from '../../data.json';
import Button from './Button'
import { useState } from 'react';

const Body = (props) => {

  let [topRated, setTopRated] = useState(uberData.data.feedItems)
  console.log(topRated.length)
  const handleClick = () => {
     topRated = topRated.filter(res => res.store.rating?.text > 4.5)
    
    setTopRated(topRated)
    console.log(topRated.length )
  }
 
  
  return (
    <div className="body">
      <div className="filter">
        <button className='filter-btn' onClick={() => handleClick()}>Top Rated</button>
      </div>
      <div className="restaurant-container">
        {topRated.map((res) => (
          <RestaurantCard key={res.uuid} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
