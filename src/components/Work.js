import React, { useState } from "react";
import Modal from 'react-modal';
Modal.setAppElement("#root");

function Work({openModal}) {
  const [contents, setContents] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [view, setView] = useState(null);
  
  return (
    <div className="work">
      <ul>
        <li onClick={() => openModal('work')}>
          <a className="work-sec1">
            <span>work</span>
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/" className="work-sec2">
            <span>serious study</span>
          </a>
        </li>
        <li>
          <a className="work-sec3" href="mailto:hshehehe1128@gmail.com">
            <span>contect</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Work;