import React from 'react';

function Card(props) {
    return (
        <div className="col s12 m7" id={props.id}>
            <h2 className="header">{props.title}</h2>
            <div className="card horizontal">
                <div className="card-image">
                    <img src={props.img} alt='' />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.</p>
                    </div>
                    <div className="card-action">
                        <a href={props.link}>App</a>
                    </div>
                    <div className="card-action">
                        <a href={props.repo}>Repo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;