import "./listList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState,useContext, useEffect } from "react";
import {ListContext} from "../../context/listContext/ListContext";
import {deleteMovie, getMovies} from '../../context/movieContext/apiCalls';
import { getLists,deleteList}  from "../../context/listContext/apiCalls";

export default function ListList() {
  // const [data, setData] = useState(productRows);
  const {lists, dispatch} = useContext(ListContext);

  useEffect(()=>{
    getLists(dispatch);
  },[dispatch])

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };

  // console.log(movies);

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "title", width: 250 },
    { field: "genre", headerName: "Genre", width: 250 },
    { field: "type", headerName: "Type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{pathname:"/list/" + params.row._id, list: params.row}}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="productTitleContainer">
				<h1 className="productTitle">List of movie lists</h1>
				<Link to="/newlist">
					<button className="productAddButton">Create</button>
				</Link>
			</div>
      <DataGrid
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={r=>r._id}
      />
    </div>
  );
}
