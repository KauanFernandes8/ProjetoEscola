import './Main.css';
import React from 'react';
import Header from './Header';

export default function Main(props)
{
    return(
    <React.Fragment>
        <Header/>
        <div className = "content">
            <Header {...props}/>
            <main>
                <div>
                    {props.children}
                </div>
            </main>
           
        </div>
    </React.Fragment>
    )
}