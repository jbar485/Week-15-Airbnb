import React from 'react';
import Site from './Site';

var masterSiteList =  [
  {
    names:'Paris',
    location: 'https://a0.muscache.com/im/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?aki_policy=x_large',
  },
  {
    names:'Germany',
    location: 'https://a0.muscache.com/im/pictures/3d3a87bc-9a2c-47b7-8a36-22969be34e5d.jpg?aki_policy=x_large',
  },
  {
    names:'England',
    location: 'https://a0.muscache.com/im/pictures/ef2b9de4-3b78-4c26-9d90-fa1789762ebc.jpg?aki_policy=x_large',
  },
  {
    names:'Israel',
    location: 'https://a0.muscache.com/im/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?aki_policy=x_large',
  },
  {
    names:'Seoul',
    location: 'https://a0.muscache.com/im/pictures/5fc7d255-eadc-4fce-bdb9-ca208532ff5a.jpg?aki_policy=x_large',
  },
  {
    names:'Battle Ground',
    location: 'https://a0.muscache.com/im/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?aki_policy=x_large',
  },
  {
    names:'Costa Rica',
    location: "https://a0.muscache.com/im/pictures/5cf02a45-25d8-47c6-8c8b-c61949238dc0.jpg?aki_policy=x_large",
  },
  {
    names:'Rome',
    location: 'https://a0.muscache.com/im/pictures/3d3a87bc-9a2c-47b7-8a36-22969be34e5d.jpg?aki_policy=x_large',
  },
  {
    names:'Hawaii',
    location: "https://a0.muscache.com/im/pictures/5cf02a45-25d8-47c6-8c8b-c61949238dc0.jpg?aki_policy=x_large"
  }
];


function SiteList(){

    var siteStyles = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap"
    }
  return (
    <div style = {siteStyles}>
      {masterSiteList.map((site,index) =>
        <Site names={site.names}
          location={site.location}
          key={index}/>
      )}
    </div>
  );
}

export default SiteList;