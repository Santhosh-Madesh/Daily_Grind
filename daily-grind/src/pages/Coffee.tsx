import CoffeeHero from "../components/coffee/hero/CoffeeHero"
import ContactSection from "../components/coffee/contact/ContactSection"
import CoffeeCollection from "../components/coffee/products/CoffeeCollection"
import PhilosophySection from "../components/coffee/philosophy/PhilosophySection"

export default function Coffee() {
    return (
    <>
        <CoffeeHero/>
        <CoffeeCollection/>
        <PhilosophySection/>
        <ContactSection/>
    </>
    )
}