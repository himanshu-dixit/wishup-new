import React, { Component } from 'react';
import SimpleCard from '../../components/SimpleCard';
import styles from './styles';

class HomePage extends Component {
  render() {
    return (
      <div>
        <SimpleCard style={styles.bgImage}></SimpleCard>
      </div>
    );
  }
}

export default HomePage;
