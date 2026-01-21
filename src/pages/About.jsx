import React, {useEffect} from "react";
import {aboutusData} from "../data/aboutusData";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-earth-dark text-earth-light pt-24 pb-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-earth-light mb-4">
            About <span className="text-earth-accent">Us</span>
          </h1>
          <p className="text-earth-soft text-lg max-w-2xl mx-auto">
            Discover the story, passion, and people behind your favorite cup of
            coffee.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative order-1 md:order-1 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-earth-accent to-earth-card rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="/whoweare.jpg"
              alt="Cozy café interior showing people enjoying their time"
              className="relative rounded-2xl shadow-xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>
          <div className="order-2 md:order-2 space-y-6 animate-fade-in-right">
            <h2 className="text-3xl font-bold text-earth-accent">Who We Are</h2>
            <div className="space-y-4 text-earth-light/90 leading-relaxed text-lg">
              <p>
                We are more than just a café — we are a place where
                conversations begin, ideas flow, and moments are shared. Founded
                with a passion for quality coffee and heartfelt hospitality, our
                café was created to offer a warm and welcoming space for
                everyone.
              </p>
              <p>
                From carefully sourced beans to freshly prepared meals, we
                believe in authenticity, consistency, and comfort. Whether you
                are stopping by for a quick cup of coffee or spending hours with
                friends and family, we aim to make every visit memorable.
              </p>
              <p className="text-earth-soft italic border-l-4 border-earth-card pl-4">
                "Our café reflects a blend of modern taste and cozy charm,
                designed for those who appreciate good food, great coffee, and
                genuine service."
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1 space-y-6 animate-fade-in-left">
            <h2 className="text-3xl font-bold text-earth-accent">
              How We Serve
            </h2>
            <div className="space-y-4 text-earth-light/90 leading-relaxed text-lg">
              <p>
                At our café, service is more than delivering food — it’s about
                creating an experience. We prepare every order with care,
                attention, and respect for quality. Our team focuses on
                freshness, presentation, and timely service to ensure your
                experience feels effortless and enjoyable.
              </p>
              <p>
                We listen to our customers, personalize our service, and
                continuously improve based on feedback. Whether it’s a casual
                visit, a family gathering, or a special celebration, we serve
                every guest with the same dedication and warmth.
              </p>
              <p>
                From the first greeting to the final sip, we strive to make you
                feel valued, relaxed, and at home.
              </p>
            </div>
          </div>
          <div className="relative order-1 md:order-2 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-earth-card to-earth-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="/whatweserve.jpg"
              alt="Barista pouring latte art with dedication"
              className="relative rounded-2xl shadow-xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>
        </div>
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-earth-accent mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutusData.values.map((value, index) => (
              <div
                key={index}
                className="bg-earth-hover p-8 rounded-xl shadow-lg border border-earth-card hover:border-earth-accent transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-earth-light mb-4">
                  {value.title}
                </h3>
                <p className="text-earth-soft">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-earth-accent mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutusData.team.map((member, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div
                  className={`w-32 h-32 mx-auto rounded-full ${member.color} mb-4 flex items-center justify-center text-2xl font-bold text-earth-light/50 border-4 border-earth-hover group-hover:border-earth-accent transition-colors duration-300`}
                >
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-earth-light">
                  {member.name}
                </h3>
                <p className="text-earth-soft text-sm uppercase tracking-wide mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-earth-accent mb-12">
            Our Journey
          </h2>
          <div className="relative border-l-2 border-earth-card ml-6 md:ml-12 space-y-12">
            {aboutusData.timeline.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-12"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-earth-accent border-4 border-earth-dark"></div>
                <h3 className="text-2xl font-bold text-earth-light mb-1 flex items-center">
                  <span className="text-earth-accent mr-3 text-lg font-mono">
                    {item.year}
                  </span>{" "}
                  {item.title}
                </h3>
                <p className="text-earth-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-12 overflow-hidden">
          <h2 className="text-3xl font-bold text-center text-earth-accent mb-12">
            What Our Guests Say
          </h2>

          <div className="relative">
            <div className="flex gap-8 w-max animate-scroll-left pause-on-hover">
              {[...aboutusData.testimonials, ...aboutusData.testimonials].map(
                (testimonial, index) => (
                  <div
                    key={index}
                    className="bg-earth-dark border border-earth-hover p-6 rounded-xl relative min-w-[300px] max-w-[320px]"
                  >
                    <div className="text-earth-accent text-4xl font-serif absolute top-4 left-4 opacity-30">
                      "
                    </div>

                    <p className="text-earth-light/90 italic mb-4 relative z-10 pt-4">
                      {testimonial.quote}
                    </p>

                    <p className="text-earth-soft font-bold text-right">
                      – {testimonial.author}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
