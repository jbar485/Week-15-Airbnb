import React from "react";
import PropTypes from "prop-types";
import "./Site.css"

function Site(props){
    return (
        <div className="card images">
            <img src={props.location} alt={props.names} className="sizing"></img>
  <         div className="container">
                <h4><b>{props.names}</b></h4>
            </div>
        </div>
    );
}

Site.propTypes = {
    names: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
};
  
export default Site;
