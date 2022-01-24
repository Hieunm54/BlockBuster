import React,{useState, useEffect} from "react";
import "./featured.scss";
import { PlayArrow, InfoOutlined } from "@material-ui/icons";
import axios from "axios";
import {Link}  from 'react-router-dom'

const baseURL = "http://localhost:7000/api/";


const Featured = ({ type,setGenre }) => {
  const [content,setContent] = useState([]);

  useEffect(() => {
    const getRandomContent = async ()=>{
      try {
        const res = await axios.get(baseURL+ `movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
							// "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWJkZGQxZWM1OTM4NzhjOThlZjA4NiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDI5NDgxMzIsImV4cCI6MTY0MzQ2NjUzMn0.cxY9B8r4EJ4lJgs2Mg9wRl9egHBEUGme9qytYX5IYz8",

          },
        });
        console.log("res.data[0] ", res.data[0]);
        setContent(res.data[0]);
      } catch (error) {
        console.log(error);
        
      }
    };
    getRandomContent();
  },[type])

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select id="genre" name="genre" onChange={(e)=>setGenre(e.target.value)}>
            <options>Genre</options>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        // src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        src={content.img}
        alt=""

      />

      <div className="info">
        {/* <img
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvXjIey068LGT8sEBj5qFu0gtP_SnV4CR6w&usqp=CAU"
          src={content.thumnail}
          alt=""
        /> */}
        <span className="title">
          {content.title}
        </span>
        <span className="description">
          {content.description}
        </span>
        <div className="buttons">
        <Link to="/watch" state={{movie:content}} >

          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
        </Link>
          {/* <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
