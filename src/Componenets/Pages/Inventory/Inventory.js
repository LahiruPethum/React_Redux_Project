import React, { Component } from 'react'
import styled from 'styled-components'
import DragDrop from './DragDrop'

const AppWrapper = styled.div`
    display:flex;
    justify-content:center;
    margin-top:100px;
`;

const Container = styled.div`

`;

export default class App extends Component {
    constructor(props){
        super(props);

        this.state={
            checked:false
        }
    }
    render() {
        return (
            <div>
                <AppWrapper>
                    <Container>
                        <DragDrop/>
                    </Container>
                </AppWrapper>
            </div>
        )
    }
}