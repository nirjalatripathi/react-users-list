import "./ProfileCard.css";

export default function ProfileCard(props) {
  return (
    <div className="card">
      <img 
        src="https://i.pinimg.com/736x/a9/6d/0a/a96d0ad234e09771af2da06a11bdd72e.jpg"
        alt="profile"
        className="profile-img"
      />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  );
} 

