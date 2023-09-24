import { useEffect, useState } from 'react';
import apiRequestHandler from '../lib/apiRequestHandler';
import GetUniqueValues from './GetUniqueValues';

const Channelgroups = () => {
  const [channelGroupsData, setChannelGroupsData] = useState();
  const [tableHeader, setTableHeader] = useState<string[]>();

  useEffect(() => {
    (async () => {
      const graphqlQuery = `{
      channelGroup
        }`;
      const retrieveChannelGroups = await apiRequestHandler(graphqlQuery);

      setTableHeader(Object.keys(retrieveChannelGroups));

      //Returns all possible values within the channelGroups array
      const possibleValues = retrieveChannelGroups.channelGroup.filter(GetUniqueValues);

      //Counts times values occur within the original array
      const printChannelGroupsData = possibleValues.map((currentChannelGroup: string, i: number) => {
        let counter = 0;
        for (const channelGroup of retrieveChannelGroups.channelGroup) {
          if (channelGroup === currentChannelGroup) {
            counter++;
          }
        }
        return (
          <tr key={i}>
            <td>{currentChannelGroup}:</td>
            <td>{counter}</td>
          </tr>
        );
      });

      setChannelGroupsData(printChannelGroupsData);
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
        <tbody>{channelGroupsData}</tbody>
      </table>
    </>
  );
};
export default Channelgroups;
