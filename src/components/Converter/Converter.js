import { useState } from "react";
import romanConverter from "../../helpers/romanConverter";

export const Converter = () => {
  const [num, setNum] = useState(0);
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const romanConverterHandler = (e) => {
    e.preventDefault(e);
    try {
      setResult(romanConverter(num));
      setErrorMessage("");
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return (
    <form>
      <span>{errorMessage}</span>
      <input
        type="number"
        placeholder="Enter a number"
        onChange={(e) => setNum(e.target.value)}
        value={num}
      />
      <span className="input-border"></span>
      <button type="submit" onClick={romanConverterHandler}>
        Convert
      </button>
      <p>{result}</p>
    </form>
  );
};
