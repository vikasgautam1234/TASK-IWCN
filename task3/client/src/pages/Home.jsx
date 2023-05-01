import React, {useState } from "react";
import axios from "axios";

const Home = () => {
  let [nuberDetails, setnumberDetails] = useState({
    message :"",
  });
  let [headers , setHeaders] = useState('')
  let [input, setInput] = useState();

  async function submit() {
    try {

    const data = await axios.post(
        "https://chimpu.xyz/api/post.php",
        { phonenumber: input }
      );
      let {msg} = data.data
      let obj = data.headers.toJSON()
      console.log(obj);
      console.log(data);
      setHeaders(obj)
      setnumberDetails({...nuberDetails,message:msg})
      
    } catch (error) {
      console.log(error);
    }
  }

  let onchange = ({ target: { value, name } }) => {
    if (name === "Number") {
      setInput(value);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          borderRadius: "10px",
          padding: "2%",
          marginTop: "3%",
          marginLeft: "20%",
          marginRight: "20%",
        }}
      >
        <input
          onChange={onchange}
          name="Number"
          style={{ minWidth: "80%", minHeight: "70px", padding: "1%", borderRadius:"20px", }}
          placeholder="enter your mobile number ...."
        />
        <button
          style={{ maxHeight: "60px", margin: "2%", width: "10%" ,borderRadius:"20px", backgroundColor:"green"}}
          onClick={() => submit()}
        >
          Search
        </button>
      </div>
      <div>
        <h1>Header Details</h1>
        <h1>Message : {nuberDetails.message}</h1>
        
        <h3>
        {JSON.stringify( headers)}
        </h3>
      </div>
    </div>
  );
};

export default Home;