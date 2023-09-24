import { useEffect, useState } from 'react';
import apiRequestHandler from '../lib/apiRequestHandler';
import GetUniqueValues from './GetUniqueValues';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState();
  const [tableHeader, setTableHeader] = useState<string[]>();

  useEffect(() => {
    (async () => {
      const graphqlQuery = `{
      campaign
        }`;
      const retrieveCampaigns = await apiRequestHandler(graphqlQuery);

      setTableHeader(Object.keys(retrieveCampaigns));

      //Returns all possible values within the campaign array
      const possibleValues = retrieveCampaigns.campaign.filter(GetUniqueValues);

      //Counts times values occur within the original array
      const printCampaigns = possibleValues.map((currentCampaign: string, i: number) => {
        let counter = 0;
        for (const campaign of retrieveCampaigns.campaign) {
          if (campaign === currentCampaign) {
            counter++;
          }
        }
        return (
          <tr key={i}>
            <td>{currentCampaign.length > 0 ? currentCampaign : 'No campaign'}:</td>
            <td>{counter}</td>
          </tr>
        );
      });

      setCampaigns(printCampaigns);
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
        <tbody>{campaigns}</tbody>
      </table>
    </>
  );
};
export default Campaigns;
