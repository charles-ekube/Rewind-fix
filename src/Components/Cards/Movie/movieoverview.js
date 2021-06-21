import React from 'react';
import './style.css';


const MovieOverviewCard = (BackgroundImg) => {

    return (
        <>
            <div className='movie-overview-card'>
                <div className='movie-overview-card-overlay'>
                    <ul>
                        <li>
                            <span>New & Classic</span>
                            Movies
                        </li>
                        <li>
                            Men in Black
                            <span>1997</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export {MovieOverviewCard}