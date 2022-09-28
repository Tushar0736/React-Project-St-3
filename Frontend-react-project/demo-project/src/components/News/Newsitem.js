import React from "react";

function Newsitem(props) {

    let { title, description, imageUrl, newsUrl, author, date, source} = props;
  return (
    <>
      <div className="container my-3">
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: "1", left: "90%" }}
          >
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="Not Found..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By:- {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsitem;