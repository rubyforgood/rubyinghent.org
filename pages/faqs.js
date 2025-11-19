import Layout from "../components/Layout.js";
import Head from "next/head";
import Header from "../components/Header.js";
import Accordion from "../components/Accordion.js";

export default () => {
  return (
    <Layout>
      <Head>
        <title>Hack For The People - FAQs</title>
        <meta
          name="description"
          content="Here's a few frequently asked questions that we get quite often!"
        />
      </Head>

      <Header
        headerText="Frequently Asked Questions"
        description="Here are a few questions that we get pretty frequently that we decided to answer beforehand!"
      />

      <section className="faqs">
        <div className="container">
          <Accordion
            title="What is Ruby for Good?"
            content={
              <>
                <a
                  href="https://rubyforgood.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ruby for Good
                </a>{" "}
                is a nonprofit that builds and maintains software for the social good. One of the ways it does that is through events where Ruby programmers globally gather over a long weekend to work on projects that help communities. We work on the software year round, but gathering in person gives us a chance to work together, learn, and have fun.
              </>
            }
          />

          <Accordion
            title="Is this a hackathon?"
            content="Probably not like you are thinking. We are a civic hackathon, focused on building software for social good. We are not a competition, and we are not focused on building a product to sell. We are focused on building software that helps people. We also work at a sustainable pace, with a focus on learning and collaboration."
          />

          <Accordion
            title="Are you sure this isn't a hackathon?"
            content="Absolutely, our focus is sustainability and community. The software that we work on at our events will be continued and maintained year round. In fact, one of the projects we'll be working on this year was started in 2015 and is now helping over 3 million children and over 500k period product recipients each year. This is all real software making a real difference in the world."
          />

          <Accordion
            title="What skill level do I need to be to attend?"
            content="All experience levels are welcome! We have participants ranging from beginners to those with decades of experience. The event focuses on both learning and building great things. Groups are collaborative and you'll have opportunities to work closely with others and contribute code."
          />

          <Accordion
            title="Do I need to be a programmer?"
            content="We need developers, designers, product managers, and anyone interested in doing good. We welcome programmers of all languages, especially those interested in learning Ruby. Frontend experts (JavaScript and CSS) are particularly welcome!"
          />

          <Accordion
            title="How do you choose projects?"
            content="We've tried to pick a wide range of projects this year and depending on registration numbers we may include a few more."
          />

          <Accordion
            title="How can I lead a team?"
            content="Indicate your interest during registration. Team leads are matched with projects before the event and work with organization representatives to set up requirements, milestones, and initial setup."
          />

          <Accordion
            title="When should I arrive?"
            content="You must arrive by 10am Monday for kickoff, team selection, and environment setup. You can arrive as early as 9am, and we're in the beautiful city of Ghent with amazing things to see."
          />

          <Accordion
            title="How does food work?"
            content="We'll be having either at the venue or nearby."
          />

          <Accordion
            title="Can I or my company sponsor the event?"
            content="Yes! We are looking for sponsors to help cover the costs of the event. Please reach out to us at info@rubyforgood.org for more information. We would love to be able to provide food, swag and other goodies for the attendees."
          />

          <Accordion
            title="Where is the event located?"
            content="The event takes place at HoGent - Campus SchoonMeersen, Valentin Vaerwyckweg 1, 9000 Gent. It's walking distance from Gent-Sint-Pieters train station and 2 minutes from E40 Highway with limited parking. The event is held in B-block and D-block buildings, with reception in the B-block entrance hall."
          />

          <Accordion
            title="Are the people friendly?"
            content="Yes! There is a reason that people who attend Ruby for Good events keep coming back and have the 'gooder' nickname. We are a friendly, welcoming, and inclusive community. We are here to help you learn and grow, and to build great things together."
          />

          <Accordion
            title="When do I need to purchase tickets?"
            content="Tickets are free but we require registration to attend!"
          />

          <Accordion
            title="Where should I stay?"
            content="Anywhere in central Ghent - there's a tram from downtown that stops right in front of the venue. We'll send out recommendations for hotels soon so as many of us can stay as close as possible."
          />

          <Accordion
            title="What more can you tell us about the venue?"
            content={
              <>
                Take a look at{" "}
                <a
                  href="https://cfgmgmtcamp.org/ghent2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://cfgmgmtcamp.org/ghent2025/
                </a>{" "}
                as they've graciously agreed to share some space with us!
              </>
            }
          />

          <Accordion
            title="What is a ruby for good event like?"
            content={
              <>
                Take a look at these blog posts from previous attendees
                to get a sense of what is in store.
                <br />
                <a
                  href="https://chelseatroy.com/2019/04/02/behind-the-scenes-ruby-by-the-bay-civic-hack/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://chelseatroy.com/2019/04/02/behind-the-scenes-ruby-by-the-bay-civic-hack/
                </a>
                <br />
                <a
                  href="https://blog.homesnap.com/homesnap-terrastories-ruby-hack-thon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://blog.homesnap.com/homesnap-terrastories-ruby-hack-thon
                </a>
                <br />
                <a
                  href="https://blog.mapbox.com/ruby-for-good-2018-61dd45a7fdb7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://blog.mapbox.com/ruby-for-good-2018-61dd45a7fdb7
                </a>
              </>
            }
          />
        </div>
      </section>
    </Layout>
  );
};
