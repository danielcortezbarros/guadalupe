import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/assets/gallery1.jpg",
    thumbnail: "/assets/gallery1.jpg",
  },
  {
    original: "/assets/gallery2.jpg",
    thumbnail: "/assets/gallery2.jpg",
  },
  {
    original: "/assets/gallery3.jpg",
    thumbnail: "/assets/gallery3.jpg",
  },
];

const ImageCarousel = () => {

  return (
    <ImageGallery items={images} showThumbnails={false} showPlayButton={false} showBullets={true} autoPlay={true} slideInterval={4000}/>
  )
};

export default ImageCarousel;

