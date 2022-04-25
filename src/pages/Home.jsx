import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Service from '../components/Service';
import FeatureRooms from '../components/FeatureRooms';

const Home = () => {
  return <> <Hero> 
    <Banner title='luxurious rooms' subtitle='deluxe rooms starting at $299'>
      <Link to='/rooms' className='btn-primary'>
        our rooms
      </Link>
    </Banner>
  </Hero>
  <Service />
  <FeatureRooms />
  </>
}

export default Home