import React from "react";
import { Tick } from "../../Assets";
import "./style.css";

const Plans = () => {
  return (
    <>
      <section className="plans-container">
        <div className='plans-container-header'>
          <h2>Select your plan</h2>
          <p>No hidden fees, equipment rentals, or installation appointments</p>
          <p>Switch plans or cancel anytime</p>
        </div>
        <div className='plans-card-grid'>
          <div className="plan-card">
            <div>
              <h2>Free</h2>
              <h4>Basic license</h4>
              <p>Enjoy your favorite movies at no cost</p>
            </div>
            <hr />
            <ul>
              <li>
                <span>
                <img src={Tick} alt='tick'/>
                </span>
                Watch on one device
              </li>
              <li>
                <span>
                <img src={Tick} alt='tick'/>
                </span>
                Ads in streaming library
              </li>
              <li>
                <span>
                <img src={Tick} alt='tick'/>
                </span>
                1 user profile
              </li>
              <li>
                <span>
                <img src={Tick} alt='tick'/>
                </span>
                Stream movies
              </li>
            </ul>
            <button>YOUR CURRENT PLAN</button>
          </div>
          <div className="plan-card">
            <div id='monthly'>
              <h2>#1,000</h2>
              <h4>Monthly</h4>
              <p>A 30 days plan to enjoy your favorite movies in HD</p>
            </div>
            <hr />
            <ul>
              <li>
                <span>
                <img src={Tick} alt='tick'/>
                </span>
                Watch on three device
              </li>
              <li>
                <span>
                <img src={Tick} alt='tick'/>
                </span>
                Ads in streaming library
              </li>
              <li>
                <span>
                <img src={Tick} alt='tick'/>
                </span>
                3 user profile
              </li>
              <li>
                <span>
                <img src={Tick} alt='tick'/>
                </span>
                Stream and Download
              </li>
            </ul>
            <button id='upgrade-btn'>UPGRADE TO MONTHLY</button>
          </div>
          <div className="plan-card">
            <div id='yearly'>
              <h2>#10,000</h2>
              <h4>Yearly</h4>
              <p>A 365 days plan to enjoy your favorite movies in 4K</p>
            </div>
            <hr />
            <ul>
              <li>
                <span>
                    <img src={Tick} alt='tick'/>
                </span>
                Watch on five devices
              </li>
              <li>
                <span>
                    <img src={Tick} alt='tick'/>
                </span>
                No ads in streaming library
              </li>
              <li>
                <span>
                    <img src={Tick} alt='tick'/>
                </span>
                6 user profile
              </li>
              <li>
                <span>
                    <img src={Tick} alt='tick'/>
                </span>
                Stream and Download
              </li>
            </ul>
            <button id='upgrade-btn'>UPGRADE TO YEARLY</button>
          </div>
        </div>
      </section>
    </>
  );
};

export { Plans };
