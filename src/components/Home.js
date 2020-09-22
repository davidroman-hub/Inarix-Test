import React from 'react';
import computer from '../images/computer.png'
import { Link } from 'react-router-dom';
const Home = () => {


    const header = () => (
        <header>
            <section className='__header-content encima'>
                <div className='__header-text'>
                    
                    <div className='typewriter'>
                    <h1>
                        Welcome to inarix portal
                        </h1>
                    </div>
                </div>
            </section>
        </header>
)

const content1 = () => (
    <section className='info'>
        <div className='computer'>
            <img src={computer} alt='inarix'/>
        </div>
        <div className='__description'>
            <p>Here you can access the portal to review your queries
                and your research
                with your personal account
            </p>
            <button className='__button-1'>
                <Link style={{textDecoration:'none', color:'#232527'}}to='/signin'>Personal Space</Link> 
            </button>
        </div>
    </section>
)


const content2 = () => (

    <section className='__info-mission'>
        <div className='mission'>
            Notre mission
        </div>
        <div className='optim'>
            Optimisez les flux de céréales<br/>
            pour toute la filière
        </div>
        <div className='caract'>
            Dématérialisez la mesure qualité et qualifiez vos flux en temps réel. 
            La technologie développée par Inarix s’appuie sur les dernières avancées 
            en intelligence artificielle et analyse d’image.
        </div>
    </section>

)

const footer = () => (
    <footer className='__footer1'>
        <div className='text-2020'>
            2020-inarix
        </div>
        <div className='credits'>
            crédits & mentions légales
        </div>
    </footer>
)







    return(
        <>
        {header()}
        {content1()}
        {content2()}
        {footer()}
        </>
    )
}


export default Home