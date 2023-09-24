import './App.css';
import apiRequestHandler from '../src/lib/apiRequestHandler';
import { useState } from 'react';

function App() {
  const [channelData, setChannelData] = useState();

  const displayChannelsData = async () => {
    const graphqlQuery = `{
          channel
        }`;

    const retrieveChannels = await apiRequestHandler(graphqlQuery);

    //Returns unique values from given array
    function getUniqueValues(value: string, index: number, array: string[]) {
      return array.indexOf(value) === index;
    }

    //Returns all possible values within the channels array
    const possibleValues = retrieveChannels.channel.filter(getUniqueValues);

    //Map through the possible values and count how many times they occur within the original array
    const printChannelsData = possibleValues.map((currentChannel: string, i: number) => {
      let counter = 0;
      for (const channelToFilterOf of retrieveChannels.channel) {
        if (channelToFilterOf === currentChannel) {
          counter++;
        }
      }

      return (
        <tr key={i}>
          <td>{currentChannel}</td>
          <td>{counter}</td>
        </tr>
      );
    });

    setChannelData(printChannelsData);
  };
  const getChannegroups = async () => {
    const graphqlQuery = `{
      channelGroup
        }`;

    const data = await apiRequestHandler(graphqlQuery);
    console.log('data', data);
  };
  const getCampaigns = async () => {
    const graphqlQuery = `{
          campaign
        }`;

    const data = await apiRequestHandler(graphqlQuery);
    console.log('data', data);
  };

  return (
    <div className="App">
      <button onClick={displayChannelsData}>Get channels</button>
      <button onClick={getChannegroups}>Get channel groups</button>
      <button onClick={getCampaigns}>Get campaigns</button>

      <table>
        <thead>
          <tr>
            <th>Channel</th>
            <th>Number of orders</th>
          </tr>
        </thead>
        <tbody>{channelData}</tbody>
      </table>
    </div>
  );
}
export default App;
