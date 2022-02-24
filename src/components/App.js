import { useState } from 'react';
import Owner from './Owner';

const App = () => {

  const [owners, setOwners] = useState([
    {
      id: 1,
      login: "devopsYo"
    },
    {
      id: 2,
      login: "libermant"
    },
    {
      id: 3,
      login: "chanigl"
    }
  ]);

  return (
    <div className="dashboard">
       {
         owners.map(item => 
          <Owner key={item.id} owner={item} />
        )
       }
    </div>
  );
}

export default App;
