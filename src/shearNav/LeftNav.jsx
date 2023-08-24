import React, { cloneElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <h3>All Caterogy</h3>
            <div className='ps-4 '>
                {
                    categories.map(categorie => <p
                        key={categorie.id}
                    >
                        <Link to={`/categorie/${categorie.id}`} className='text-decoration-none text-secondary-emphasis'>{categorie.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;