import React from "react";
import Picture from "./picture";
import ModalPicture from './modalPicture';
import hoverEffect from 'hover-effect';
import image1 from '../images/blue-sky-clear-sky-cold-346529.jpg'
import image2 from '../images/adventure-daylight-glacier-301391.jpg'
import image3 from '../images/daylight-environment-forest-459225.jpg'
import flickrIcon from '../images/flickr.svg'

class Gallery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            author: "",
            description: "",
            isOpen: false,
        }
    }

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
        fetch(url).then(r=>r.json()).then(resp=> this.setState({photos: resp.photos.photo}));
        this.hoverEffectFunction();
    }

    hoverEffectFunction = () => {
        let myAnimation = new hoverEffect({
            parent: document.querySelector('.my-div'),
            intensity: 0.3,
            image1: image3,
            // image1: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg',
            image2: image2,
            // image2: 'https://images.unsplash.com/photo-1440330033336-7dcff4630cef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1342&q=80',
            displacementImage: image1,
            // displacementImage: 'https://cdn.rawgit.com/robin-dela/hover-effect/b6c6fd26/images/stripe1mul.png?raw=true',
            // hover: false,
            // next: 1
            speedIn: 5
        });
    //     return (
    //         <>
    //     <div className="my-div"></div>
    //         </>
    // )
    };

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
        return (<>
            {/*<div className="hoverEffect__outerWrapper">*/}
            {/*    <div className="hoverEffect__innerWrapper">*/}
            {/*        {this.hoverEffectFunction()}*/}
            {/*    </div>*/}
            {/*</div>*/}

            <header>
                <div className="my-div"></div>
                <h1>
                fetching photos from flickr

                </h1>
                <img src={flickrIcon} className="fi-flickr"/>

            </header>
            <main className="gallery__outerWrapper">
            <section className="gallery__innerWrapper">
                {/*<Masonry className={'gallery'}*/}
                {/*         elementType={'ul'}*/}
                {/*>*/}
                <div className="gallery">
                <ul>
                {images}
                {/*</Masonry>*/}
                </ul>
                </div>
                {
                    this.state.isOpen && <ModalPicture author={this.state.author} path={this.state.path} description={this.state.description} onClickClose={this.onClickClose}/>
                }
            </section>
            </main>
            </>
        );
    }

}

export default Gallery;