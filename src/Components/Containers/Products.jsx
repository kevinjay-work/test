import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from "../../config";
import { debuglog } from 'util';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});


class AutoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      message:'',
      sub_product:{},
      db:[]
    }
  }
  onSubmit = () => {
    this.setState({show:false, message:'Thank you for submitting your form'})
  }
 
  componentWillMount(){
    this.loadProduct(this.props.match.params.product_name)
 
}
loadProduct(name){
  firebase.database().ref('products').once('value')
  .then((snapshot)=> {
    const products = snapshot.val().filter(item=>item.name===name)
    this.setState({
      sub_product:products[0]
    })
  }
  )
}
componentWillReceiveProps(nextProps){
  this.loadProduct(nextProps.match.params.product_name);
}

  render()
  {
  
  const { classes } = this.props;

  return (
    <div className={classes.root}>
      <Grid container >
      {this.state.sub_product?
        <Grid item sm={8} >
          <Paper className={classes.paper } style={{margin:'1%'}}>
          <div style={{backgroundColor:this.state.sub_product.color}}>
            <h3>{this.state.sub_product.name}</h3>
              <p>{this.state.sub_product.paragraph}</p>
              <img src={this.state.sub_product.image} alt=""  style={{width:"100%"}}/>
              </div>
          </Paper>
        </Grid>
        :''}
        <Grid item sm={4}>
          <Paper className={classes.paper } style={{marginTop:'1%',marginRight:'1%', padding:'3%'}}>
          <h4>Contact Form</h4>
          {!this.state.show &&
          <div>
              <h4 style={{color:'green'}}>{this.state.message}</h4>
          </div>
          }

          {this.state.show &&
          <div>
            <div>
               <span style={{marginRight:'1%'}}>
                <TextField
                  id="outlined-name"
                  label="Name"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </span>
               <span style={{marginRight:'1%'}}>
                <TextField
                  id="outlined-name"
                  label="Email"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </span>
            </div>
            <div>
               <span style={{marginRight:'1%'}}>
                <TextField
                  id="outlined-name"
                  label="Company Name"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </span>
               <span style={{marginRight:'1%'}}>
                <TextField
                  id="outlined-name"
                  label="Job Title"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </span>
            </div>
            <div>
               <span style={{marginRight:'1%'}}>
                <TextField
                  id="outlined-name"
                  label="Any Question"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </span>
               <span style={{marginRight:'1%'}}>
                <TextField
                  id="outlined-name"
                  label="URL"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </span>
            </div>
            <div>
              <Button variant="contained" onClick={this.onSubmit} color="primary" className={classes.button}>
                Submit
              </Button>

            </div>
            </div>
          }
            
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);