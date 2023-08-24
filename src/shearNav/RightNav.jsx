import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import QZoon from '../pages/Sheared/QZoon/QZoon';
import bg from '../../src/assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h1> <h4>Login With</h4></h1>
            <Button className='mb-2 w-full text-center' variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button variant="outline-primary"><FaGithub />Login with Github</Button>
            <div>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/>Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZoon></QZoon>
            <div className='my-3'>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;