import React, { Component } from 'react'

export class features extends Component {
  render() {
    return (
        <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Giá trị cốt lõi</h2>
          </div>
          <div className="row">
          {this.props.data ? this.props.data.map((d) => 
 <div className="col-xs-6 col-md-3"> <i className={d.icon}></i>
 <h3>{d.title}</h3>
 <p>{d.text}</p>
</div>
          ) : 'Loading...'}
           
          
          </div>
        </div>
      </div>
    )
  }
}

export default features
