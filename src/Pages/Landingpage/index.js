import React from 'react';
import './style.css';

const LandingPage = () => {

    return (
        <>
            <main className='landingpage-container'>
                <section className='intro-section'>
                    <div className='intro-overlay'>
                        <h1>
                            Unlimited movies, TV shows, and more.
                        </h1>
                        <p>
                            Watch thousands of show and movies, starting at $5.99/month
                        </p>
                        <button>
                            START YOUR FREE TRIAL
                        </button>
                        <span>
                            Free trial for new subscribers only
                        </span>
                    </div>
                </section>
                <section className='movies-overview'>
                    <div>
                        <h4>INCLUDED IN ALL PLANS</h4>
                        <h2>All The TV You Love</h2>
                        <p>
                            Stream full seasons of exclusive series, current-season episodes,
                            hit movies, documentaries, and more.
                        </p>
                    </div>
                    <div className='movies-overview-grid'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </section>
            </main>
        </>
    )
}

export {LandingPage}
