import { createGlobalStyle } from 'styled-components'
import colors from './colors'


const StyledGlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
        background-color :  ${colors.background};	
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Quicksand', sans-serif, bold;
    }
    p {
      font-family : 'Quicksand', sans-serif;
    }
`

function GlobalStyle() {
  return <StyledGlobalStyle/>
}

export default GlobalStyle