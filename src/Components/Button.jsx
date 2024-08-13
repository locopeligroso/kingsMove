export default function Button({ text, onClick, type }) {

    return <>
        <button onClick={onClick} className={type}>
            {text}
        </button>
    </>
}