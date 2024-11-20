import React, { useEffect, useRef, useState } from "react";
import Input from "./component/Input";
import Button from "./component/Button";

function App() {
  const [cha, setCha] = useState(false);
  const [num, setNum] = useState(false);
  const [len, setLen] = useState(10);
  const [pass, setPass] = useState("");
  const ref = useRef(null)

  const handleCopy = ()=>{
    ref.current?.select();
    navigator.clipboard.writeText(pass)
  }

  const convert = () => {
    let str = "";
    let pass = "";

    if (num || cha) {
      if (num) str += "1234567890";
      if (cha) str += "abcdefghijklmnopqrstuvwxyz";

      for (let i = 0; i < len; i++) {
        pass += str.charAt(Math.floor(Math.random() * str.length));
        setPass(pass);
      }
    }
  };

  useEffect(() => {
    convert();
  }, [cha, num, len]);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center space-y-6 p-8">
      <h1 className="text-4xl font-bold text-white mb-6">Password Generator</h1>

      <div className="w-full max-w-sm">
        <Input
          type="text"
          value={pass}
          setValue={setPass}
          placeholder="Generated Password"
          label="Generated Password"
          className="w-full text-center px-4 py-2 bg-gray-800 border border-gray-600 text-white rounded-lg shadow-md"
          readOnly
          ref = {ref}
        />
        <Button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700" onClick = {handleCopy}>Copy</Button>
      </div>

      <div className="w-full max-w-sm">
        <Input
          type="range"
          value={len}
          setValue={setLen}
          min={8}
          max={20}
          label={`Password Length: ${len}`}
          className="w-full"
        />
      </div>

      <div className="w-full max-w-sm flex flex-col items-start space-y-4">
        <div className="flex items-center space-x-4">
          <Input
            type="checkbox"
            value={cha}
            setValue={setCha}
            label="Include Characters"
            className="w-5 h-5"
          />
          <Input
            type="checkbox"
            value={num}
            setValue={setNum}
            label="Include Numbers"
            className="w-5 h-5"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
