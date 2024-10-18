import headerLogoImg from "../assets/quiz-logo.png";

export default function Header() {
    return <header>
        <h1>React Quiz</h1>
        <img src={headerLogoImg} alt="Quiz App logo" />
    </header>
}