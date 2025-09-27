import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
export default function Search(){
    const [keyword,setKeyword] = useState("");
    const navigate= useNavigate();

    const searchHandler= ()=> {
        navigate('/search?keyword='+keyword)
    }

    return <div classname="input-group">
            <input
              type="text"
            id="search_field"
            onChange={(e)=>setKeyword(e.target.value)}
            classname="form-control"
            onBlur={searchHandler}
            placeholder="Enter Product Name ..."
          />
            <div classname="input-group-append">
            <button onClick={searchHandler} id="search_btn" classname="btn">
              <i classname="fa fa-search" aria-hidden="true"></i>
            </button>
            </div>
        </div>
}