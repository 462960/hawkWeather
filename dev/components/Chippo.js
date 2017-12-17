import React from 'react';
import Chip from 'material-ui/Chip';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Chippo extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestDelete = this.handleRequestDelete.bind(this);
    this.handleChipClick = this.handleChipClick.bind(this);
  }

  handleRequestDelete() {
    const {item, chips, removeChip} = this.props;
    const i = chips.findIndex(x => x.id == item.id);
    removeChip(chips, i);
  }

  handleChipClick() {
    const {item, chips, getData} = this.props;
    const i = chips.findIndex(x => x.id == item.id);
    getData(chips[i].city)
  }

  render() {
    return (
      <MuiThemeProvider>
                <Chip
      className="chip"
      onRequestDelete={this.handleRequestDelete}
      onClick={this.handleChipClick}
      >
           {this.props.item.city}
                 </Chip>
             </MuiThemeProvider>
    )
  }
}

