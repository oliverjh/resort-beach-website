import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <Hero>
            <Banner title="404 Page Not Found" subtitle="Sorry, we couldn't find the page you were looking for">
                <Link to='/'  className="btn-primary">
                    Return to home page
                </Link>
            </Banner>
        </Hero>
    )
}