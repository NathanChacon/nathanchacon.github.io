import React from 'react';
import Menu from './components/menu/Menu'
import Introduction from './components/introduction/introduction'
import About from './components/about/About'
import Technologies from './components/technologies/Technologies'
import Footer from './components/footer/Footer'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF,faLinkedin,faGithub);


class App extends React.Component {
    constructor() {
        super();
        this.state = {
           className: 'hidden'
        }
      }

      handleScroll() { 
        if (window.scrollY >= 580) {
          this.setState({
             className:{
               htmlClass:'htmlLevel',
               cssClass:'cssLevel',
               jsClass:'jsLevel',
               bootstrapClass:'bootstrapLevel',
               nodeClass:'nodeLevel',
               mysqlClass:'mysqlLevel',
               reactClass:'reactLevel'
             }
           })
         } 
       }
     
       componentDidMount() {
         window.addEventListener('scroll', (e) => {
          this.handleScroll()
        });
       }
  render(){
      return  <React.Fragment>
                  <Menu></Menu>
                  <Introduction></Introduction>
                  <Technologies  className={this.state.className}></Technologies>
                  <About></About>
                  <Footer></Footer>
              </React.Fragment>            
    }
}

export default App;
