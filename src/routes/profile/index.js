import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../store/news/actions";
import style from "./style.css";

// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }) => {
  const [time, setTime] = useState(Date.now());
  const [count, setCount] = useState(10);
  const dispatch = useDispatch();
  const newsState = useSelector((state) => state.news);

  console.log(newsState);

  useEffect(() => {
    dispatch(getNews());
    let timer = setInterval(() => setTime(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div class={style.profile}>
      <h1>Profile: {user}</h1>
      <p>This is the user profile for a user named {user}.</p>

      <div>Current time: {new Date(time).toLocaleString()}</div>

      <p>
        <button onClick={() => setCount((count) => count + 1)}>Click Me</button>{" "}
        Clicked {count} times.
      </p>
    </div>
  );
};

export default Profile;
