import React from 'react';
import './TabView.css'

function TabView ({ children, onChangePanel, indexTab }) {

  /**
   * indexTab = controla qual painel sera renderizado
   * onChangePanel = devolve o index do elemento que aconteceu o click do mouse;
   */

  const getTitles = children.map( (son, index) => {
    /** retorna o index do elemento clicado */  
    const active = () => onChangePanel(index);
    const style = index === indexTab ? 'active' : '';

    return( 
      /** renderiza o título do conteúdo fornecido pelo componente TabPanel **/  
      <li onClick={ active } key={ index } id={ style } >{son.props.title}</li> 
    )

  });

  /** Verifica se o index do conteúdo no TabPanel está **/ 
  const getTabPanels = children.map( (content, index) => {     
      return indexTab === index ? content : false;
  })
  
  return (
    <div className="tabview">
      <ul className="flex"> 
        { getTitles }
      </ul>
        { getTabPanels }
    </div>
  )
};


function TabPanel ({ children }) {
  return (
    <div className="tabPanel">
      { children }
    </div>
  )
};


export { TabView, TabPanel };
