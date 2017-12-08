import React from 'react';
import Chip from 'material-ui/Chip';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Chippo extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestDelete = this.handleRequestDelete.bind(this);
  }

  handleRequestDelete() {
    const {item, chips, removeChip} = this.props;
    const i = chips.findIndex(x => x.id == item.id);
    removeChip(chips, i);
  }

  render() {
    const {item, handleChipClick} = this.props;
    return (
      <MuiThemeProvider>
                <Chip
      className="chip"
      onRequestDelete={this.handleRequestDelete}
      onClick={handleChipClick}
      >
           {item.city}
                 </Chip>
             </MuiThemeProvider>
    )
  }
}

