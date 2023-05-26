import { useEffect } from "react";


const UseTitle = (pageTitle) => {
     useEffect(()=>{
       document.title=pageTitle;
     },[pageTitle])
};

export default UseTitle;