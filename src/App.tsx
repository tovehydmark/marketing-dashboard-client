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
        <button onClick={() => setGetChannels(!getChannels)}> {getChannels ? 'Close channels' : 'Get channels'}</button>
        <button onClick={() => setGetChannelsGroup(!getChannelGroups)}>
          {getChannelGroups ? 'Close channel groups' : 'Get channel groups'}
        </button>
        <button onClick={() => setGetCampaigns(!getCampaigns)}>
          {getCampaigns ? 'Close campaigns' : 'Get campaigns'}
        </button>
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
