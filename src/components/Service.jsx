import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

class Service extends Component {
    state={
        Services:[
            {
                icon:<FaCocktail />,
                title:"free cocktails",
               info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, dolore."

            },
            {
                icon:<FaHiking />,
                title:"Endless Hiking",
               info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, dolore."

            },
            {
                icon:<FaShuttleVan />,
                title:"Free shuttle",
               info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, dolore."

            },
            {
                icon:<FaBeer />,
                title:"Strongest Beer",
               info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, dolore."

            },
        ]
    }
    render() {
        return (
            <div className='services'>
            <Title title="service" />
           <div className="services-center">
               {
                   this.state.Services.map((item, index)=> {
                     return <article key={index} className='service'>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                     </article>
                   }) 
               }
           </div>
            </div>
        );
    }
}

export default Service; 