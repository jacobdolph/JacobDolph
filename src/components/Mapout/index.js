import React, { Component } from 'react';
import { Col } from '../Grid'
import portfolio from '../../portfolio.json'


function Mapout() {

    return (
        portfolio.map(portfolio => {
            return <Col size='s12 m4' key={portfolio.id} className="z-depth-2" ><a href={portfolio.projectUrl}><img src={portfolio.image} alt={portfolio.name} style={{ width: '7rem' }} /></a><h6>{portfolio.name}</h6><a href={portfolio.repoUrl}><h6>Repo</h6></a></Col>
        })
    )
}

export default Mapout;