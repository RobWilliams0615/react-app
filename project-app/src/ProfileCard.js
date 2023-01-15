function ProfileCard({ title, username, image }) {
  // console.log(title, username);
  return (
    <div className="test-div">
      <img src={image} alt="bot logo" />
      <h1>{title}</h1>
      <h3>{username}</h3>
    </div>
  );
}

export default ProfileCard;
