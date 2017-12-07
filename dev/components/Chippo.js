import React from 'react';
import Chip from 'material-ui/Chip';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';
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
    console.log('Delete', i);

  }



  render() {
    const {item, handleClick} = this.props;
    return (
      <MuiThemeProvider>
                <Chip
      className="chip"
      onRequestDelete={this.handleRequestDelete}
      onClick={handleClick}
      >
           {item.city}
                 </Chip>
             </MuiThemeProvider>
    )
  }
}

// export const Chippo = (props) => {
//   const {item, chips, removeChip} = props;
//   return (
//     <MuiThemeProvider>
//                <Chip
//     className="chip"
//     onRequestDelete={handleRequestDelete}
//     onClick={handleClick}
//     >
//           {item.city}
//                 </Chip>
//             </MuiThemeProvider>
//   )
// }

