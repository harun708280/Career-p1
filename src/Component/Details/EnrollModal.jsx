import React, { useContext, useRef } from "react";
import { AuthUserContext } from "../../FireBase/Provider";
import { ModuleContext } from "../../LayOut/LayOut";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EnrollModal = ({loadData}) => {
    const {module,setModule}=useContext(ModuleContext)
    
    const navigate=useNavigate()
    
  const dialogRef = useRef();
  const {user}=useContext(AuthUserContext)
  const {id,image,serviceName,category,description,pricing,duration,counselor,rating,icon}=loadData
  const cost=pricing.split(" ")[0].slice(1)

  

  const handleCancel=()=>{
    dialogRef.current.close()
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    const name=e.target.name.value
    const email=e.target.email.value
    const number=e.target.number.value
    const course=e.target.course.value
    const payment=e.target.payment.value
    const amount=e.target.amount.value
    
    setModule({id,course})
    dialogRef.current.close()
    navigate('/class')
    Swal.fire({
      title: "Payment SuccessFull",
      text: "Done Your EnrollMent!",
      icon: "success",
      customClass: {
        popup: "bg-primary text-white",
        confirmButton: "bg-green-500 text-white hover:bg-green-600",
      },
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      backdrop: true,
    });
    
    
  }

  return (
    <div>
      <dialog ref={dialogRef} id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="">
            <h1 className="text-primary text-4xl text-center font-bold my-7">
              {" "}
              Enroll Now
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered border-primary focus:outline-primary"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={user.email}
                  
                  name="email"
                  placeholder="email"
                  className="input input-bordered border-primary focus:outline-primary"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Number</span>
                </label>
                <input
                  type="text"
                  name="number"
                  placeholder="Phone number"
                  className="input input-bordered border-primary focus:outline-primary"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Course</span>
                </label>
                <input
                  type="text"
                  name="course"
                  value={serviceName}
                  placeholder="email"
                  className="input input-bordered border-primary focus:outline-primary"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Payment</span>
                </label>
                <select
                  name="payment"
                  id=""
                  className="select select-bordered border-primary focus:outline-primary"
                  required
                >
                  <option className="" value="" disabled selected>
                    {" "}
                    Select Payment Method
                  </option>
                  <option value="bkash">Bkash</option>
                  <option value="nagad">Nagad</option>
                  <option value="rocket">Rocket</option>
                  <option value="upay">Upay</option>
                  <option value="bank">Bank</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Amount</span>
                </label>
                <input
                  type="text"
                  value={pricing}
                  name="amount"
                  placeholder="Amount"
                  className="input input-bordered border-primary focus:outline-primary"
                  required
                />
              </div>
            </div>
            <div className="text-center space-x-10 my-7">
                <button type="submit" className="bg-primary py-2 px-5 text-white rounded-lg">ConFirm </button>
                <button type="button" onClick={handleCancel} className="text-white bg-red-600 py-2 px-5 rounded-lg">Cancel</button>
            </div>
          </form>
          
        </div>
      </dialog>
    </div>
  );
};

export default EnrollModal;
