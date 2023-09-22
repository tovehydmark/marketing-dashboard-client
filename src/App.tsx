import './App.css';
import apiRequestHandler from '../src/lib/apiRequestHandler';

function App() {
  const getChannels = async () => {
    const graphqlQuery = `{
          channel
        }`;

    const data = await apiRequestHandler(graphqlQuery);
    console.log('data', data);
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
      <button onClick={getChannels}>Get channels</button>
      <button onClick={getChannegroups}>Get channel groups</button>
      <button onClick={getCampaigns}>Get campaigns</button>
    </div>
  );
}
export default App;
