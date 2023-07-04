import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProfile } from "../../store/actions/userAction";

export default function ProfileUser() {
  const { profile } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4 grid grid-cols-2 gap-6">
            <div className="flex items-center">
              <img src="{profile.profilePicture}" alt="" />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Your Profile</h3>
              <h4 className="text-gray-700">Name:{profile?.email}</h4>
              <h4 className="text-gray-700">email:{profile?.email}</h4>
              <h4 className="text-gray-700">gender:{profile?.gender}</h4>
              <h4 className="text-gray-700">
                taggaallahir :{profile?.birthDate}
              </h4>
              <h4 className="text-gray-700">province :{profile?.province}</h4>
              <h4 className="text-gray-700">city : {profile?.city}</h4>
              <h4 className="text-gray-700">no.HP : {profile?.phoneNumber}</h4>
              <Link
                to={"/profile/edit"}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-36"
              >
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>

    // <section className="pt-16 bg-blueGray-50">
    //   <div className="w-full lg:w-4/12 px-4 mx-auto">
    //     <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
    //       <div className="px-6">
    //         <div className="flex flex-wrap justify-center">
    //           <div className="w-full px-4 flex justify-center">
    //             <div className="relative">
    //               <img
    //                 alt="..."
    //                 src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
    //                 className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
    //               />
    //             </div>
    //           </div>
    //           <div className="w-full px-4 text-center mt-20">
    //             <div className="flex justify-center py-4 lg:pt-4 pt-8">
    //               <div className="mr-4 p-3 text-center">
    //                 <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
    //                   22
    //                 </span>
    //                 <span className="text-sm text-blueGray-400">Friends</span>
    //               </div>
    //               <div className="mr-4 p-3 text-center">
    //                 <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
    //                   10
    //                 </span>
    //                 <span className="text-sm text-blueGray-400">Photos</span>
    //               </div>
    //               <div className="lg:mr-4 p-3 text-center">
    //                 <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
    //                   89
    //                 </span>
    //                 <span className="text-sm text-blueGray-400">Comments</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="text-center mt-12">
    //           <h3 className="text-xl font-semibold leading-normal  text-blueGray-700 mb-2">
    //             Jenna Stones
    //           </h3>
    //           <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
    //             <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
    //             Los Angeles, California
    //           </div>
    //           <div className="mb-2 text-blueGray-600 mt-10">
    //             <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
    //             Solution Manager - Creative Tim Officer
    //           </div>
    //           <div className="mb-2 text-blueGray-600">
    //             <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
    //             University of Computer Science
    //           </div>
    //         </div>
    //         <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
    //           <div className="flex flex-wrap justify-center">
    //             <div className="w-full lg:w-9/12 px-4">
    //               <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
    //                 An artist of considerable range, Jenna the name taken by
    //                 Melbourne-raised, Brooklyn-based Nick Murphy writes,
    //                 performs and records all of his own music, giving it a warm,
    //                 intimate feel with a solid groove structure. An artist of
    //                 considerable range.
    //               </p>
    //               <a
    //                 href="javascript:void(0);"
    //                 className="font-normal text-pink-500"
    //               >
    //                 Show more
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <footer className="relative  pt-8 pb-6 mt-8">
    //     <div className="container mx-auto px-4">
    //       <div className="flex flex-wrap items-center md:justify-between justify-center">
    //         <div className="w-full md:w-6/12 px-4 mx-auto text-center">
    //           <div className="text-sm text-blueGray-500 font-semibold py-1">
    //             Made with{" "}
    //             <a
    //               href="https://www.creative-tim.com/product/notus-js"
    //               className="text-blueGray-500 hover:text-gray-800"
    //               target="_blank"
    //             >
    //               Notus JS
    //             </a>{" "}
    //             by{" "}
    //             <a
    //               href="https://www.creative-tim.com"
    //               className="text-blueGray-500 hover:text-blueGray-800"
    //               target="_blank"
    //             >
    //               {" "}
    //               Creative Tim
    //             </a>
    //             .
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </section>

    // <div className="bg-gray-100">
    //   <div className="max-w-screen-xl mx-auto flex justify-between items-center h-screen">
    //     <div className="w-3/6">
    //       <div className="my-5">
    //         <h2 className="font-bold text-lg">Name</h2>
    //         <p>Name</p>
    //       </div>
    //       <div className="my-5">
    //         <h2 className="font-bold text-lg">Person Job Preference</h2>
    //         <p>Job</p>
    //       </div>
    //       <div className="my-5">
    //         <h2 className="font-bold text-lg">Gender</h2>
    //         <p>Gender</p>
    //       </div>
    //       <div className="my-5">
    //         <h2 className="font-bold text-lg">Birth Date</h2>
    //         <p>Birth Date</p>
    //       </div>
    //       <div className="my-5">
    //         <h2 className="font-bold text-lg">Contact Person</h2>
    //         <p>Email: email</p>
    //         <p>Phone Number: number</p>
    //       </div>
    //       <div className="my-5">
    //         <h2 className="font-bold text-lg">Location</h2>
    //         <p>Location</p>
    //       </div>
    //       <div className="my-5">
    //         <h2 className="font-bold text-lg">Summary</h2>
    //         <p>
    //           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
    //           quam eum soluta? Totam vitae blanditiis numquam sapiente quas,
    //           beatae praesentium inventore, facere ullam repudiandae, illum
    //           tempora molestiae explicabo saepe accusantium.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="">
    //       <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
    //       <select
    //         id="underline_select"
    //         className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
    //         // value={status}
    //         // onChange={onChangeHandler}
    //       >
    //         <option value="" disabled>
    //           What would you do with this person?
    //         </option>
    //         {["OnHold", "Accept", "Reject", "Done"].map((e, i) => {
    //           return (
    //             <option value={e} key={i} className="">
    //               {e}
    //             </option>
    //           );
    //         })}
    //       </select>
    //     </div>
    //   </div>
    // </div>
  );
}
