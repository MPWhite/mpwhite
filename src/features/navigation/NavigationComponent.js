import './Navigation.scss'
import React from "react";

export const WithNavigation = (props) => {
    return (
        <div>
            <div className='Navigation'>
                <p>December 13, 2020</p>
                <p></p>
            </div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
)
}