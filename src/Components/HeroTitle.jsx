


export default function HeroTitle({ title, description }) {
   

    return (
        <div className="titles">
            <h1 className="hero">{title}</h1>
            <h3 className="l3 centered">
                {description}
            </h3>
        </div>
    )
}