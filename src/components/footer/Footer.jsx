import React from 'react'
import {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'
export default class Footer extends Component{

    render(){
        return <footer className="foot">
                  <div className="footIcons">
                      <div className="iconShape">
                          <a href="https://www.linkedin.com/in/nathanchacon/" target="_blank" rel="noopener noreferrer">
                              <FontAwesomeIcon
                                   className="fontIcon"
                                   icon={['fab', 'linkedin']}
                                   size="2x"
                                   />
                           </a>
                       </div>
                      <div className="iconShape">
                          <a href="https://github.com/NathanChacon?tab=repositories" target="_blank" rel="noopener noreferrer">
                              <FontAwesomeIcon
                                   className="fontIcon"
                                   icon={['fab', 'github']}
                                   size="2x"
                                    />
                           </a>
                      </div>
                  </div>

                  <div className="contactFoot">
                       <h5>Contato</h5>
                        <ul>
                            <li>
                                nathanchacon321@gmail.com
                            </li>
                            <li>
                                (21)99474-1161
                            </li>
                        </ul>
                  </div>
               </footer>
    }
}