import CoffeeHero from "../components/coffee/hero/CoffeeHero"
import ContactSection from "../components/coffee/contact/ContactSection"
import CoffeeCollection from "../components/coffee/products/CoffeeCollection"

export default function Coffee() {
    return (
    <>
        <CoffeeHero/>
        <CoffeeCollection/>
        <ContactSection/>
    </>
    )
}