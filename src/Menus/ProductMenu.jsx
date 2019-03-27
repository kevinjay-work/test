import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import firebase from "../config";
import {Link} from 'react-router-dom';
class SimpleMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      anchorEl: null,
      allProducts:[],
      db:[]
    };
  
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  componentDidMount(){
    let subAdmins = firebase.database().ref('products/');
        subAdmins.on('value', snapshot => {
            let data = snapshot.val();
        if (data)
        {
            this.setState({
                    allProducts: data
                },()=>this.DataLoader()
            )
        }
        else {
            this.setState({
                allProducts:[]
            })
        }
    })
}
DataLoader()
    {
        let items = this.state.temp
        let data = Object.values(this.state.allProducts);

        if (data.length !== 0) {
            if (data) {
                items = data.map((item,ind) => {
                    let i = ind 
                    return (
                      <MenuItem key={ind} onClick={this.handleClose.bind(this, ind)}><Link to={`/products/${item.name}`}>{item.name}</Link></MenuItem>
                    )
                })
                this.setState({
                    db:items
                })
            }
        }
    }

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Products
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
        {this.state.db}
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;