import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link,useLocation } from "react-router-dom";
import "./user.css";

export default function User() {
  const location = useLocation();
	const user = location.user;


  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              // src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              src={user.avatar || "data:image/jpeg;base64,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"}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user._id}</span>
              <span className="userShowUserTitle">{user.username}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">{user.email}</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+84912368127</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Ha Noi</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={user.username}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={user.email}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+84912368127"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Ha Noi"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  // src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  src={user.avatar || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRgVFBYYGRgaGhgYGBoaHRwYHBwaGBgZGhocGBwcIS4mHSErIRgaJzgnKy80NTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISHzQkJCs1ODQ0NDQ0NDQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOAA4AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EAEgQAAIBAgMEBgUJBQUIAwAAAAECAAMRBBIhBTFBURMiMmFxgQZSkaGxQlRicpKTwdHSI4KisvAHFDNTwkNjdIO0w+HxFSRz/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIBAwT/xAAhEQEBAAIDAAIDAQEAAAAAAAAAAQIREiExQVEDMmETIv/aAAwDAQACEQMRAD8A+uxEQoiIgIiICIiAiJoxGMpp23APLefYNY2N8SoqbZ9RCe9jlHs1MjPtGuflKv1Vv7yYkt8jOnQROZarUO+o/kcvwEwOb13+235yuORyjqYnLDN67/bb85sWtUG6o/mQ3xEccjlHSxKBNo114o3itj7QfwkmntkfLRh3r1x+Bk2Wew6W0TRh8Wj9hge7iPEb5vjbSIiAiIgIiICIiAiIgIiICInjMACSbAaknhA9kTF7QppoTduCrqfPkPGV+L2oz9Wn1V4vxP1Bw8ZBRAN3meJ8TxlY42stkSK+OqvxyLyXf5t+VpGRANw/PzMzidMcZEXK0iIlsIiICIiAiIgYMgOtteB3EeBkrD7QqpoTnXk2jeTcfOaIkZYytmVi+wmOp1OybNxU6MPLj4iSZyrIDY7iNxGhHgZY4PapXq1dRwf9Y/GcssbiuWVcxAN90TGkREBERAREQERPHYAEk2AFyeQEDGrUVFLMbAbzOfxeKaqddEHZXn3v+UYvFGq19yDsLz+kfwmqXjjvupyy11CexE7IIiICIiAieGR6uOop26iL4uo+JkiTPJCG2MKf9vS+2n5zXidpKwCYd0d20BUh1QcXex3DgOJ08MuUk22Y2sKmStXCuualSPXHBqhG7Tiim/i44iXOM2JWo9agzVaY30nIzgf7uoe19V7k+twlStFaaIi36zolzqSalRVLE8SS159AnCZ2210ykkkcZh66uLrffYgghlI3qynVSOR1m2WG3NlEnp6I/agdZRoKqj5J+mB2W8jpKrD1ldQ67j5EcCCDuIIII4Tvjltzs02zwz2JbG7BYxqWmpTiN5XvXu7pfo4YBlNwdQROZm7BYs0jr2Cdfon1h3cxOOWOu54vHLfVdFEA31ESFEREBERASj2ris7dGvZU9c829XwHGWG08VkTq9tuqnjz8hrKJFsLf0e+VjjyrLdRlERO7mg1Np0kYqxYZTlLZHyZsqsRnAyjRhvPGSaNdHF0dWHNSG+EYemVwVKrweo7se6s7ZPiiyHW2fRc3ZEv61rN9oazhfy2Xx0mEsWM8ZgBcmwG8nQDxnJ7f2nh8Gv+LWznVaa1GcnvIcsFXvPlNPoi9bFo2IxLl0zFaSHLlAU6swVQHNxYEjgY/wBprw/zqVtv03wuHOVQ1R7XAUWWx3HMdCPq3nH4n05x+IdadALTLsFUIAzEk2ALPf2gCU3pZijUxlduTsg7gnU/0y3/ALNsCHxLVCLimhI+u5yg+zPOd/JlXWYYybdftTCLh8G71CatRaZu9Ql7udAQrGyi53AT5AEvoBc8OJJM+0+mOFapg6yqCWyhgBvORgxHsBnzf0I2aa+KQ2ulMio54dXsjza3sMjap1H0z0c2KmGoLTAGc2Z2t2nI18huHhLVUA3ADwAEyiSlGxptkY7krUGbuVKyMx8gCfKdrjMalJbsfAc5yLKCCCLg6EHiDvBmGJps5XM5ORQq31tbj420udd8qZaibNus2fjxU3gKfki9yQN5ModtYXoKwqrpTrMFccFqnRW7g+in6VvWMx2RX6Jszm4sR1Rv9p/Eyx2jj6Fam1NlYq6lTuBHIg30INiDzAl45a7RcVdEhbPxRYFH0qIAHHrDg6/Ra3kbjhJs9Mss3EWaJ5PYlMTtkYnKeiY6fIPxX8RLmcs633Gx3g8iNxnQbPxXSIG+UNGHJhvnnyx410l3EmIiY0iJG2jiMlNmG+1l+s2g+MClxtfPULfJXqL5do+Z08prmKJYAcplO2E1NOeV3Sa6zWVjyBPumyYutwRzBE1i62RhlbBUabi6tQpqw5g0xecvjaFek/QBgx3irp1UO7Ovr8BwNs2m6X2yNoqmCw5JuxpIoHElVCnyBEq3YszMd7G5PM/+rDwE8uTti+EbQp1GxDq2dqhqMtjq5bMQB38J9m2Dgegw9Kkd6IA31jq3vJkn+50s/SZEz7s+Vc/2rXm+c3S3b4j6UYYpi66njUdx4Oc4/mnZf2W0bJXe290UfuqT/qEvPST0Vo4sq7MUdRbOoBuvJgd/cZY7G2XTw1JaVO9hcknezHexmlvSfNOHw1NL5EVLm5yqFueZtvm6JiSIiAiIgIiIETHUWNnT/ETVOAYHtI3cw9hseEm4aurorruYX7xzB7wbg94M8RSSABcnQCYnBth6ppk9WopqryDAgVFHmVbxdp3/AA5d6RnEiIielyJv2bWyVAPkv1T9Ydk/EeyaJhUW4sN/DxG6RljuNxuq6qJowdfOitzGvjx995vnGOhKbbdS7InK7ny0X4n2S5nO4981Zzyyp7Bc+9psm7Iy+NURE9DmTXWqhFZ23KCT5cpskHHtmdKfMl2+qlrfxlPYZGV1Ntk3dNWzMO6IA5JYlmtvCB3Zwi9y5yO+TIieOu5ERMCIiB4TMsPRqVNadNmX1jZF8ixuR3gETbgaNNr1a5ApI2VVO56g36b2A3BeJvpoJOrekDH/AAqWnrVGyeYUAn22MuYz5Zb9IbbLxS6mmrdyuCf4go98rqGOpu70wwzobOhPXU8iPx3S2G1sUx0NPwCMfi85av8A2ePUxLYrpKiu1TpDkyIMxIJte5AP4zLJ8E/q8iTf/ia3q+8fnNibGqnflHifymapuK6bcNhnc2QX5ngPEy7w+xEGrEt3DQSyp01UWUADkJUx+2XL6UOwqLv+0WypeysRdnANiyg6KhtodSwsdJl6WU7JSq/5dVAfq1b0iD3XdT+6JLfZCuxaq7uL9RMxWmq8BkUgMe9r91hpIvpHhKaYOvlGUBM9he10IcEA6A3WdJ0n1XxET0uZPJ7ECy2FU0dORDDwf/yD7Zayg2W+WsPpKw8xYj8ZfzzWatjr8E5ctdnbm7n+K34TqROSoHq35kn3mVh+ycvG2Iid0ErKJzV6repkpDyXpCR94B+7LOVOyTdC5+XUqt5F2C/whZx/Nf8AnS8J2nzfgMBUr6g5aYJGe12YjQhAdLX+UeWgO+RKtjZS2UMwUte2Vd7m/CyhjJ9TGVKikUv2VBF7XZOVRvZj/hrYbh1rcRunnxk+XSptbZ+BpAdKwuf8xySfBSfgJxfpk9cNSbZYY2ziqpDZT2ch/aWFtG7OuonT7P2SHXpKbLZtb5XBbvJYAtfnxkXDYGvXZ+iZFpo7U87KXLsjFXyqGWyhgVuTqQdLayru/DJ13tW0cbUSgr4hAj266qwyg33l2IAFrHf3axgdqCoepkbnkqK5HeRYT3amysTSro1RBXSwyuiNam1nzFkzMQx6gD8rjTjNwGw3xLZ6l1pgqyNYrUOmuUnVQfW4gkW4xMenaY48eVrSDTQgO4vqEDsAQGJJCDTeTqd543ljhcE9Q9UacWO7/wAy3p+juCUFf7vSObtFkVmbS12ZgSx7zKnAYylg6mJptUCYZEpVKedtKZqNUVkW+uUlAVXvIGlo4/bjy+l0KSUKZa9iBqxFyTwAA33NgAN8kYKpVZb1ECMCQQDcacQeRHs75V7PFXEuteqrJSXWhSYWZj/m1R8k27KcLknUgLfyomkRE1hERASm9LG/+pWHrLkHi7Kg97CXM530sqgijR41KqsRySj+0J8My0x+9AhRET0oIiIGWHa1SmfpgfaBH4zpZy1+sn10/mE6mcMv2dMfHonJ0B1bd5HsJnVicvlszjk7j+In8Yw/ZmXj2Iid0AkPYeCqNQplVJBB1FvWIPvvJkneiNS1OpR406r/AGah6VSO79oV/dM4/lx3IrG6MPsMtbpbWuDl3nTUa7hLk4WmVKZRlIsV4Ed8kROcxkVbapcRRxNElsOFqITc0XYpludTSexsPoEW5FRKfYe1jhS2HxaGhmqVXos7KVZajtUyZ1OXOpZha9yADOymqtSV1KsoZTvDAEHxBg21nEIymzDUGx8RIuD2jT6NSTawysPVZdGB8CJCX0Z2axbLhqFwbMFQKQe8C1pupei2z1NxhaN99yik356iOzpCxXpF0hNPCqa1TUEIeqp/3tTsoNd2rcgZt2Z6NUkcV66rVxBOY1CDZTawWkrE5AAbA7zrffLu6U1+SiqO5VA+AnmGxKVFzKbrwaxAPet947xpGjf0kRETWEREBERA11XCgsSAACSTuAGpJnBvXqVcQmKfSnVV6WHQizBEs/SH/wDSzG3qhJ120cB09kc/sgQWQf7QjUK59S+9RvtqbXBofSShVWqmJY2pUz0IT1Vq5R0p784RbcFJM3H2N+HsRE9DmREQMSOsn10/mE6mc1QW9SmPpg+wE/hOlnDL9nTHwnO45MtZxzyuPMW+KmdFKbbaWdH5gof5l/GZLqyl8QYiJ6HMmgVmoVRiEBYWyVUAuWp3JDKOLKSSBxBYbyJviTZuaJdOowuJSoqujBkYXVgbgib5wxwrKxehVeizG7ZMpVjzdHBUnvAB75lg8Xi2qPTq45UsqMp6OkhYEsGPWDA2IG7mOYnK42Lmq7eJz+FXFHsYulVHHMit76bLb2S0pVqoHXQX5obg+R1ElumraGykqkN1kcCwqISjAcrqQSO46StfY+L3DG1wP+R8TRvLOvtNE3g35XVf5iJobbdtegqkdxpn/uTOjtow/o5SzBqzPWYag1GL2PMA9UeQEvQJSnb54YbEHypj41J5T2xXbsYR/wB96ajzylreyOjVXkSmL7QbcuHp/WZ61vIBL+2Bs3EtbpcU/etFFpKfNs7jyYTRa1KiqLsQBxJIA9pkdcejdi796C6/aPV9810dkUFIbJmYbmqFqjDwZySPKWFoY0oXO8BRyvc/kPfN0RASp9IqLVcPXo0wDUek4RW0BJBA18be6W0rNsVejCVeCOqt9SoQhv3AsrfuwRzGy67PSRnFny2ccnXquPJgwkuVuxcM9EVaNRs7pWq5mtbN0jdLe3/MllO+N3E30nk9nkpiRsxL1l+irN7bKPiZ0EqNhU+2/MhB4Lv9590t55rd210+CRNqUC9NgN46y+K6j8pLiK1yyNcAjjMpsxdDJUZfknrp4E6jyPxE1zvjdzblZqkREoJzHpbtehh6mFbEUhUQO7lSA25CgJB3gZ7+IE6ecd6b7RpUHpGvR6Wm6VEZdLjrIwIvx07pz/JdSqwm8nb+i+1NnY1c+GRAyEBhkCOp36aA27xOieqAyrxa9h3Aak9wuB4kc58/9BzhQlOphEKI76g3zE3yHNcm+48bTtcGc9asx+QUpL3dQVGI8S4+yJwxu15TVWBQHeAfHWQKux8O2uTKd90LUz55CJYxKSraexMOvyS313dx7HYiTqdNVFlUKOQAA9gmyICIiAiIgIiICQdr4XpaFWn6yOo8SpAPtk6IHzn0fxvTq9f/ADGRj3MKFFXHkyt53lvKj0bwop0mQC1q+KH2cTUUe4CW874+RN9pMKj2BP8AV+Ezm7Z9HPUHqp1m8fkj4nymZZahjN1c4GhkRU4ga+J1PvkiInF0IiIEHa2Fzpde2nWXv5r5j8JSIwIuJ1MotqYbI2cdhzr9Fj+B+MrG8ayzcRYiJ3cyVW28KjmkzqrKtQI4YAjLUGQHXdZzTN+QMtZrrUldWRhdWBUjuIsZOU3NNl1drfZWx8hUsFAXsqu4ct2gmOyq+XFYqk2hLpUXvVqai481YfumRNibe6opVic6M1LpDor5VurE7gSLA3t1r2uDNRxP95xNF6KODTLpVqaZct16isDZ+sL3GgsRvNp59aX3fXXRETWEREBERAREQEREBERA4HZHYf8A4jF/9VWk+Qdkdh/+Ixf/AFVaTZ2x/WJvteO1hz5DmeAl9s3C9Glj2j1nPeeHlulfsnC526RuyOx3ni35S7nPLLlVyahERJaREQExqIGBVhcEWImUQObxGHak2U6qew3P6J7/AIzCdFiKCupVhcH+rjkZQYnDvSNm1U9l+fc3I/GXjlrqpyx33GETyezshCOFqDOErFUdsxQpScXIAOroTbTdNtM4pQFXFMoG4ClQAHgAkkRJ4Yt3WrpcZ87f7uj+ieitjPnb/d0f0TZEzhGcq19PjPnT/d0f0R0+M+dP93R/RNkRwhyrX0+M+dP93R/RHT4z50/3dH9E2RHCHKtfT4z50/3dH9EdPjPnT/d0f0TZEcIcq19PjPnT/d0f0R0+M+dP93R/RNkTeEOVa+nxnzp/u6P6I6fGfOn+7o/omyeTOMOVaMFhujTLmLEs7sxtcs7tUY2AAHWY6CTMHhTVa25B2zz+iv4xhMK1U6aIO03PuX850FKmqKFUWA0AkZZb6ni5PmskUAAAWA0A5CexEhRERAREQEREBMaiKwKsAQd4O6ZRAocXs501S7py3svh6w98iI4OonUyDi9mo5zDqP6w4/WHGVMrj/WWSqaJsxGFqJ21uvrLqPMbxNKODuN51mUviLjYyiIlMIiICIiAiIgImLOBvNpuw+Eqv2Vyr6zaexd590i5yetmNrSzgb/68JOwezGfrVLqvBPlH63Id0n4PZ1NNe0/rNv8uXlJk55ZXJckjxEAAAFgNABoBPYiS0iIgIiICIiAiIgIiICIiAkTEbOpPqVs3rL1T7Rvki7cv6vPQTyjRtUVNjuOw4Pc4/1L+Uivg6670v8AVIPuNjOgLHlpPSTbdNlynlZqOZbMO0jj90zA1l7/AGH8p1IJ5T0k2NpvLJnGOUFZeFz4A/lNihz2Uc/un8Z09zbvmOZuUc8jjFAmCrtuS31mA9wuZJp7HY9t/JBb+I/lLYM3KeXblMtyvtb01YfAU01VRf1j1m9pkmYAtyhmPATNN2ziBEBERAREQERED//Z"}

                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
