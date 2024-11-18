const photos = [
  {
    id: Math.floor(Math.random() * 100000),
    img: "/images/hands.jpg",
    alt: "paintings on plates",
  },
  {
    id: Math.floor(Math.random() * 100000),
    img: "/images/noodles.jpg",
    alt: "paintings on plates",
  },
  {
    id: Math.floor(Math.random() * 100000),
    img: "/images/paint-brush.jpg",
    alt: "paintings on plates",
  },
  {
    id: Math.floor(Math.random() * 100000),
    img: "/images/pumpkin.jpg",
    alt: "paintings on plates",
  },
  {
    id: Math.floor(Math.random() * 100000),
    img: "/images/sophie-painting.jpg",
    alt: "paintings on plates",
  },
  {
    id: Math.floor(Math.random() * 100000),
    img: "/images/momsandbabies.jpg",
    alt: "paintings on plates",
  },
  {
    id: Math.floor(Math.random() * 100000),
    img: "/images/sensorytoys.jpg",
    alt: "paintings on plates",
  },
]

function Gallery() {
  return (
    <div className="gallery">
      <div className="wrapper">
        <h2 className="heading-lg">Gallery</h2>
        <div className="row">
          {photos.map((image) => (
            <div className="col" key={image.id}>
              <img className="rounded-img" src={image.img} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Gallery
