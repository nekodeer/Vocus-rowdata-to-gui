import { useEffect, useRef, useState } from "react";
import TestResult from "./components/TestResult";

function App() {

  const [data, setData] = useState('');
  let testResult = '';
  const [diagnose, setDiagnose] = useState({ asid: '', ontStatus: '', macAddress: '', activePort: '', powerStatus: '', ontSerialNumber: '', customerPlan: '', taggingMode: '', fibreStatus: '', outage: '', linkUp: '' })

  const inputRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    if (data === '' || data.length < 100) {
      alert('Please input the correct data!')
    }
    else {
      if (data !== undefined && data.length > 10) {
        testResult = JSON.parse(data)
      }
      console.log(testResult);
      // if (lfc === 'UFF') {
      if (testResult.type && testResult.type === "ontFullStatus") {
        const { result: { status, lastEvent, ont: { dataPorts } }, product: { dataServices, address: { physicalAddress }, ont: { ontSerialNumber }, service: { customerPlan } } } = testResult;
        const { id, taggingMode, port } = dataServices[0];
        const { linkUp, macAddress } = dataPorts[port - 1]
        console.log(macAddress);
        setDiagnose({ ...diagnose, activePort: port, taggingMode, asid: id, address: physicalAddress, ontSerialNumber, fibreStatus: status, customerPlan, macAddress: macAddress.length===0?'undefined':macAddress[0].macAddress, linkUp, lastEvent, dataPorts })
      }
      // else if (lfc === 'ENP') {
      else if (testResult.userGroup && testResult.userGroup === "RetailServiceProvider") {
        console.log(1);
        const { result: { status, opticalRange, rgwConnected }, product: { dataServices, id, address: { addressName }, ont: { lastEvent, ontSerialNumber }, uni: { linkUp, macAddress, port }, service: { customerPlan } }, testStatus } = testResult;
        const { taggingMode } = dataServices[0];
        setDiagnose({ ...diagnose, asid: id, address: addressName, ontSerialNumber, lastEvent, macAddress: macAddress[0], linkUp, customerPlan, fibreStatus:status, opticalRange, rgwConnected, activePort: port, taggingMode})
      }
      // else if (lfc === 'NPF') {
      else if (testResult.accessProviderName) {
        console.log(1);
        const { userMessage, FaultDiagnosticsPortResult } = testResult
        const activePortInfo = FaultDiagnosticsPortResult.filter((i) => i.portStatus === 'In Service');
        const { portIdent } = activePortInfo[0];
        setDiagnose({ ...diagnose, fibreStatus: userMessage, activePort: portIdent })
        console.log(diagnose);
      }
    }
    setData('');
    inputRef.current.value = '';
  }
  const getInputData = (e) => {
    setDiagnose({ asid: '', ontStatus: '', macAddress: '', activePort: '', powerStatus: '', ontSerialNumber: '', customerPlan: '', taggingMode: '', fibreStatus: '', outage: '', linkUp: '' })
    setData(e.target.value);
  }


  return (
    <div className="container">
      <div className="row bg-gradient">
        <h3>Paste the raw response to the below input box, then click submit button to filter the data</h3>
        </div>
        <hr />
      <div className="row">
        <div className="col">
          <form>
            <textarea  type="text" className="inputArea shadow rounded" onChange={getInputData} ref={inputRef} />
            <br />
            <input type="submit" className="btn btn-outline-secondary" onClick={submitForm} value='Click to show the result!' />
          </form>
        </div>
        <div className="col">
          <TestResult propsData={diagnose} />
        </div>
      </div>
    </div>
  );
}

export default App;
