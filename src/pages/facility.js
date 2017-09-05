import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const Facility = () => {
  return (
    <div>
      <Header />

      <div className="pt3 avenir ml6 mr5">
        <blockquote className="ml0 mt0 pl4 bl bw2 b--green">
          <p className="lh-copy mt0 i">
            From the order desk to the time your netting arrives, we are careful
            to watch the details that make for a high quality service as well as
            product. Contact us and see the difference.
          </p>
        </blockquote>
      </div>

      <article className="tc">
        <h2 className="f4 bold">Our Location</h2>
        <div className="db pv1 ph0-l no-underline">
          <div className="flex flex-column flex-row-ns">
            <div className="pr3-ns mb0 mt3 mb0-ns w-100 w-40-ns">
              <img
                alt="Bellingham Bay shadowed by Mount Baker"
                src="https://cdn.glitch.com/15a4d4df-09fc-472a-b87a-8582a0caa010%2Fmtb-min.jpg?1504306489012"
                className="db br2 grow"
              />
            </div>

            <div className="w-100 w-60-ns pl3-ns">
              <p className="lh-copy">
                Diamond Nets Incorporated is located in the northwest corner of
                Washington State. Along with several other cordage
                manufacturers, the factory was born from the commercial fishing
                boom, which dominated Washington State exports along with Timber
                and some Agriculture. The factory sits in a rural setting,
                surrounded by fields and shadowed only by Mount Baker and the
                Cascades to the east.
              </p>
            </div>
          </div>
        </div>
      </article>

      <h2 className="f4 bold tc">Our Buildings</h2>
      <h5 className="f5 tc pr2">Main Building</h5>
      <p className="lh-copy tc mr5 ml5">
        Inside the 33,600 square foot complex, the manufacturing process is
        divided up into five sections. The largest and main area of the plant is
        set up for our net looms. Then in all, they enable us to build knotted
        netting from twine 1/32" in diameter up to 3/8" rope. Braided or twisted
        fibers, single strand or double strand; our diverse manufacturing
        capability allows us to produce debris nets capable of catching
        automobiles at the same time as we are manufacturing wispy thin web
        suitable for catching butterflies.
      </p>
      <h5 className="f5 tc pr2">Finishing Room</h5>
      <p className="lh-copy tc mr5 ml5">
        Beyond the manufacturing area is the finishing room where netting can be
        processed to your specifications. During the shrinking process to lock
        the knots tight, you may also choose from a variety of dye colors.
        Fibers that do not accept nylon textile dyes such as polyester and
        UHMWPE can be colored using urethane bonding as a carrier for pigments.
        In addition to bondings that add body the netting, coatings such as
        asphalt, fire retardant and anti-foulants are available. Finishes are
        available in as heavy or light of consistency as required for your
        needs. Knots can also be pulled tight mechanically with up to 50 tons of
        pressure. All nets are dried with forced air heat up to 200 degrees
        after finishing to ensure a well set and moisture free product arrives
        at your dock.
      </p>

      <article className="tc">
        <h2 className="f4 bold">Value Added Area</h2>
        <div className="db pv1 ph3 ph0-l no-underline">
          <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-60-ns pr3-ns">
              <p className="lh-copy">
                Next to the main building is our finished net area. Here we can
                provide our customers with a value added service of completed
                product if they choose. We can supply rope borders and hardware
                to your nets if desired. Netting can also be cut on to the
                square and cargo style nets can be hand spliced together from
                rope if needed. All finished products can be treated with the
                same variety of finishes as our bulk netting products.
              </p>
            </div>

            <div className="pl3-ns mb0 mt3 mb0-ns w-100 w-40-ns">
              <img
                alt="Some blue netting"
                src="https://cdn.glitch.com/15a4d4df-09fc-472a-b87a-8582a0caa010%2Fbluenetting-min.jpg?1504306258894"
                className="db br2 grow"
              />
            </div>
          </div>
        </div>
      </article>

      <h2 className="f4 bold tc">Machine Shop</h2>
      <p className="lh-copy tc mr5 ml5">
        Our machine shop provides us with custom hardware built for attaching
        nets to various structures. Hardware components for the Sky-Web II
        System © are built here. The mills, punches and presses used to
        fabricate net machine parts here are also available to our customers for
        custom net hardware manufacturing.
      </p>

      <article className="tc">
        <h2 className="f4 bold">Packaging and Shipping</h2>
        <div className="db pv1 ph3 ph0-l no-underline">
          <div className="flex flex-column flex-row-ns">
            <div className="pr3-ns mb0 mt3 mb0-ns w-100 w-40-ns">
              <img
                alt="A pallet"
                src="https://cdn.glitch.com/15a4d4df-09fc-472a-b87a-8582a0caa010%2Fpallet-min.jpg?1504306267246"
                className="db br2 grow"
              />
            </div>

            <div className="w-100 w-60-ns p3-ns">
              <p className="lh-copy">
                After completing all processing and finishing procedures, our
                shipping department carefully folds and packages your product.
                Whether being boxed or strapped into bales, our nets are
                mechanically pressed to minimize movement during shipment.
                Packages are clearly marked to avoid any confusion between
                pieces. Pallets are shrink-wrapped and/or strapped to avoid lost
                goods during transport. From our warehouse, orders are organized
                and freight companies coordinated to give you the best value in
                freight prices. Multiple loading docks provide for any type of
                freight tractor/trailer combinations.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}

export default Facility
