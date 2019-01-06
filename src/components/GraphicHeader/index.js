import React, { Component } from 'react';
import './index.css';

class GraphicHeader extends Component {
    render(){
        //<Link to='/'>Home</Link>
        return (
            <div className="graphic-header"
                 style={{  backgroundImage: this.props.image}}>
                <div className="opaque-mask">
                    <div className="wishup-container">
                        <div className="graphic-header-content">
                            <div className="heading">
                                {this.props.type=="small"? <h2>
                                    {this.props.title}
                                </h2>: <h1>
                                    {this.props.title}
                                </h1>}
                            </div>
                            <div className="description">
                                <h4>
                                    {this.props.description}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GraphicHeader;
