import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars';
import { CirclesWithBar } from 'react-loader-spinner';
import { getDocs } from 'firebase/firestore';
import { animeRef } from './firebase/Firebase';
import { Link } from 'react-router-dom';


export default function Cards() {
    const [data, setData] = useState([
       
    ])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getData() {

            setLoading(true)
            const _data = await getDocs(animeRef);
            _data.forEach((doc) => {
                setData((prv) => [...prv, { ...(doc.data()), id: doc.id }])
            })
            setLoading(false)
        }
        getData();

    }, []);
    return (
        <div className='container'>
            <div className='row headr2 maincontent' >
                {loading ? <div style={{ width: '100%', minHeight: '65vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CirclesWithBar height={70} color='violet' /></div> :

                    data.map((e, i) => {
                        return (
                            <Link to={`/detail/${e.id}`} style={{textDecoration:'none'}}>
                                <div className='col-md-4  col-sm-6 image-card'>
                                    <img src={e.ImgURL} className='anime-image' alt="One Piece" />
                                    <div className='content'>
                                        <div >
                                            <span >Name: <span style={{ color: 'white' }}>{e.AnimeName}</span></span><br />
                                            <span className='rating'>Rating:

                                                <ReactStars
                                                    size={20}
                                                    half={true}
                                                    value={e.rating/e.rated}
                                                    edit={false}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })

                }
            </div>
        </div>
    )
}
