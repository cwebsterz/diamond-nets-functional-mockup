import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <article className="pa1 pa3-ns tc">
          <p className="lh-copy i tc mr5 ml5 avenir">
            We do what it takes to provide exceptional service and unmatched
            quality to all our customers, present and future.
          </p>
          <img
            alt="Diamopnd Nets facility"
            src="https://cdn.glitch.com/15a4d4df-09fc-472a-b87a-8582a0caa010%2Fdiamondnets1.jpg?1504296094601"
            className="w-50 f5 measure grow br2"
          />
          <h2 className="f4 bold">World Wide Premier Net Manufacturing</h2>
          <p className="lh-copy tc mr5 ml5">
            Diamond Nets Incorporated is a full service net manufacturing
            facility located in Washington State. We manufacture knotted type
            netting out of a variety of fiber types and have the machine
            capability of knotting braided or twisted cordage from 1/32"
            diameter up to 3/8". Diamond Nets offers a large variety of
            finishing options from raw material up to fully finished net
            products complete with hardware if desired. We specialize in custom
            projects large and small. Contact us for a full description of our
            capabilities, we are ready to help qualified buyers with their
            projects and direct anyone who needs help in the right direction.
          </p>
          <h2 className="f4 bold">Our Commitment</h2>
          <p className="lh-copy tc mr5 ml5">
            With over 50 years of experience between us, we've come to
            understand the needs and high standards of our customers. Quality
            does not come easily and doesn't come from machinery, it comes from
            people. Having worked through three administrations, we've learned a
            lot about how to do business and what it takes to serve the people
            who depend on our products. Our team of employees is hand picked for
            their knowledge and abilities in the net building business, ensuring
            that you get the best craftsmanship available in the world.
          </p>
        </article>
      </div>
      <Footer />
    </div>
  )
}

export default Home
