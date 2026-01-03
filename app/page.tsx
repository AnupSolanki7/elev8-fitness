import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import TransformationJourney from "@/components/TransformationJourney";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />

      <SectionWrapper
        title="What We Do"
        subtitle="Results-driven coaching programs designed to transform your body and mindset."
      >
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title="Personal Training"
            description="Customized 1-on-1 coaching."
            image="/images/personal-training.jpg"
          />
          <ServiceCard
            title="Body Transformation"
            description="Fat loss & muscle building programs."
            image="/images/body-transformation.jpg"
          />
          <ServiceCard
            title="Online Coaching"
            description="Train anywhere with expert guidance."
            image="/images/online-coaching.jpg"
          />
        </div>
      </SectionWrapper>

      <TransformationJourney />
      <Testimonials />
      <Team />
      <CTA />
    </>
  );
}
