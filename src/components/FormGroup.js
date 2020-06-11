import React, { useState } from 'react'

import './FormGroup.css'

const FormGroup = ({htmlFor, label, children, column, help}) => {
  
  const [show, setShow] = useState(false);

  const showTooltip = ()  => {
    if(show || help === undefined)
      setShow(false);
    else
      setShow(true)
  }

  let visible = show ? 'visible' : 'disable'; 

  return (
        <div className={`col-md-${column}`} >
          <div className="form-group">              
              <label htmlFor={htmlFor} className="subtitle" >
                { label } 
                <i onMouseEnter={showTooltip} onMouseLeave={showTooltip} className="pi pi-info-circle ico">
                  <div id={visible} className="Tooltip">
                    <div id="arrow"></div>
                    <span>{help}</span>
                  </div>
                </i> 
              </label>

              { children }
        </div>
    </div>
  )
}

export default FormGroup;