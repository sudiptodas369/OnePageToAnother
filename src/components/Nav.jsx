
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <div className="mt-10 flex justify-center gap-10">
    <NavLink style={(e)=>{
        return {
            color: e.isActive ? "#F87171" : " ",
            fontWeight: e.isActive ? "bold" : " ",
        };
    }

    }to="/">Home</NavLink>
    <NavLink to="/user">
    {(e)=>{
        return(
            <span className={[
                    e.isActive ? "text-red-400" : " ",
                    e.isActive ? "font-bold" : ""
                ].join(" ")
            }>
                User
            </span>
        );
    }}
    </NavLink>
    <NavLink className={(e)=>{
        return [
            e.isActive ? "text-red-400" : " ",
            e.isActive ? "font-bold" : ""
        ].join(" ");
    }}

    to="/about">About</NavLink>
    </div></>
    
  )
}

export default Nav