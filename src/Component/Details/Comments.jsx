import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthUserContext } from "../../FireBase/Provider";
import moment from "moment";
import ReadComment from "./ReadComment";

const Comments = () => {
    const {user}=useContext(AuthUserContext)
   
    const [commented,setComments]=useState([])
    
    
    const handleComments=(e)=>{
        e.preventDefault()
        const comments=e.target.comments.value
        
        if (comments.length<5) {
            return toast.error('sorry minimum enter 5 character')
           
        }

        const date=moment().format("dddd, MMMM Do YYYY")
        

        const newComments={user:user,comment:comments,date:date}
        
        setComments([...commented,newComments])
        toast.success('Submit your Comment')
        e.target.reset()
        
    }

  return (
    <div className="">
      {
        commented.length>0 && <div className="">
        <ReadComment commented={commented} ></ReadComment>
      </div>
      }

      <div className="my-12">
        <h4 className="text-xl font-bold text-primary">Comments</h4>
        <form onSubmit={handleComments}>
          <div className="">
            <textarea
              className="textarea textarea-primary w-7/12"
              name="comments"
              placeholder="Write your comment here..."
            ></textarea>
          </div>
          <button className="text-white btn bg-primary hover:bg-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Comments;
