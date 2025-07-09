import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

import gallery1 from '../assets/gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'

const images = [
  {
    original: gallery1,
    thumbnail: gallery1,
  },
  {
    original: gallery2,
    thumbnail: gallery2,
  },
  {
    original: gallery3,
    thumbnail: gallery3,
  },
];

const ImageCarousel = () => {

  return (
    <ImageGallery items={images} showThumbnails={false} showPlayButton={false} showBullets={true} autoPlay={true} slideInterval={4000}/>
  )
};

export default ImageCarousel;

