// import React, { useContext } from 'react'
// import AddBoxIcon from '@mui/icons-material/AddBox';
// import { Link } from 'react-router-dom';
// import { Appstate } from './App';

// export default function Headr() {
//     const useAppstate = useContext(Appstate);
//     return (
//         <div className='headr'>
//             <div >
//                 <Link style={{ textDecoration: 'none' }} to={'/'}>
//                     <span className='headr1'>ANIME<span className='headr2'>.Utopia</span></span>
//                 </Link>
//             </div>
//             {useAppstate.login ?
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <Link style={{ textDecoration: 'none' }} to={'/Addanime'}>
//                         <button className='addbtn headr2'><AddBoxIcon style={{ marginRight: '5px', color: 'violet' }} />
//                             <b>ADD New</b>
//                         </button>
//                     </Link>
//                 </div>
//                 :
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <Link style={{ textDecoration: 'none', background: 'violet', padding: '5px', borderRadius: '5px' }} to={'/login'}>
//                         <button className='addbtn headr2'>
//                             <b>Login</b>
//                         </button>
//                     </Link>
//                 </div>

//             }
//         </div>
//     )
// }

import React, { useContext } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom';
import { Appstate } from './App';
import "./Headr.css"

export default function Headr() {
    const useAppstate = useContext(Appstate);
    return (
        <div className="headr">
            <div className="headr-logo">
                <Link to={'/'} className="headr-link">
                    <span className="headr1">ANIME</span>
                    <span className="headr2">.Utopia</span>
                </Link>
            </div>
            {useAppstate.login ? (
                <div className="headr-actions">
                    <Link to={'/Addanime'} className="headr-link">
                        <button className="addbtn">
                            <AddBoxIcon className="addbtn-icon" />
                            <b>ADD New</b>
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="headr-actions">
                    <Link to={'/login'} className="login-link">
                        <button className="addbtn">
                            <b>Login</b>
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}
