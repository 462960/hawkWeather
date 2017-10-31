import React from 'react';


export class UserProfile extends React.Component {
  constructor() {
    super();
    this.handleUserDetail = this.handleUserDetail.bind(this);
  }

  componentDidMount() {
    this.props.getUserDetails('462960');
    console.log(`I'm mounted!!`)
  }

  handleUserDetail(event) {
    event.preventDefault();
    if (this.username !== null) {
      this.props.getUserDetails(this.username.value);
      this.username.value = '';
    }
    console.log(`I am handleUserDetail`)
  }

  render() {
    const { user } = this.props;
      return (
        <div>
          { user ? <div>
            <input
              type="text"
              ref={(ref) => this.username = ref}
            />
            <button onClick={this.handleUserDetail}>Search</button>
            <div>
              <h1> User Profile </h1>
              <p><a href={user.html_url} target="_blank">{user.login}</a></p>
            </div>
          </div> : '...loading'}
        </div>
      )
    }
}


