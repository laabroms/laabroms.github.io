import React from "react";
import { withStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const genres = [
  "Fiction",
  "Non-Fiction",
  "Science Fiction",
  "Adventure",
  
];

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 250,
  },
});



class MultipleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
    }
  }
  

  handleChange = (event) => {
    this.setState({genres: event}, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state)
      }
    });
  };

  handleChangeMultiple = (data) => {
    var options = this.state.genres;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      genres: value
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state)
      }
    })
  }

  render() {
    const { classes } = this.props;
  

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={this.state.genres}
          onChange={this.handleChangeMultiple}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {genres.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
     
    </div>
  );
}

}


export default withStyles(styles)(MultipleSelect);

