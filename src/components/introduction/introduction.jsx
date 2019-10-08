import React from 'react'
import './introduction.css'
import perfil from '../../assets/imgs/perfilLink.jpg'

export default class Introduction extends React.Component{
    render(){
        return <section className="introduction" id='intro'>
                    <img src={perfil} class="rounded-circle profile" height='200px' alt="perfil" ></img>
                    <h1>Nathan Chacon</h1>
                    <h3>Eu sou desenvolvedor web</h3>
                </section>
    }
}