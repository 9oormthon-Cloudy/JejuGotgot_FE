import React from 'react';
import './ChatPage.css';

const ChatPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <button className="back-button">←</button>
        <h1 className="header-title">클라우디와의 대화</h1>
      </div>
      
      <div className="chat-content">
        <div className="message-bubble">
          비슷한 곳이 어딘지 물어보세요!</div>
        
        <div className="cloud-container">
          <div className="glow-circle">
            <div className="cloud-character">
             <img
            src="/imgs/cloudy.png"
            alt="클라우디"
            className="cloudy-image"

          />
            </div>
          </div>
        </div>
      </div>

      <div className="chat-input-container">
        <input 
          type="text" 
          className="chat-input" 
          placeholder="메시지를 입력하세요"
        />
        <button className="send-button">↑</button>
      </div>
    </div>
  );
};

export default ChatPage;