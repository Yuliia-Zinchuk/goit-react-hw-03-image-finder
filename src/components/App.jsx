import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImagesWithQuery } from '../services/api';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

import axios from 'axios';

// axios.defaults.baseURL =
//   'https://pixabay.com/api/?q=cat&page=1&key= 29884579-b0e414ddacb31e478cf055115&image_type=photo&orientation=horizontal&per_page=12';

export class App extends Component {
  state = {
    imagesName: '',
    images: [],
    currentImage: null,
    page: 1,
    loading: false,
  };
  handleFormSubmit = imagesName => {
    console.log(imagesName);
    this.setState({ imagesName });
  };

  // handleCurrentImageChange = event => {
  //   this.setState({ currentImage: event.currentTarget });
  // };

  updateCurrentImage = data => {
    console.log(data);
    this.setState({ currentImage: data });
  };

  closeModal = () => {
    this.setState({ currentImage: null });
  };

  componentDidUpdate(_, prevState) {
    if (prevState.imagesName !== this.state.imagesName) {
      this.setState({ images: [] });
      //this.setState(imagesName: '',
      this.fetchImages();
      console.log(this.state.images);
    }
  }

  async componentDidMount() {
    // fetchImagesWithQuery().then(response => console.log(response.data.hits));
    // fetchImagesWithQuery().then(response =>
    //   this.setState(prevState => ({
    //     images: [...prevState.images, ...response.data.hits],
    //   }))
    // );
    //console.log(this.state.images);
    //---------------
    // fetch(
    //   'https://pixabay.com/api/?q=dog&page=1&key=29884579-b0e414ddacb31e478cf055115&image_type=photo&orientation=horizontal&per_page=12'
    // )
    //   .then(res => res.json())
    //   .then(data => console.log(data.hits));
    //-----------------
    //console.log(fetchImagesWithQuery());
    //.then(image.map(image => this.setState({ image })));
    // const response = await axios.get('/search?query=react');
    // this.setState({ articles: response.data.hits });
  }

  fetchImages = () => {
    this.setState({ loading: true });
    fetchImagesWithQuery(this.state.imagesName, this.state.page)
      .then(response =>
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
        }))
      )
      .catch(error => this.setState({ error: error.message }))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  //componentDidMount() {}
  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />;
        {this.state.loading && <Loader />}
        {this.state.imagesName && (
          <ImageGallery
            //imagesName={this.state.imagesName}
            openModal={this.updateCurrentImage}
            images={this.state.images}
          />
        )}
        {this.state.currentImage && (
          <Modal src={this.state.currentImage} closeModal={this.closeModal} />
        )}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
