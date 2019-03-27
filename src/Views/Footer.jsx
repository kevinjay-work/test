import React, { Component } from 'react';

const styles = {
    root: {
      backgroundColor:'#698ec6',
      padding:'5%'
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    bgColor:{
        backgroundColor:'#698ec6'
    },
    
    textDecor:{
        textDecoration:'none',
        color:'white'
    }
  };

class Footer extends Component {
  render() {
    return (
      <div style={styles.root}>
        <h1>Footer</h1>
       
      </div>
    );
  }
}

export default Footer;
