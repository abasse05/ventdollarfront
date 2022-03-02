import React from 'react'
import Alert from "react-bootstrap/Alert"
import { useState } from 'react'

function Alerts(props) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div className="alerts">
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <p>
            <i class="bi bi-exclamation-triangle-fill me-2" width="24" height="24" role="img" aria-label="Danger:"></i>
            {props.values}
          </p>
        </Alert>
      </div>
    )
  }
  return <p className=""></p>
}

export default Alerts