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
            pageNo: 2,
            value: "",
            tag: null,
            currentTag: "",
            hasUpdated: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=67fa847a53bdc09b2db5c74c43d44b39&tags=${this.props.type}&sort=interestingness-desc&content_type=1&per_page=20&format=json&nojsoncallback=1`
        fetch(url).then(r=>r.json()).then(resp=> this.setState({photos: resp.photos.photo}));
        this.hoverEffectFunction();
    }


    componentWillUpdate(nextProps, nextState, nextContext) {
        if (!(nextState.tag==null)) {
            console.log(nextState);
            const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=67fa847a53bdc09b2db5c74c43d44b39&tags=${nextState.tag}&sort=interestingness-desc&content_type=1&per_page=20&format=json&nojsoncallback=1`;
            fetch(url).then(r => r.json()).then(resp => this.setState({photos: resp.photos.photo}));
            // this.hoverEffectFunction();
            console.log(url);
            this.setState({tag: null});
            this.setState({hasUpdated: true});
            this.setState({pageNo: 2});
        }

    }

// handling loading more photos
    handleLoadMore = () => {
        // counter specifing which page of the results will be displayed
        let counter = this.state.pageNo;
        counter++;
        this.setState({pageNo: counter});
        console.log(this.state.pageNo);
        let url = "";
        if (this.state.hasUpdated == true) {
            url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=67fa847a53bdc09b2db5c74c43d44b39&tags=${this.state.currentTag}&sort=interestingness-desc&content_type=1&per_page=20&page=${this.state.pageNo}&format=json&nojsoncallback=1`
        } else {
            url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=67fa847a53bdc09b2db5c74c43d44b39&tags=${this.props.type}&sort=interestingness-desc&content_type=1&per_page=20&page=${this.state.pageNo}&format=json&nojsoncallback=1`
        }
           fetch(url).then(r=>r.json()).then(resp=> {
            console.log(url);
            let photosOnLoad = resp.photos.photo;
            let photosLoadedPreviously = this.state.photos;
            let newPhotosState = photosLoadedPreviously.concat(photosOnLoad);
            console.log(newPhotosState);
            this.setState({photos: newPhotosState})}
        );
    };
// main Hero hover effect
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
    };

// form handlers

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({tag: this.state.value});
        this.setState({currentTag: this.state.value});
        // this.setState({hasUpdated: true});
        setTimeout(() => {
            console.log(this.state.tag);
        },1000);
        // this.setState({hasUpdated: false});


    }

// render function
    render() {
        const images = this.state.photos.map( (el,i) => {
            return <Picture key={i}
                            farm={el.farm}
                            server={el.server}
                            id={el.id}
                            secret={el.secret}
                            openImage={this.openImage}/>
        });
        return (<>

            <header>
                <div className="header__menuWrapper">
                    <div className="header__innerWrapper">
                        <h1>
                            fetching photos from <a href="https://www.flickr.com/services/api/" target="_blank" className="header__link header__link--flickr"><i>flickr API</i></a>
                            <img src={flickrIcon} className="fi-flickr"/>
                        </h1>

                        <a href="https://rafake.github.io/" target="_blank" className="header__link">visit <i>rafake.github.io</i></a>
                    </div>
                </div>
            </header>
            <div className="hero__wrapper">
                <div className="hero__insideWrapper">
                    <div className="my-div"></div>

                </div>

            </div>
            <main className="gallery__outerWrapper">

            <section className="gallery__innerWrapper">

                {/*input form section - submitting tags*/}
                <form onSubmit={this.handleSubmit} className="gallery__form">
                    <label className="gallery__label">
                        Enter the keyword
                        <input type="text" value={this.state.value} onChange={this.handleChange} className="gallery__inputField"/>
                    </label>
                    <input type="submit" value="Enter" className="gallery__inputButton"/>
                </form>

                {/*gallery section - displaying photos*/}

                <div className="gallery">

                <ul>
                {images}
                {/*</Masonry>*/}
                </ul>
                </div>
                {
                    this.state.isOpen && <ModalPicture author={this.state.author} path={this.state.path} description={this.state.description} onClickClose={this.onClickClose} className="modalInvisible"/>
                }
            </section>

            </main>
                <footer>
                    <button className="footer__loadMore" onClick={this.handleLoadMore}>Load more</button>
                </footer>

            </>
        );
    }

}

export default Gallery;