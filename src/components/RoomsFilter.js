import React from 'react'
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';

//get all unique values of type of room
const getUnique = (items, value) => {
    //Set only accepts unqiue values
    return [...new Set(items.map(items => items[value]))]
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    //get unique types using function above
    let types = getUnique(rooms, 'type');

    //add all
    types = ['all', ...types];

    //map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms, 'capacity');

    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* Select Type */}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>{types}</select>
                </div>
                {/* End of Select Type */}
                {/* Guests */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>{people}</select>
                </div>
                {/* End of Guests */}
                {/* Room Price */}
                <div className="form-group">
                    <label htmlFor="price">Room Price ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} className="form-control" onChange={handleChange} />
                </div>
                {/* End of Room Price */}
                {/* Size */}
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} className="form-control" onChange={handleChange} />
                        <input type="number" name="maxSize" id="size" value={maxSize} className="form-control" onChange={handleChange} />
                    </div>
                </div>
                {/* End of Size */}
                {/* Checkboxes */}
                <div className="form-group">
                    <div className="form-group">
                        <div className="single-extra">
                            <input 
                                type="checkbox" 
                                name="breakfast" 
                                id="breakfast" 
                                checked={breakfast} 
                                onChange={handleChange} />
                            <label htmlFor="breakfast">Breakfast</label>
                        </div>
                        <div className="single-extra">
                            <input
                                type="checkbox" 
                                name="pets" 
                                id="pets" 
                                checked={pets} 
                                onChange={handleChange} />
                            <label htmlFor="pets">Pets</label>
                        </div>
                    </div>
                </div>
                {/* End of Checkboxes */}
            </form>
        </section>
    )
}