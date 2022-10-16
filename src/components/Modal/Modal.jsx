// export const Modal = () => {
//   return (
//     <div className="Overlay">
//       <div className="Modal">
//         <img src="" alt="" />
//       </div>
//     </div>
//   );
// };

import { Component } from 'react';
import css from './Moda.module.css';
export class Modal extends Component {
  closeByEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  closeByBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEscape);
  }

  render() {
    // const {
    //   image: { src, alt },
    //   closeModal,
    // } = this.props;
    return (
      <div className={css.Overlay} onClick={this.closeByBackdrop}>
        <div className={css.Modal}>
          <img src={this.props.src.src} alt="" />
          <button
            // className={style.closeButton}
            type="button"
            onClick={this.props.closeModal}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}
