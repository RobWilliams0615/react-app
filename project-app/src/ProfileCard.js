function ProfileCard({ title, username, image }) {
  // console.log(title, username);
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="bot logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{username}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
