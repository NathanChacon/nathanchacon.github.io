import React from 'react'
import './technologies.css'

export default class Technologies extends React.Component{
    render(){
        return <section className="technologies" id="tec">
                      <header><h1 className="title">TECNOLOGIAS</h1></header>
                      <ul className="wrapTec">
                          <li>
                              HTML
                              <span className="containerBar">
                                  <span className={this.props.className === 'hidden'?this.props.className : this.props.className.htmlClass}></span>
                              </span>
                          </li>
                          <li>
                             CSS
                              <span className="containerBar">
                                <span className={this.props.className === 'hidden'?this.props.className : this.props.className.cssClass}></span>
                              </span>
                          </li>
                          <li>
                              BOOTSTRAP
                              <span className="containerBar">
                                  <span className={this.props.className === 'hidden'?this.props.className : this.props.className.bootstrapClass}></span>
                              </span>
                          </li>
                          <li>
                              REACT
                              <span className="containerBar">
                                  <span className={this.props.className === 'hidden'?this.props.className : this.props.className.reactClass}></span>
                              </span>
                          </li>
                          <li>
                              JAVASCRIPT
                              <span className="containerBar">
                                  <span className={this.props.className === 'hidden'?this.props.className : this.props.className.jsClass}></span>
                              </span>
                          </li>
                          <li>
                              NODE
                              <span className="containerBar">
                                  <span className={this.props.className === 'hidden'?this.props.className : this.props.className.nodeClass}></span>
                              </span>
                          </li>
                          <li>
                              MYSQL
                              <span className="containerBar">
                                  <span className={this.props.className === 'hidden'?this.props.className : this.props.className.mysqlClass}></span>
                              </span>
                          </li>
                      </ul>
                </section> 
    }

}