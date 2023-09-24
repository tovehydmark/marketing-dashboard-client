import { useEffect, useState } from 'react';
import apiRequestHandler from '../lib/apiRequestHandler';
import GetUniqueValues from './GetUniqueValues';

const Channels = () => {
  const [channelData, setChannelData] = useState();
  const [tableHeader, setTableHeader] = useState<string[]>();

  useEffect(() => {
    (async () => {
      const graphqlQuery = `{
      channel
        }`;
      const retrieveChannels = await apiRequestHandler(graphqlQuery);

      setTableHeader(Object.keys(retrieveChannels));

      //Returns all possible values within the channels array
      const possibleValues = retrieveChannels.channel.filter(GetUniqueValues);

      //Counts times values occur within the original array
      const printChannelsData = possibleValues.map((currentChannel: string, i: number) => {
        let counter = 0;
        for (const channel of retrieveChannels.channel) {
          if (channel === currentChannel) {
            counter++;
          }
        }
        return (
          <tr key={i}>
            <td>{currentChannel}:</td>
            <td>{counter}</td>
          </tr>
        );
      });

      setChannelData(printChannelsData);
    })();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>{tableHeader}</th>
            <th> {tableHeader ? 'Number of orders' : null}</th>
          </tr>
        </thead>
        <tbody>{channelData}</tbody>
      </table>
    </>
  );
};
export default Channels;
