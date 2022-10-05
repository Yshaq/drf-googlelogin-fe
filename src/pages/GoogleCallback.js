import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const GoogleCallback = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [ userData, setUserData ] = useState({});
    let code = searchParams.get("code")

    const getTokens = (auth_code) => {
      axios.post('http://localhost:8000/api/google/callback/', {
        "auth_code": auth_code
      })
      .then(function (response) {
        console.log(response);
        setUserData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    useEffect(() => {
      getTokens(code);
    }, [])
  return (
    <div>GoogleCallback
        <br />
        {code}
        <br />
        Please wait, logging you in.....
        <br />
        <br />
        {JSON.stringify(userData, null, "\t")}
    </div>
  )
}

export default GoogleCallback