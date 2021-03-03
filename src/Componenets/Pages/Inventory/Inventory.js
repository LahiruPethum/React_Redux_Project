import React, { Component } from 'react'
//import styled from 'styled-components'
import DragDrop from './DragDrop'

// const AppWrapper = styled.div`
// display:flex;
// justify-content:center;
// margin-top:100px;
// `;

// const Container = styled.div`
// display:flex;
//     justify-content:center;
//     margin-top:100px;
// `;

const Appwrapper={
    display:'flex',
justifyContent:'left'
}


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
                <div style={Appwrapper}>
                    <div className='Container'>
                        <DragDrop/>
                    </div>
                </div>
            </div>
        )
    }
}