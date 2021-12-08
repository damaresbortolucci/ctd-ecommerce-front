import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BGNotFound from '../../assets/img/404.jpg'
import './style.scss';

function NotFound() {

  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {

    const tick = () => {
         setSeconds(seconds - 1);
     }
     
    let timer = setInterval(tick, 1000);
    return () => {
      if (seconds === 0) {
        clearInterval(timer);
        navigate("/home")
      }
    };
  }, [seconds, navigate])

  return (
    <div className="container d-flex flex-row">
      <img className="bg404" src={BGNotFound} alt="404 reference" />
    </div>
  )
}

export default NotFound;