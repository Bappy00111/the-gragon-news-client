import React from 'react';
import Qzoon from '../../../assets/qZone1.png'
import Qzoon1 from '../../../assets/qZone2.png'
import Qzoon2 from '../../../assets/qZone3.png'

const QZoon = () => {
    return (
        <div className='bg-secondary mt-3 p-3'>
            <h4>Q-Zoon</h4>
            <div>
                <img src={Qzoon} alt="" />
                <img src={Qzoon1} alt="" />
                <img src={Qzoon2} alt="" />
            </div>
        </div>
    );
};

export default QZoon;