import React from "react"

class Picture extends React.Component{
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        if(typeof this.props.openImage == "function") {
            const info = {
                farm: this.props.farm,
                server: this.props.server,
                id: this.props.id,
                secret: this.props.secret
            };
            this.props.openImage(info)
        }
    };

    render() {
        return (
            <li className="picture-item"
                onClick={this.handleClick}>
                <div className="img-container">
                    <img src={`https://farm${this.props.farm}.staticflickr.com/${this.props.server}/${this.props.id}_${this.props.secret}.jpg`} alt=""/>

                </div>
                </li>
        )
    }

}

export default Picture;