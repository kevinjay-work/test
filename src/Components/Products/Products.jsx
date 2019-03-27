import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
      message:''
    }
  }
  onSubmit = () => {
    this.setState({show:false, message:'Thank you for submitting your form'})
  }

  render()
  {
  
  const { classes } = this.props;

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item sm={8} >
          <Paper className={classes.paper } style={{margin:'1%'}}>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia enim nec ligula laoreet commodo. Etiam a nibh vel arcu gravida aliquet. Aliquam eu pellentesque tortor. Proin nec gravida orci, pretium placerat ligula. Curabitur dui quam, aliquet vitae ornare et, iaculis a massa. Proin eleifend ligula quam, non porttitor risus cursus ultricies. Fusce vitae feugiat dolor. Fusce bibendum ligula sit amet nulla consequat semper. Phasellus laoreet imperdiet volutpat. Vestibulum tempus laoreet diam non congue.

Nulla eu fermentum est. Phasellus ullamcorper ligula in nibh fermentum blandit. Maecenas eu tortor sed magna ornare vestibulum. Fusce bibendum mi molestie ornare commodo. Integer ac leo porttitor, lobortis lectus eu, auctor dui. Vivamus ut tellus mi. Vivamus nisi mauris, commodo nec hendrerit et, dignissim ut risus. Fusce rhoncus, erat id cursus rhoncus, ipsum ipsum interdum ipsum, malesuada vestibulum justo sem vitae dui. Maecenas rutrum purus nibh, in auctor nisi hendrerit et. Sed molestie ut ipsum ut porttitor. In porta sit amet eros non accumsan. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer ultricies gravida dapibus.

Duis suscipit facilisis euismod. Aliquam luctus mollis scelerisque. Curabitur aliquam pharetra eros, at bibendum sem euismod convallis. In feugiat dui orci, sed fringilla urna fringilla in. Donec sodales lectus metus, id mattis quam eleifend sed. Cras pretium ante ut sem tempor, nec tempor leo vulputate. In sed libero felis.

Duis auctor, erat a dapibus vulputate, nulla mauris venenatis dolor, a fringilla augue magna a lorem. Praesent sit amet sem id magna pharetra mattis. In ultricies, quam ac porta blandit, sem erat blandit sem, quis sagittis nulla turpis ac diam. Donec volutpat odio vitae mattis hendrerit. Phasellus pretium consectetur enim nec sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ipsum dui, dapibus id cursus nec, sodales quis ex. Morbi sit amet fringilla justo. Proin eget sapien nulla. Suspendisse vel sapien quis enim feugiat eleifend et nec orci. Integer vehicula at felis nec posuere.

Nam ullamcorper molestie quam. Etiam ac aliquet turpis. Quisque maximus at neque eu laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean libero tellus, egestas non pretium et, tincidunt in metus. Nunc vulputate velit nec nisl vestibulum sodales. Cras lacinia blandit odio sed mattis. Donec dictum tincidunt laoreet. Nunc ac erat elit. Donec mollis sollicitudin nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Morbi blandit gravida dolor, ut dignissim felis consectetur a. Etiam vel accumsan lorem, ac eleifend dolor. Etiam posuere ex nec luctus fermentum. In ipsum ipsum, pulvinar eu cursus vitae, maximus quis ipsum. Integer lacus sapien, consectetur id feugiat non, tempor non purus. Nunc auctor, dolor sed mollis imperdiet, mauris ante finibus tortor, sit amet finibus lorem ligula auctor velit. Donec sed nunc sit amet lorem rutrum placerat. Duis sed libero ut orci malesuada semper ut non dui. Vivamus et ullamcorper diam, ut viverra felis.

Aenean fermentum quam efficitur dolor faucibus hendrerit. Nullam consectetur sem at odio tristique, id sollicitudin leo suscipit. Curabitur mollis sit amet leo quis laoreet. Sed varius dolor faucibus tempor commodo. Aliquam maximus consequat neque in malesuada. Aenean consequat ligula in felis vehicula, sit amet dictum eros iaculis. Suspendisse in eleifend ipsum, a pulvinar lacus. Vivamus sed enim magna. Proin pulvinar mollis velit. Etiam et gravida lacus. Nam arcu nibh, lobortis ut eros vitae, vestibulum mollis quam.

Ut eu rhoncus diam, et pretium ante. Donec eu convallis arcu, sagittis sodales nisl. Praesent vel ultrices urna. Fusce commodo finibus libero eget sagittis. Sed dapibus feugiat neque placerat auctor. Duis eu ultrices risus, non maximus orci. Quisque consectetur.


            </p>
          </Paper>
        </Grid>
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