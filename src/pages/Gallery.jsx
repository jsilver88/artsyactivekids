const photos = [
  {
    id: Math.floor(Math.random() * 100000),
    img: "/images/artplates.jpg",
    alt: "paintings on plates",
  },
  {
    id: Math.floor(Math.random() * 100000),
    img: "/images/artsncrafts.jpg",
    alt: "paintings on plates",
  },
  {
    id: Math.floor(Math.random() * 100000),
    img: "/images/kidsplayingwithbeads.jpg",
    alt: "paintings on plates",
  },
  {
    id: Math.floor(Math.random() * 100000),
    img: "/images/babysensory.jpg",
    alt: "paintings on plates",
  },
  {
    id: Math.floor(Math.random() * 100000),
    img: "/images/babysoundbowl.jpg",
    alt: "paintings on plates",
  },
  {
    id: Math.floor(Math.random() * 100000),
    img: "/images/kidsbracelets.jpg",
    alt: "paintings on plates",
  },
  {
    id: Math.floor(Math.random() * 100000),
    img: "/images/kidscoloring.jpg",
    alt: "paintings on plates",
  },
  {
    id: Math.floor(Math.random() * 100000),
    img: "/images/kidsdrawing.jpg",
    alt: "paintings on plates",
  },
  {
    id: Math.floor(Math.random() * 100000),
    img: "/images/watercolor.jpg",
    alt: "paintings on plates",
  },
  {
    id: Math.floor(Math.random() * 100000),
    img: "/images/sensorytoys.jpg",
    alt: "paintings on plates",
  },
  {
    id: Math.floor(Math.random() * 100000),
    img: "/images/watercolorbrushes.jpg",
    alt: "paintings on plates",
  },
  {
    id: Math.floor(Math.random() * 100000),
    img: "/images/heartshapedcardboard.jpg",
    alt: "paintings on plates",
  },
]

function Gallery() {
  return (
    <div className="gallery wrapper">
      <h2 className="heading-lg">Gallery</h2>
      <div className="row">
        {photos.map((image) => (
          <div className="col" key={image.id}>
            <img className="rounded-img" src={image.img} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Gallery
