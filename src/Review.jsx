import React, { useEffect, useContext, useState, useCallback } from 'react'
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom'
import { reviewRef, db } from './firebase/Firebase'
import { addDoc, doc, updateDoc, query, where, getDocs } from 'firebase/firestore'
import { Bars, ThreeDots } from 'react-loader-spinner';
import Swal from 'sweetalert2';
import { Appstate } from './App';

export default function Review({ id, prevRating, userRated }) {
    const { user } = useContext(Appstate);
    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(false);
    const [reviewLoading, setReviewLoading] = useState(false);
    const [form, setForm] = useState("");
    const [data, setData] = useState([]);

    // Memoize getData to prevent recreation on every render
    const getData = useCallback(async () => {
        setReviewLoading(true);
        try {
            let quer = query(reviewRef, where('animeid', '==', id));
            const querySnapshot = await getDocs(quer);
            const reviews = [];
            querySnapshot.forEach((doc) => {
                reviews.push(doc.data());
            });
            setData(reviews);
        } catch (error) {
            console.error("Error fetching reviews:", error);
        } finally {
            setReviewLoading(false);
        }
    }, [id]); // Only re-create if 'id' changes

    const sendReview = async () => {
        setLoading(true);
        try {
            await addDoc(reviewRef, {
                animeid: id,
                name: user,
                rating: rating,
                thought: form,
                timestamp: new Date().getTime()
            });
            const ref = doc(db, "Anime", id);
            await updateDoc(ref, {
                rating: prevRating + rating,
                rated: userRated + 1
            });
            setRating(0);
            setForm("");
            Swal.fire({
                title: "Review Sent",
                icon: "success",
                buttons: false,
                timer: 3000
            });
            await getData(); // Re-fetch reviews after submitting
        } catch (error) {
            Swal.fire({
                title: error.message,
                icon: "error",
                buttons: false,
                timer: 3000
            });
        }
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [id, getData]); // Trigger when 'id' or 'getData' changes

    const useAppstate = useContext(Appstate);

    return (
        <div className='review'>
            {useAppstate.login ? (
                <>
                    <ReactStars
                        size={30}
                        half={true}
                        value={rating}
                        onChange={(rate) => setRating(rate)}
                    />
                    <input
                        value={form}
                        onChange={(e) => setForm(e.target.value)}
                        placeholder='Share your thoughts...'
                        style={{ border: 'none', width: '100%', padding: '10px', background: 'rgb(26, 25, 25)', outline: 'none', color: 'white' }} />

                    <button onClick={sendReview} style={{ display: 'flex', height: '50px', justifyContent: 'center', border: 'none', cursor: 'pointer', background: 'violet', width: '100%', padding: '15px 0px' }}>
                        {loading ? <Bars height={20} color='black' /> : <b>Share</b>}
                    </button>
                    {reviewLoading ? (
                        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                            <ThreeDots height={10} color='white' />
                        </div>
                    ) : (
                        <div className='reviewin'>
                            {data.map((e, i) => (
                                <div className='reviewin1' key={i}>
                                    <div style={{ display: "flex", alignItems: 'center' }}>
                                        <p style={{ margin: '0px', color: 'white' }}>{e.name}</p>
                                        <p style={{ margin: '0px', marginLeft: '10px', fontSize: '11px' }}>({new Date(e.timestamp).toLocaleString()})</p>
                                    </div>
                                    <ReactStars
                                        size={13}
                                        half={true}
                                        value={e.rating}
                                        edit={false}
                                    />
                                    {e.thought}
                                </div>
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <p>
                        <b>Please log in to share your thoughts....<Link style={{ color: 'violet' }} to={'/login'}>Login</Link></b>
                    </p>
                </div>
            )}
        </div>
    );
}
