import React from 'react';

export class Container extends React.Component{
    render(){
        return (
            <div className='container'>
                <div className='content-title'>
                    {this.props.title}
                </div>
                        <div className='content'>
                        {this.props.children}
                    </div>
            </div>
        )

    }
}