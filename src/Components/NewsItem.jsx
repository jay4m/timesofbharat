import img from '../assets/image.png';

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-light text-dark mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "415px" }}>
            <img src={src || img} style={{ height: "200px", width: "360px" }} className="card-img-top" alt="News Image" />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text">{description ? description.slice(0, 90) : "Stay informed with the latest news updates and in-depth coverage on current events from around the world. Click to read more."}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    );
};

export default NewsItem;
