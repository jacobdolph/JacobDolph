import React, { Component } from 'react';
import portfolio from '../../portfolio.json'
import Card from '../Card'
import Wrapper from '../Wrapper';


class Mapout extends Component {

    render() {

        return (
            <Wrapper>

                {
                    portfolio.map(portfolio => (
                        <Card
                            title={portfolio.name}
                            img={portfolio.img}
                            link={portfolio.projectUrl}
                            repo={portfolio.repoUrl}
                            key={portfolio.id}
                            id={portfolio.id}
                        />

                    )
                    )
                }
            </Wrapper>

        )
    }





}

export default Mapout;