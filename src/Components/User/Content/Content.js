import React, { useState } from "react";
import "./Content.scss";
import GroupInforUser from "./GroupInforUser/GroupInforUser";
import FormRegister from "./FormRegister/FormRegister";

const Content = () => {
  const [showFormRegister, setShowFormRegister] = useState(false);

  return (
    <div className="content-container">
      <div className="content-wrapper">
        <div className="container">
          <div className="content">
            <GroupInforUser />
          </div>
        </div>

        <div className="fixed-buttons">
          <div className="btn-image">
            <div className="btn-dk">
              <button onClick={() => setShowFormRegister(true)}>
                <img src="/images/btn-dk.png" alt="" />
              </button>
            </div>

            <div className="btn-phone">
              <a href="tel:1900123456">
                <button>
                  <img src="/images/btn-phone.png" alt="" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <FormRegister show={showFormRegister} setShow={setShowFormRegister} />
    </div>
  );
};

export default Content;
