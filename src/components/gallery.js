import React from "react";
import Picture from "./picture";
import Masonry from 'react-masonry-component';
import ModalPicture from './modalPicture'

class Gallery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            author: "",
            description: "",
            isOpen: false,
            // value: ""
        }
    }

    // handleChange = (event) => {
    //     this.setState({value: event.target.value})
    // };

    openImage = (imgInfo) => {
        console.log(imgInfo);
        const urlInfo = `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=67fa847a53bdc09b2db5c74c43d44b39&photo_id=${imgInfo.id}&format=json&nojsoncallback=1`
        fetch(urlInfo).then(r=>r.json()).then(resp=> {
            console.log(imgInfo.id);
            console.log(resp);
            this.setState({isOpen: true,
            author: resp.photo.owner.username,
            description: resp.photo.description._content,
            path: `https://farm${imgInfo.farm}.staticflickr.com/${imgInfo.server}/${imgInfo.id}_${imgInfo.secret}_c.jpg`})

        }
        )
    };

    onClickClose = () => {
        this.setState({isOpen: false})
    };

    componentDidMount() {
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=67fa847a53bdc09b2db5c74c43d44b39&text=${this.props.type}&per_page=10&format=json&nojsoncallback=1`
        fetch(url).then(r=>r.json()).then(resp=> this.setState({photos: resp.photos.photo}))
    }

    render() {
        const images = this.state.photos.map( (el,i) => {
            console.log(this.state.photos);
            return <Picture key={i}
                            farm={el.farm}
                            server={el.server}
                            id={el.id}
                            secret={el.secret}
                            openImage={this.openImage}/>
        });
        return (
            <section>
                <Masonry className={'gallery'}
                         elementType={'ul'}
                >
                {images}
                </Masonry>
                {
                    this.state.isOpen && <ModalPicture author={this.state.author} path={this.state.path} description={this.state.description} onClickClose={this.onClickClose}/>
                }

                {/*<form onSubmit={this.props.onClickButtonChoice}>*/}
                {/*    <label>*/}
                {/*        choose a thing*/}
                {/*    <input type="text" id="input" value={this.state.value} onChange={this.handleChange}/>*/}
                {/*    </label>*/}
                {/*    <input type="submit" value="submit"/>*/}
                {/*</form>*/}


            </section>
        );
    }

}

export default Gallery;