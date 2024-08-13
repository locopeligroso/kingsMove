export default function Quote({ title, author }) {

    return <>
        <section>
            <div className="quote-wrapper">
                <h1 className="quote">{title}</h1>
                <h4 className={"quote-author"}>{author}</h4>
            </div>
        </section>
    </>
}