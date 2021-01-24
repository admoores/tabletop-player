import * as React from 'react';
import axios from 'axios';
import {useState} from 'react';

const Page1 = (): JSX.Element => {

  const [stringValue,setStringValue] = useState<string>("");

  function submitValue() : void {
    axios.post('/v1/list', {value:stringValue});
    console.log("submitting")
  }

  function handleChange(e:Event) : void {
    setStringValue(e.target.value);
  }

  return (
    <>
      <h2>THIS IS PAGE 1</h2>
      <form name="updateList" id="updateList" onSubmit={submitValue} >
              <input type="text" value={stringValue} onChange={handleChange} />
              <button type="submit">Submit!</button>
      </form>
    </>
  )
};

export default Page1;
