import React, { Component } from 'react';
import portfolio from '../../portfolio.json'
import Card from '../Card'
import Wrapper from '../Wrapper';
import { Container } from '../Grid';


class Mapout extends Component {

    render() {

        return (
            <Wrapper>
                <Container container>
                    {portfolio.map(portfolio => (
                        <Card
                            title={portfolio.name}
                            img={portfolio.image}
                            link={portfolio.projectUrl}
                            repo={portfolio.repoUrl}
                            key={portfolio.id}
                            id={portfolio.id}
                        />
                    ))}
                </Container>
            </Wrapper>
        )
    }
}

export default Mapout;