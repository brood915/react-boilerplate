import React from 'react';
import Main from '../components/Main';
import styles from '../style/main.scss';



class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	}
	}
	render() {
		return(<div className = {styles.test}><Main /></div>);

	}
}

export default MainContainer;
