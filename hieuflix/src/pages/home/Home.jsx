import React,{useState, useEffect} from 'react'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
import './home.scss'
import axios from 'axios'

const baseURL='http://localhost:7000/api/';

const Home = ({type,user}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
          try {
            const res = await axios.get(baseURL+
              `lists${type ? "?type=" + type : ""}${
                genre ? "&genre=" + genre : ""
              }`,
              {
                headers: {
                  token:
                  "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                  // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWJkZGQxZWM1OTM4NzhjOThlZjA4NiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDI5NDgxMzIsImV4cCI6MTY0MzQ2NjUzMn0.cxY9B8r4EJ4lJgs2Mg9wRl9egHBEUGme9qytYX5IYz8",

                },
              }
            );
            console.log(res.data);
            setLists(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getRandomLists();
      }, [type, genre]);
    return (
        <div className="home">
            <Navbar user={user}/>
            <Featured type={type} setGenre={setGenre}/>
            {
                lists.map(list=>(
                    <List list={list}/>
                ))
            }


           
        </div>

    )
}

export default Home

