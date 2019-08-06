import React from "react";


class ModalPicture extends React.Component {
    render() {
        return <div className="overlay-modal">
            <div className="overlay-modal-bg">
                <img src={this.props.path} alt=""/>
                <h2>Author: {this.props.author}</h2>
                {/*<h2>Description: {this.props.description}</h2>*/}
            </div>
            <button className="closeButton reset-Button" onClick={this.props.onClickClose}>Close</button>
        </div>;
    }
}

export default ModalPicture;