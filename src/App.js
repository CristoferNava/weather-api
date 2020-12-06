import {Fragment, useEffect, useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  const [search, setSearch] = useState({
    city: '',
    country: '',
  });

  const [consumeAPI, setConsumeAPI] = useState(false);

  const {city, country} = search;

  useEffect(() => {
    const requestAPI = async () => {
      const apiKey = 'aa823e56c1fd861127c27fb42b0cc997';
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

      const request = await fetch(url);
      const response = await request.json();

      console.log(response);
    };
    
    if (consumeAPI) {
      requestAPI();
    }
  }, [consumeAPI]);

  return (
    <Fragment>
      <Header 
        title={'Clima React'}
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form 
                search={search}
                setSearch={setSearch}
                setConsumeAPI={setConsumeAPI}
              />
            </div>
            
            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;