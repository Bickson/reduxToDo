
import App from '../components/App';

const mapStateToProps = (state) =>{
  return {
    value: state
  };
}

import { connect } from 'react-redux'

export default Application = connect(mapStateToProps)(App);