
import HeroTitle from "./Components/HeroTitle"
import Button from "./Components/Button"
import Navbar from "./Components/Navbar"
import { FeaturesSection } from "./Pages/Home/FeaturesBlock"
import Quote from "./Pages/Home/Quote"

export default function App() {

  return (
    <>
      <Navbar />
      <div className="wrapper">


        <section className="title-section">
          <HeroTitle
            title="King's Moves"
            description="Explore strategies, tips, and game analysis to elevate your chess skills. From basics to advanced tactics, master every royal move!"
          />

          <div className="buttons-row">
            <Button
              type={'button'}
              text="Start Learning"
              onClick={() => console.log("Start Learning")}
            />
            <Button
              type={'button-outlined'}
              text="Start Learning"
              onClick={() => console.log("Start Learning")}
            />
          </div>
        </section>

        <FeaturesSection
          title={"Unlock the Secrets of Chess Mastery"}
          description={"We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily."}

          firstCardSRC={'/assets/test.svg'}
          firstCardTitle={"In-Depth Game Analysis"}
          firstCardDescription={"Explore detailed breakdowns of famous chess matches, with explanations to enhance your advanced strategies."}

          secondCardSRC={'/assets/test.svg'}
          secondCardTitle={"Interactive Puzzles & Challenges"}
          secondCardDescription={"Sharpen your skills with daily puzzles and interactive challenges designed to test and improve your tactical thinking."}

          thirdCardSRC={'/assets/test.svg'}
          thirdCardTitle={"Personalized Learning Paths"}
          thirdCardDescription={"Follow custom-tailored lessons based on your skill level, helping you progress from fundamental concepts to complex game tactics."}
        />

        <Quote title={"Chess is life in miniature. Chess is a struggle, chess battles"} author={"Garry Kasparov"} />
      </div>
    </>

  )
}