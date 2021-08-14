export default function Comment({item, choseComment}) {
    const onClickCommentChose = () => {
        choseComment(item);
    }
    return (
        <div>
            Comment: {item.id} - {item.name}
            <button onClick={onClickCommentChose}>details</button>
        </div>
    );
}