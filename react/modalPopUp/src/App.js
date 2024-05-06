import { useState } from "react";
import { Modal } from "./Modal";
//import "./styles.css";
import "./App.css";


function App() {
  const [isModalActive, setModalActive] = useState(false);

  const handleModal = (isModalActive) => {
    setModalActive(isModalActive);
  };

  return (
    <>
      <button className="open-btn" onClick={() => handleModal(true)}>
        Open modal window
      </button>
      <Modal
        active={isModalActive}
        setClosed={() => handleModal(false)}
        disableGlobalScroll={true}
        children={
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        }
      />
      {[0, 1, 2, 3].map((p) => (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      ))}
    </>
  );
}

export default App;
