import Modal from "./Modal/Modal";
import { useState } from "react";

const App = () => {
  const [successPopup, setSuccessPopup] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setSuccessPopup(true);
  };

  return (
    <>
      <button onClick={handleClick}>Show Modal</button>
      <Modal
        trigger={successPopup}
        setTrigger={setSuccessPopup}
        closingMsg="closing message"
        popUpMsg="Your popup message here !"
      />
    </>
  );
};

export default App;
