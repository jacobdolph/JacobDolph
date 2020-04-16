import React from 'react';

function Card(props) {
    return (
        <div className="col s12 m6" id={props.id} >
            <h2 className="header flow-text">{props.title}</h2>
            <div className="card" style={{ border: 'solid thin ' }}>
                <div className="card-image">
                    <img src={props.img} alt='' />
                </div>
                <div className="card-stacked">
                    <span className="card-title activator grey-text text-darken-4">{props.title}<i className="material-icons right">more_vert</i></span>
                    <p><a rel="noopener noreferrer" target='_blank' href={props.link}>Application</a></p>
                </div>


                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                    <p>{props.description}<br /><br /> Tech Stack<br />{props.tech} </p>
                </div>

                <div className="card-action">
                    <a href={props.repo}>Repo</a>
                </div>
            </div>
        </div>

    )
}

export default Card;