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
      <h1>Data dashboard </h1>
      <p>On this page, you can view your marketing statistics based on channels, channel groups and campaigns.</p>
      <section className="btn-layout">
        <button onClick={() => setGetChannels(true)}>Get channels</button>
        <button onClick={() => setGetChannelsGroup(true)}>Get channel groups</button>
        <button onClick={() => setGetCampaigns(true)}>Get campaigns</button>
      </section>

      <section className="tableSection">
        {getChannels ? <Channels></Channels> : null}
        {getChannelGroups ? <ChannelGroups></ChannelGroups> : null}
        {getCampaigns ? <Campaigns></Campaigns> : null}
      </section>
    </div>
  );
}
export default App;
