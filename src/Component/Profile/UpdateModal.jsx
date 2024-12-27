import React, { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { ReactTyped } from "react-typed";
import { AuthUserContext } from "../../FireBase/Provider";
import Swal from "sweetalert2";

const UpdateModal = () => {
  const { update, setIsLoading } = useContext(AuthUserContext);
  const [error, setError] = useState({
    name: "",
    photo: "",
  });
  const dialogRef = useRef(null);

  const handleCancel = () => {
    dialogRef.current.close();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    setError({
      name: "",
      photo: "",
    });

    if (!name) {
      toast.error("Invalid Name");
      setError((prev) => ({
        ...prev,
        name: "Invalid name",
      }));
      return;
    }

    if (!photo) {
      toast.error("Invalid Photo");
      setError((prev) => ({
        ...prev,
        photo: "Invalid Photo",
      }));
      return;
    }

    update(name, photo)
      .then(() => {
        setIsLoading(false);
        Swal.fire({
          title: "Good job!",
          text: "Successfully Your Profile Update!",
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
      })
      .catch(() => {
        toast.error("Something went wrong");
      });

    dialogRef.current.close();
  };

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      ></button>
      <dialog ref={dialogRef} id="my_modal_4" className="modal">
        <div className="modal-box w-full sm:w-8/12 lg:w-5/12 max-w-5xl">
          <div className="text-center my-3">
            <ReactTyped
              strings={["Update Profile"]}
              cursorChar=""
              className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-primary"
              typeSpeed={50}
            ></ReactTyped>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered border-primary focus:outline-primary w-full"
              />
              {error.name && <p className="text-red-600 text-sm">{error.name}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered border-primary focus:outline-primary w-full"
              />
              {error.photo && (
                <p className="text-red-600 text-sm">{error.photo}</p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row justify-center my-10 space-x-0 sm:space-x-6 space-y-4 sm:space-y-0">
              <button
                type="submit"
                className="bg-primary py-2 px-5 rounded-lg text-white w-full sm:w-auto"
              >
                Update
              </button>
              <button
                onClick={handleCancel}
                type="button"
                className="bg-red-600 py-2 px-5 rounded-lg text-white w-full sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateModal;
