import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header(cartItems) {
    return <nav classname="navbar row">
            <div classname="col-12 col-md-3">
        <div classname="navbar-brand">
          <Link to="/"><img width="150px" src="/images/logo.png" alt="cart logo" /></Link>
         
        </div>
            </div>

           <div classname="col-12 col-md-6 mt-2 mt-md-0">
                  <Search/>
           </div>

           <div classname="col-12 col-md-3 mt-4 mt-md-0 text-center">
            <Link to={"/cart"}>
             <span id="cart" classname="ml-3">Cart</span>
             <span classname="ml-1" id="cart_count">{cartItems.length}</span>
            </Link>
           </div>
         </nav>
}