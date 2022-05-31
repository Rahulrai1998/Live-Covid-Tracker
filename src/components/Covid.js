import React, { useEffect } from "react";
import { ReactDOM } from "react";
import './Covid.css';
import live_icon from './live_icon.png';

const Covid = () => {

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json')
            const actualData = await res.json()
            console.log(actualData.statewise[0])
        }
        catch (err) {
            console.log(err)

        }
    }

    useEffect(() => {
        //getCovidData();
    }, [])
    return (
        <>
            <section class="header">

                <div class="sub__header__top">
                    <div className="live__icon"><img src={live_icon} /></div>
                    <div><h4>LIVE</h4></div>

                </div>

                <div><h2>COVID-19 CORONAVIRUS TRACKER</h2></div>

            </section>

            <section className="data__section">


                <ul className="cards__strip">
                    <li>
                        <div className="cards">
                            <div className="top__info">
                                <p><h6>OUR</h6><span>NATION</span></p>
                            </div>
                            <div className="data"><h2>INDIA</h2></div>





                        </div>
                    </li>
                    <li>
                        <div className="cards">
                        <div className="top__info">
                                <p><h6>OUR</h6><span>NATION</span></p>
                            </div>
                            <div className="data"><h2>INDIA</h2></div>




                        </div>
                    </li>
                    <li>
                        <div className="cards">
                        <div className="top__info">
                                <p><h6>OUR</h6><span>NATION</span></p>
                            </div>
                            <div className="data"><h2>INDIA</h2></div>



                        </div>
                    </li>

                </ul>
                <ul className="cards__strip">
                    <li>
                        <div className="cards">
                        <div className="top__info">
                                <p><h6>OUR</h6><span>NATION</span></p>
                            </div>
                            <div className="data"><h2>INDIA</h2></div>



                        </div>
                    </li>
                    <li>
                        <div className="cards">
                        <div className="top__info">
                                <p><h6>OUR</h6><span>NATION</span></p>
                            </div>
                            <div className="data"><h2>INDIA</h2></div>



                        </div>
                    </li>
                    <li>
                        <div className="cards">
                        <div className="top__info">
                                <p><h6>OUR</h6><span>NATION</span></p>
                            </div>
                            <div className="data"><h2>INDIA</h2></div>



                        </div>
                    </li>


                </ul>

            </section>




        </>
    )
}
export default Covid