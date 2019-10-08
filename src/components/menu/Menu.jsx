import React from 'react'
import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Menu extends React.Component{  
    
    state = {
        hidden:'none'
    }

    componentDidMount(){
        const burguer = document.querySelector('.burguer')
        
        burguer.onclick = () =>{
                this.setState({
                    hidden:'flex'
                })
        }
    }
    render(){
        
        return <React.Fragment>
                    <nav className="menu">
                            <span className="logo">
                                N
                            </span>

                            <ul className="navlist">
                                <li><a href="#intro">Home</a></li>
                                <li><a href="#tec">Tecnologias</a></li>
                                <li><a href="#abt">Sobre</a></li>
                            </ul>

                            <div className="icons">
                                <a href="https://www.linkedin.com/in/nathanchacon/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon
                                    icon={['fab', 'linkedin']}
                                />
                                </a>
                                <a href="https://github.com/NathanChacon?tab=repositories"  target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon
                                    icon={['fab', 'github']}
                                />
                                </a>
                        </div>

                        <span className="burguer">
                            <div className="burguer-lines"></div>
                            <div className="burguer-lines"></div>
                            <div className="burguer-lines"></div>
                        </span>    
                    </nav>

                    <nav className="hidden-menu" style={{display:this.state.hidden}}>
                            
                            <ul className="hide-nav">
                                <li><a href="#intro">Home</a></li>
                                <li><a href="#tec">Tecnologias</a></li>
                                <li><a href="#abt">Sobre</a></li>
                            </ul>

                            <div className = "hidden-icons">
                                    <a href="https://www.linkedin.com/in/nathanchacon/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        size="2x"
                                        icon={['fab', 'linkedin']}
                                    />
                                    </a>

                                    <a href="https://github.com/NathanChacon?tab=repositories" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        size="2x"
                                        icon={['fab', 'github']}
                                    />
                                    </a>     
                            </div>

                                    <button className="hidden-button" onClick={() => this.setState({hidden:"none"})}>X</button>
                </nav>
            </React.Fragment> 
    }
}

