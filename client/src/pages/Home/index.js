import React from 'react'
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CarouselHome from '../../components/CarouselHome'
import Hero from '../../components/Hero'
import AboutSBoat from '../../components/AboutSBoat'

export const Home = () => {
    // access to the isAuthenticated property from the auth reducer state
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const showLoginBtn = () => {
        if (!isAuthenticated) {
            return (
                <Button color="black" animated secondary>
                    <Button.Content visible>Login</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            )
        }
    }

    return (
        <div>
            <Hero />
            <CarouselHome />
            <AboutSBoat />
        </div>
    )
};

export default Home;
