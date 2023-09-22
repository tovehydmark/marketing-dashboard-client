import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    (async () => {
      try {
        const graphqlQuery = `{
          channel
        }`;

        const response = await fetch('http://localhost:5000/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: graphqlQuery }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('data', data);
      } catch (error) {
        console.error('Error:', error);
      }
    })();
  }, []);

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
