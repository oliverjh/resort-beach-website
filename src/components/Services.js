import React, {Component} from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free Cocktails",
                info: "Free cocktails to all people staying within any of our rooms",
            },
            {
                icon: <FaHiking/>,
                title: "Hiking",
                info: "Hiking routes and groups outlined for all occupants of one of our rooms",
            },
            {
                icon: <FaShuttleVan/>,
                title: "Shuttle Service",
                info: "We provide a shuttle service for all people staying within one of our suites",
            },
            {
                icon: <FaBeer/>,
                title: "Strongest Beer",
                info: "We are happy to boast that we have the strongest beer on the island avaliable",
            },
        ]
    }

    render() {
        return(
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}