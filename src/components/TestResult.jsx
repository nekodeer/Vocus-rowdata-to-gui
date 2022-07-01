import React, { useState, useEffect } from 'react'

export default function TestResult(props) {

  const [showNote, setShowNote] = useState(false)

  const diagnose = props.propsData
  console.log(diagnose);

  return (
    <div className='container'>
      <div className='row border shadow rounded'>
        <div className='panel-header'>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-gear me-3" viewBox="0 0 16 16">
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
          </svg> Service Info</span>
        </div>
        <div>
          <div className='row border-top'>
            <div className='col border-end'>
              <span className='label'>Product ID</span>
              <p>{diagnose.asid}</p>
            </div>
            <div className='col'>
              <span className='label'>Address</span>
              <p>{diagnose.address}</p>
            </div>
            <div className='col'>
              <span className='label'>ONT Serial Number</span>
              <p>{diagnose.ontSerialNumber}</p>
            </div>
            <div className='col'>
              <span className='label'>Product</span>
              <p>{diagnose.customerPlan}</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='row border shadow rounded'>
        <div>
          <div className='row panel-header'>
            <div className='col'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-heart-pulse me-3" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Zm8.252-6.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z" />
            </svg> Diagnostics</div>
            <div className='col'>
              <button type='button' className='btn btn-outline-secondary btn-sm' onClick={() => setShowNote(!showNote)}>Show Tips</button>
            </div>
          </div>
          <div className='row border-top panel-header'>
            <div className='col'><span>Test</span></div>
            <div className='col'><span>Status</span></div>
          </div>
          <div className='row border-top'>
            <div>
              <div className='row mt-3'>
                <div className='col'><p>Fibre Network Status</p></div>
                <div className='col'><p>{diagnose.fibreStatus}</p></div>
              </div>
            </div>
            <div>
              <div className='row mt-3'>
                <div className='col'><p>Transmission Quality</p></div>
                <div className='col'><p>{diagnose.opticalRange === undefined ? 'can not detect' : <div><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-check2-circle me-3" viewBox="0 0 16 16">
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>{diagnose.opticalRange}</div>}</p></div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-top'>
          <div className='row panel-header'>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-info-circle me-3" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg> ONT and Circuit Info</span>
          </div>
          <div className='row border-top'>
            <div>
              <div className='row bg-light'>
                <div className='col mt-3'><p><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-ethernet" viewBox="0 0 16 16">
                  <path d="M14 13.5v-7a.5.5 0 0 0-.5-.5H12V4.5a.5.5 0 0 0-.5-.5h-1v-.5A.5.5 0 0 0 10 3H6a.5.5 0 0 0-.5.5V4h-1a.5.5 0 0 0-.5.5V6H2.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5ZM3.75 11h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25Zm2 0h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25Zm1.75.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-1.5ZM9.75 11h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25Zm1.75.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-1.5Z" />
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2ZM1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2Z" />
                </svg> Active port: </p></div>
                <div className='col mt-3'><p>LAN {diagnose.activePort}</p></div>
                <div className='description border-top' style={{ 'display': showNote ? 'block' : 'none' }}>
                  <p className='mt-3'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-exclamation-octagon-fill me-3" viewBox="0 0 16 16">
                    <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg> Note: If the customer's router WAN port is not connected to the Active port but other port, then internet will not connected</p>
                  <p>The LAN light on the fibre box will on if plug into the right port.Eg: if LAN1 is active port and router connect to the LAN1 port, then LAN1 light will on</p>
                  <p>For Tuatahi first Fibre diagnose, if the Connected port in Port Status is different with above Active port, it indicate the customer plug into the incorrect port</p>
                </div>
              </div>
              <div className='row bg-light'>
                <div className='col mt-3'>Ports Status</div>
                {diagnose.dataPorts === undefined ? <div className='col mt-3'>cannot detect</div> : <div className='col mt-3'>{diagnose.dataPorts.map((i) => {
                  return <div key={i.index}>
                    <span className='col'>LAN {i.portName.slice(3)}</span> &nbsp;
                    <span className='col'>{i.status === 'Active' ? i.portName.slice(3) === diagnose.activePort ? 'Connected' : <span>{i.macAddress[0].macAddress}<p className='bg-warning shadow-lg rounded mb-1'> Router Connected But Wrong Port</p></span> : 'Not Connected'}</span>
                  </div>
                })}</div>}
              </div>
            </div>
            <div>
              <div className='row bg-light border-top'>
                <div className='col mt-3'><p>Customer Router's MAC Address: </p></div>
                <div className='col mt-3'><p>{diagnose.macAddress}</p></div>
              </div>
            </div>
            <div>
              <div className='row bg-light'>
                <div className='col'><p>Circuit VLAN tag/untag?: </p></div>
                <div className='col'><p>{diagnose.taggingMode}</p></div>
                <div className='border-top border-bottom description' style={{ 'display': showNote ? 'block' : 'none' }}>
                  <p className='mt-3'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-exclamation-octagon-fill me-3" viewBox="0 0 16 16">
                    <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg> A fibre connection can be set as VLAN tagged or VLAN untag, the VLAN setting on customer's router must be same as the VLAN setting here</p>
                  <p>For Enable/UFF fibre circuit diagnose If you cannot see MAC address but the device is connected to the correct port, then the VLAN tag on the router might set incorrectly</p>
                </div>
              </div>
            </div>
            <div>
              <div className='row'>
                <div className='col mt-3'><p>linkUp? </p></div>
                <div className='col mt-3'><p>{diagnose.linkUp ? diagnose.linkUp === true ? 'Yes' : 'no' : 'not sure'}</p></div>
              </div>
              <div className='row'>
                <div className='col'><p>Router Connected to the correct port? </p></div>
                <div className='col'><p>{diagnose.rgwConnected === undefined ? 'Can not check in UFF/NPF' : diagnose.rgwConnected === true ? 'connected' : 'Not Connected'}</p></div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='panel-header border-top'><span>Fault History</span></div>
            <div className='border-top border-bottom'>
              <div className='row '>
                <div className='col mt-3'><p>Last down time </p></div>
                <div className='col mt-3'><p>{diagnose.lastEvent !== undefined ? diagnose.lastEvent.downTimestamp : 'no record'}</p></div>
              </div>
              <div className='row'>
                <div className='col'><p>Last restored time </p></div>
                <div className='col'><p>{diagnose.lastEvent !== undefined ? diagnose.lastEvent.restoredTimestamp : 'no record'}</p></div>
              </div>
              <div className='row'>
                <div className='col'><p>Last Event Causes </p></div>
                <div className='col'><p>{diagnose.lastEvent !== undefined ? diagnose.lastEvent.cause === 'Dying-gasp' ? 'Power Off' : diagnose.lastEvent.cause : 'no record'}</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
