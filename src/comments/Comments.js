import {useEffect, useState} from "react";
import Comment from "../comment/Comment";
import './Comments.css'
import {getComments} from "../services/comment.fetch.service";

export default function Comments() {
    let[comments, setComments] = useState([]);
    let[comment, setComment] = useState(null);
    useEffect(() => {
        getComments().then(value => setComments([...value]))
    }, []);
    const choseComment = (c) => {
        setComment({...c})
    }
    return (
        <div className={'wrap'}>
            <div className={'comments-box'}>
                {
                    comments.map(value =>
                        <Comment
                            key={value.id}
                            item={value}
                            choseComment={choseComment}
                        />
                    )
                }
            </div>
            {comment && (<div className={'chosen-one'}>{JSON.stringify(comment)}</div>)
            }
        </div>
    );
}