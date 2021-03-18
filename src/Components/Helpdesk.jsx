import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function Helpdesk() {
  return (
    <>
      <div>
        <img
          src="https://www.badgemaster.co.uk/wp/wp-content/uploads/2019/07/Help-Button-Badges-1024x700.jpg"
          alt="Happy to help"
        />
      </div>
      <Collapse accordion>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </>
  );
}

export default Helpdesk;
