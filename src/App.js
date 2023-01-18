import { useState } from "react";

const App = () => {
  const [name, setName] = useState();
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return(
    <div>
      {name ? `O meu nome é ${name}.` : `Eu estou Anonimo!`}
      <hr/>
      <input type="text" value={name} onChange={handleChange}/>
    </div>
  )
};

export default App;
