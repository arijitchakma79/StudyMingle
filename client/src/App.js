import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelContainer, ChannelListContainer, Auth } from './components';

const streamApi = process.env.REACT_APP_STREAM_API;
const client = StreamChat.getInstance(streamApi);

const authToken = false;

console.log(streamApi);


function App() {

  if (!authToken){
    return (
      <Auth/>
    )
  }
  return (
    <div className="inline-flex">
        <Chat client={client} theme='team light'>
          <ChannelListContainer/>
          <ChannelContainer/>
        </Chat>
    </div>
  );
}

export default App;
