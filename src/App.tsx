import './App.css';
import { useState } from 'react';
import ChannelGroups from './components/ChannelGroups';
import Channels from './components/Channels';
import Campaigns from './components/Campaigns';

function App() {
  const [getChannelGroups, setGetChannelsGroup] = useState<boolean>(false);
  const [getChannels, setGetChannels] = useState<boolean>(false);
  const [getCampaigns, setGetCampaigns] = useState<boolean>(false);

  return (
    <div className="App">
      <button onClick={() => setGetChannels(true)}>Get channels</button>
      <button onClick={() => setGetChannelsGroup(true)}>Get channel groups</button>
      <button onClick={() => setGetCampaigns(true)}>Get campaigns</button>

      {getChannels ? <Channels></Channels> : null}
      {getChannelGroups ? <ChannelGroups></ChannelGroups> : null}
      {getCampaigns ? <Campaigns></Campaigns> : null}
    </div>
  );
}
export default App;
