// import React, { useState } from "react";
// import { DNA } from "react-loader-spinner";
// import { addDoc } from "firebase/firestore";
// import { animeRef } from "./firebase/Firebase";
// import Swal from "sweetalert2";
// import "./Addanime.css"

// export default function Addanime() {
//     const [form, setForm] = useState({
//         ImgURL: "",
//         AnimeName: "",
//         description: "",
//         rating: 0,
//         rated: 0,
//     });
//     const [loading, setLoading] = useState(false);

//     const addAnime = async () => {
//         setLoading(true);
//         try {
//             await Swal.fire({
//                 title: "Do you want to save the changes?",
//                 showDenyButton: true,
//                 showCancelButton: true,
//                 confirmButtonText: "Save",
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     addDoc(animeRef, form);
//                     Swal.fire("Saved!", "", "success");
//                 } else if (result.isDenied) {
//                     Swal.fire("Changes are not saved", "", "info");
//                 }
//             });
//             setForm({
//                 ImgURL: "",
//                 AnimeName: "",
//                 description: "",
//                 rating: 0,
//                 rated: 0,
//             });
//         } catch (err) {
//             Swal.fire("Error", "Could not save anime.", "error");
//         }
//         setLoading(false);
//     };

//     return (
//         <div
//             style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 padding: "15px",
//                 minHeight: "100vh",
//                 backgroundImage:
//                     "url(https://wallpapers.com/images/hd/one-piece-manga-5439-x-2690-wallpaper-c8y7will7on37pxz.jpg)",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//             }}
//         >
//             <div
//                 style={{
//                     width: "90%",
//                     maxWidth: "600px",
//                     marginTop: "20px",
//                     background: "white",
//                     borderRadius: "30px",
//                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//                     height:'80vh',
//                     minHeight:'60vh'
//                 }}
//             >
//                 <h1
//                     style={{
//                         textAlign: "center",
//                         padding: "20px",
//                         background: "black",
//                         color: "white",
//                         borderRadius: "30px 30px 0 0",
//                         margin: '0px',
//                         marginBottom: "20px",
//                     }}
//                 >
//                     Add New Anime
//                 </h1>
//                 <div style={{ padding: "20px" }}>
//                     <div style={{ marginBottom: "20px" }}>
//                         <label style={{ display: "block", marginBottom: "5px" }}>
//                             Image URL
//                         </label>
//                         <input
//                             style={{
//                                 width: "100%",
//                                 padding: "10px",
//                                 border: "1px solid #ccc",
//                                 borderRadius: "5px",
//                             }}
//                             type="text"
//                             placeholder="Enter Image URL"
//                             value={form.ImgURL}
//                             onChange={(e) =>
//                                 setForm({ ...form, ImgURL: e.target.value })
//                             }
//                         />
//                     </div>
//                     <div style={{ marginBottom: "20px" }}>
//                         <label style={{ display: "block", marginBottom: "5px" }}>
//                             Anime Name
//                         </label>
//                         <input
//                             style={{
//                                 width: "100%",
//                                 padding: "10px",
//                                 border: "1px solid #ccc",
//                                 borderRadius: "5px",
//                             }}
//                             type="text"
//                             placeholder="Enter Anime Name"
//                             value={form.AnimeName}
//                             onChange={(e) =>
//                                 setForm({ ...form, AnimeName: e.target.value })
//                             }
//                         />
//                     </div>
//                     <div style={{ marginBottom: "20px" }}>
//                         <label style={{ display: "block", marginBottom: "5px" }}>
//                             Description
//                         </label>
//                         <textarea
//                             style={{
//                                 width: "100%",
//                                 padding: "10px",
//                                 border: "1px solid #ccc",
//                                 borderRadius: "5px",
//                             }}
//                             placeholder="Enter Description"
//                             value={form.description}
//                             onChange={(e) =>
//                                 setForm({ ...form, description: e.target.value })
//                             }
//                         />
//                     </div>
//                     <button
//                         onClick={addAnime}
//                         style={{
//                             width: "100%",
//                             padding: "15px",
//                             background: "black",
//                             color: "white",
//                             border: "none",
//                             borderRadius: "5px",
//                             cursor: "pointer",
//                             fontSize: "16px",
//                         }}
//                     >
//                         {loading ? <DNA height={30} /> : "Submit"}
//                     </button>
//                 </div>
//                 <p
//                     style={{
//                         margin: '0px',
//                         fontSize: "14px",
//                         background: "black",
//                         color: "white",
//                         padding: "10px",
//                         borderRadius: "0 0 30px 30px",
//                         textAlign: "center",
//                     }}
//                 >
//                     "Welcome! Add your favorite anime to our collection and share your
//                     passion with fellow fans. Let's grow together!"
//                 </p>
//             </div>
//         </div>
//     );
// }

import React, { useState } from "react";
import { DNA } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import { animeRef } from "./firebase/Firebase";
import Swal from "sweetalert2";
import "./Addanime.css";

export default function Addanime() {
    const [form, setForm] = useState({
        ImgURL: "",
        AnimeName: "",
        description: "",
        rating: 0,
        rated: 0,
    });
    const [loading, setLoading] = useState(false);

    const addAnime = async () => {
        setLoading(true);
        try {
            await Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
            }).then((result) => {
                if (result.isConfirmed) {
                    addDoc(animeRef, form);
                    Swal.fire("Saved!", "", "success");
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
            setForm({
                ImgURL: "",
                AnimeName: "",
                description: "",
                rating: 0,
                rated: 0,
            });
        } catch (err) {
            Swal.fire("Error", "Could not save anime.", "error");
        }
        setLoading(false);
    };

    return (
        <div className="addanime-container">
            <div className="addanime-card">
                <h1 className="addanime-header">Add New Anime</h1>
                <div className="addanime-content">
                    <div className="form-group">
                        <label>Image URL</label>
                        <input
                            type="text"
                            placeholder="Enter Image URL"
                            value={form.ImgURL}
                            onChange={(e) =>
                                setForm({ ...form, ImgURL: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label>Anime Name</label>
                        <input
                            type="text"
                            placeholder="Enter Anime Name"
                            value={form.AnimeName}
                            onChange={(e) =>
                                setForm({ ...form, AnimeName: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            placeholder="Enter Description"
                            value={form.description}
                            onChange={(e) =>
                                setForm({ ...form, description: e.target.value })
                            }
                        />
                    </div>
                    <button onClick={addAnime} className="submit-button">
                        {loading ? <DNA height={60} /> : "Submit"}
                    </button>
                </div>
                <p className="addanime-footer">
                    "Welcome! Add your favorite anime to our collection and share your
                    passion with fellow fans. Let's grow together!"
                </p>
            </div>
        </div>
    );
}
