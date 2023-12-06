import './styles.scss'
function VisitorMessage() {
  return (
    <div className="message">
      <p className="message-content">
          Bonjour, Que souhaitez vous faire ?
      </p>
      <ul className='message-choice'>
        <li className='message-choice-li'>Me connecter</li>
        <li className='message-choice-li'>M'inscrire</li>
        <li className='message-choice-li'>Qui est tu ?</li>
        <li className='message-choice-li'>Qu'est ce que Just Learn ?</li>
      </ul>
    </div>
  );
}

export default VisitorMessage;