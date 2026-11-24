import Hero from "../components/home/hero/Hero"
import StandardSection from "../components/home/standard/Standard"
import ProductSection from "../components/home/productSection/ProductSection"
import ContactSection from "../components/home/contact/Contact"

export default function Home() {
    return (
    <>
        <Hero/>
        <StandardSection/>
        <ProductSection/>
        <ContactSection/>
    </>
    )
}