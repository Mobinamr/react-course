import RobotProfilePicture from '../assets/robot.png';
import UserProfilePicture from '../assets/user.png';
import './ChatMessage.css';

export function ChatMessage( { message, sender } ) {
  //const message = props.message;
  //const sender = props.sender;
  /*
  if (sender === 'robot') {
    return (
      <div>
        <img class="user-image" src="images/robot.png" alt="" />
        {message}
      </div>
    );
  }
  */

  return ( //if the sender is user then classname is user else its robot
    <div className={
      sender === 'user'
      ? 'user'
      : 'robot'
    }> 
      {sender === 'robot' && (
        <img className="user-image" src= {RobotProfilePicture} alt="" />
        )} 
      <div className="chat-message-text">
        {message}
      </div>
      {sender === 'user' && (
        <img className="user-image" src= {UserProfilePicture} alt="" />
        )}
    </div>
  );
}
