import React, { useState } from 'react';
import '../css/form.scss';

const Form = (props: any) => {
  const [input, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  /**
   * getExample gets example json.
   */
  const getExample = async () => {
    try {
      setInput('');
      setErrorMessage('');
      setLoading(true);
      const response: Response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data: any = await response.json();
      setInput(JSON.stringify(data));
    } catch (error) {
      setErrorMessage('Sorry, something went wrong :(');
      throw new Error(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1300);
    }
  };

  /**
   * Function for submiting the json to be pretified.
   */
  const submitJson = () => {
    setErrorMessage('');

    try {
      const data = JSON.parse(input);
      props.setData(data);
    } catch (error) {
      console.error(error);
      setErrorMessage('Invalid input!');
    }
    setInput('');
  };

  return (
    <div id="form" className="form">
      <textarea
        id="json-input"
        className="form__textarea"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <div style={{ width: '80%', display: 'flex', justifyContent: 'space-around' }}>
        <button className="form__button" onClick={submitJson}>Make JSON Pretty!</button>
        <button className="form__button example" onClick={getExample}>Try Example!</button>
      </div>
      { errorMessage ? <div style={{ color: 'red', marginTop: '20px' }}>{errorMessage}</div> : null }
      { loading ? (
        <div className="form__loader">
          <img src="https://i.pinimg.com/originals/a4/f2/cb/a4f2cb80ff2ae2772e80bf30e9d78d4c.gif" alt="loader" />
        </div>
      ) : null }
    </div>

  );
};

export default Form;
