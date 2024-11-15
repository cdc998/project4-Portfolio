export default function ImageContainer({ imageSource, description }) {
    return (
        <div className="imageContainer">
            <img className="image" src={imageSource} alt="" />
            <p className="date">{description}</p>
        </div>
    )
}