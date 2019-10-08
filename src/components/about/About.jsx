import React from 'react'
import './about.css'
import Books from '../../assets/imgs/books.jpg'
export default class About extends React.Component{

    render(){
        return <section className="about" id="abt">
                    <header><h1 className="title">SOBRE</h1></header>

                   <div className="aboutWrapper" > 
                        <img src={Books} className="booksImg" alt="library"></img>
                        <div className="aboutText">
                            <h5>Oi, meu nome é Nathan e eu sou desenvolvedor web</h5>
                            <p>
                                Adoro aprender coisas novas, ler e colocar o conhecimento em prática, sou autodidata e bastante esforçado 
                                no que faço, apaixonado pela área de desenvolvimento web sempre procuro estar por dentro das novas tecnologias,
                                me divirto com o processo de aprendizagem de uma nova linguagem de programação ou framework  
                            </p>
                            <div className="aboutCards">
                                
                                <div className="myCard"> 
                                        <p><b>Numero</b>: (21)99474-1161</p>
                                        <p><b>Email</b>: nathanchacon321@gmail.com</p>
                                        <p><b>Cidade</b>: Rio de Janeiro</p>  
                                </div>

                                <div className="myCard">
                                        <p><b>Universidade</b>: Unigranrio</p>
                                        <p><b>Cursando</b>: Sistemas de Informação</p>
                                        <p><b>Ensino Superior</b>: Completo</p> 
                                </div>
                            </div> 
                        </div>
                    </div>
                </section>      
    }

}