import React, { useState, useEffect } from 'react';
import ReactStars from 'react-stars';
import { useParams } from 'react-router-dom';
import { db } from './firebase/Firebase';
import { doc, getDoc } from 'firebase/firestore';
import { CirclesWithBar } from 'react-loader-spinner';
import Review from './Review';
import './Detail.css';

export default function Detail() {
    const { id } = useParams();
    const [animedetail, setAnimedetail] = useState({
        AnimeName: "",
        ImgURL: "",
        description: "",
        rating: 0,
        rated: 0
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            setLoading(true);
            const _doc = doc(db, "Anime", id);
            const _data = await getDoc(_doc);
            setAnimedetail(_data.data());
            setLoading(false);
        }
        getData();
    }, [id]);

    return (
        <div className="detail">
            {loading ? (
                <div className="loader-container">
                    <CirclesWithBar height={70} color="violet" />
                </div>
            ) : (
                <>
                    <div className="detail1">
                        <img src={animedetail.ImgURL} alt={animedetail.AnimeName} />
                    </div>
                    <div className="detail2">
                        <h1>{animedetail.AnimeName}</h1>
                        <ReactStars
                            className='rating'
                            // size={30}
                            half={true}
                            value={animedetail.rating / animedetail.rated}
                            edit={false}
                        />
                        <p>{animedetail.description}</p>
                        <Review id={id} prevRating={animedetail.rating} userRated={animedetail.rated} />
                    </div>
                </>
            )}
        </div>
    );
}
