import './thumbnail.css';

function index({ src, short }) {
  return (
    <div className="thumbnail">
      <div className="thumbnail-text">
        <p>{short}</p>
        <p className="line"></p>
      </div>
      <img src={src} alt="" />
    </div>
  );
}

export default index;
