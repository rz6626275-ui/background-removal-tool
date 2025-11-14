import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { FeaturesSection } from '@/components/features-section'
import { UploadEditor } from '@/components/upload-editor'
import { ExamplesSection } from '@/components/examples-section'
import { FAQSection } from '@/components/faq-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <UploadEditor />
        <ExamplesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
