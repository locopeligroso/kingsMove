import { useRef, useEffect } from "react";

export function FeaturesSection({
    title,
    description,
    firstCardSRC,
    firstCardTitle,
    firstCardDescription,
    secondCardSRC,
    secondCardTitle,
    secondCardDescription,
    thirdCardSRC,
    thirdCardTitle,
    thirdCardDescription
}) {
    const titleToAnimate = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                } else {
                    entry.target.classList.remove('animate');
                }
            });
        }, { threshold: 0.1 });

        if (titleToAnimate.current) observer.observe(titleToAnimate.current);

        return () => {
            if (titleToAnimate.current) observer.unobserve(titleToAnimate.current);
        };
    }, []);

    return (
        <section className="features">
                <div className="features-heading">
                    <h1 ref={titleToAnimate} className="features-title">{title}</h1>
                    <h3 className="l3 features-subtitle">{description}</h3>
                </div>
                <div className="features-cards">
                    <FeatureCard
                        src={firstCardSRC}
                        title={firstCardTitle}
                        description={firstCardDescription}
                    />
                    <FeatureCard
                        black={true}
                        src={secondCardSRC}
                        title={secondCardTitle}
                        description={secondCardDescription}
                    />
                    <FeatureCard
                        src={thirdCardSRC}
                        title={thirdCardTitle}
                        description={thirdCardDescription}
                    />
                </div>
        </section>
    );
}

function FeatureCard({ src, title, description, black }) {
    return (
        <div className={`card${black ? ' card-black' : ''}`}>
            <img src={src} style={{ width: '36px', height: '36px' }} />
            <h5 className="card-title">{title}</h5>
            <p className="card-description">{description}</p>
        </div>
    );
}