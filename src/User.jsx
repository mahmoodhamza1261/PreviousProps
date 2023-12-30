import { useEffect, useRef } from "react";

function User(props){
  const useRefHook=useRef();
  useEffect(()=>{
     useRefHook.current=props.count
  })
  let LastVal=useRefHook.current;
  
  return(
    <>
    <h1>Current Counter value {props.count}</h1>
    <h1>Previous Counter value {LastVal}</h1>
    </>
  )

}
export default User;