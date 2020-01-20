import React from "react";
import {Link} from 'react-router-dom'
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Search from '../../components/search'
import { serviceList, categories } from "../../common";

import "./index.scss";

export class Listing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="banner-container">
        
          <Search />
          
        </div>
        <Container>
          {serviceList?.map(value => {
            return (
           <div onClick={()=>{this.props.setCategory(value.category_link);
           this.props.history.push({
               pathname:"/events",
               state:{
                   category:value.category_link
               }
           })}}>
                <img src={value.img} width="100%" height="100%"></img>
              </div>
             
            );
          })}
          <div class="grid-container">
            {categories?.map(value => {
              return (
                <div class="grid-item"  onClick={()=>{this.props.setCategory(value.category_link);
                    this.props.history.push({
                        pathname:"/events",
                        state:{
                            category:value.category_link
                        }
                    })}}>
                  <div className="grid-img">
                    <img src={value.img}></img>
                  </div>
                  <div className="grid-title"> {value.title}</div>
                </div>
              );
            })}
          </div>
        </Container>
      </>
    );
  }
}
