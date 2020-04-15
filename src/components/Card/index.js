import React from 'react';

function Card(props) {
    return (
        <div className="col s12 m6" id={props.id}>
            <h2 className="header flow-text">{props.title}</h2>
            <div className="card horizontal">
                <div className="card-image">
                    <img src={props.img} alt='' />
                </div>
                <div className="card-stacked">
                    <div className="card-action">
                        <a href={props.link}>App</a>
                    </div>
                    <div className="card-action">
                        <a href={props.repo}>Repo</a>
                    </div>
                </div>
            </div>
            <p>Tech Stack</p>
        </div>
    )
}

export default Card;