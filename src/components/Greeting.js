import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [ChangedTest, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!ChangedTest && <Output>It's good to see you</Output>}
      {ChangedTest && <Output>Changed</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
