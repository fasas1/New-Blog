import spinner from './spinner.gif'
import styled from 'styled-components'


const Spinner = () => {
    return ( 
          <Spin>
              <img src ={spinner} alt="Loading..." />
          </Spin>
     );
}


const Spin = styled.div `
     width:300px;
     margin:40px auto;
     display:block

`
 
export default Spinner;