import React from 'react';

function Index() {
  function sendNotification() {
    new Notification("Hey from React", {
      body: "Message from slack"
    })
  }
  return (
    <div>
      <button onClick={sendNotification}>Send notification</button>
    </div>
  )
}

export default Index;
