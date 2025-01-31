'use client';

import { ClasseCard } from '@/components/dashboard/ClasseCard';
import './classes.css';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Skeleton from 'react-loading-skeleton';

interface PlayYoutubeItens {
    id: string;
    snippet: {
        title: string;
        position: number;
        resourceId: {
            videoId: string;
        }
        thumbnails: {
            medium: {
                url: string;
            }
        }
    }
}

export default function Classes() {
    const [items, setItem] = useState<PlayYoutubeItens[]>([]);
    const [videoTitle, setVideoTitle] = useState<string>('');
    const [id, setId] = useState<string>('');

    const { playListId } = useParams();
    
    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&key=AIzaSyB3Lb_Ez2p-_q5GbVIvDzjGahFwPwdOgIk&playlistId=${playListId}`, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((data) => {
            setItem(
                data.items.filter((item: PlayYoutubeItens) => item.snippet.title !== 'Private video')
            );
            setVideoTitle(data.items[0].snippet.title);
            setId(data.items[0].snippet.resourceId.videoId);
        });
        
    }, [playListId]);
    
    const changeVideo = useCallback((id: string) => {
        setId(id);
    }, [items]);
    
    return (
        <section className="classes__container">
            <div className="classes">
                <div className="time">
                    <h3>title</h3>
                </div>
                <div className="box_classe">
                    <iframe
                        className='video'
                        src={`https://www.youtube.com/embed/${id}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    >
                    </iframe>
                    <div className="classes_card">
                        {items.map((video) => (
                            <button className='btn_change' onClick={() => changeVideo(video.snippet.resourceId.videoId)}>
                                <ClasseCard thumbnail={video.snippet.thumbnails.medium.url} title={video.snippet.title} />
                            </button>
                        ))}
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
