import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard title="Alexa" username="@alexa99" image={AlexaImage} />
      <ProfileCard title="Cortana" username="@cortana23" image={CortanaImage} />
      <ProfileCard title="Siri" username="@siri10" image={SiriImage} />
    </div>
  );
}

export default App;
