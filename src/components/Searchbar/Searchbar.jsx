import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import css from './Searchbar.module.css';

export class SearchBar extends Component {
  state = {
    imagesName: '',
  };

  handleImageChange = event => {
    this.setState({ imagesName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imagesName.trim() === '') {
      // alert('Please, enter your request');
      return toast.error('Please, enter your request!');
    }
    this.props.onSubmit(this.state.imagesName);

    this.setState({ imagesName: '' });
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.Searchform} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            name="imagesName"
            value={this.state.imagesName}
            onChange={this.handleImageChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
