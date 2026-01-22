import React from 'react'
import PropsTask1child from './PropsTask1child'

const PropsTask1 = () => {
  let num1=1;
  let num2;
  // ▗▄▄▖ ▗▄▄▖  ▗▄▖ ▗▄▄▖  ▗▄▄▖    ▗▄▄▄ ▗▄▄▖ ▗▄▄▄▖▗▖   ▗▖   ▗▄▄▄▖▗▖  ▗▖ ▗▄▄▖
  // ▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌▐▌       ▐▌  █▐▌ ▐▌  █  ▐▌   ▐▌     █  ▐▛▚▖▐▌▐▌   
  // ▐▛▀▘ ▐▛▀▚▖▐▌ ▐▌▐▛▀▘  ▝▀▚▖    ▐▌  █▐▛▀▚▖  █  ▐▌   ▐▌     █  ▐▌ ▝▜▌▐▌▝▜▌
  // ▐▌   ▐▌ ▐▌▝▚▄▞▘▐▌   ▗▄▄▞▘    ▐▙▄▄▀▐▌ ▐▌▗▄█▄▖▐▙▄▄▖▐▙▄▄▖▗▄█▄▖▐▌  ▐▌▝▚▄▞▘

  //! passing the properties from parent to its childComponent ika 
  //? we should not do props drilling
  return (
    <div>
      <pre>{`
▗▄▄▖ ▗▄▄▖  ▗▄▖ ▗▄▄▖  ▗▄▄▖    ▗▄▄▄ ▗▄▄▖ ▗▄▄▄▖▗▖   ▗▖   ▗▄▄▄▖▗▖  ▗▖ ▗▄▄▖
▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌▐▌       ▐▌  █▐▌ ▐▌  █  ▐▌   ▐▌     █  ▐▛▚▖▐▌▐▌   
▐▛▀▘ ▐▛▀▚▖▐▌ ▐▌▐▛▀▘  ▝▀▚▖    ▐▌  █▐▛▀▚▖  █  ▐▌   ▐▌     █  ▐▌ ▝▜▌▐▌▝▜▌
▐▌   ▐▌ ▐▌▝▚▄▞▘▐▌   ▗▄▄▞▘    ▐▙▄▄▀▐▌ ▐▌▗▄█▄▖▐▙▄▄▖▐▙▄▄▖▗▄█▄▖▐▌  ▐▌▝▚▄▞▘
                                                                      
                                                                      
                                                                      
      `}                             
                                                                      
      </pre>
        PT1
                                                                      
      <PropsTask1child num1 num2 num3={20}/>
      
    </div>
  )
}

export default PropsTask1