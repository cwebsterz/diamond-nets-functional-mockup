import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const ProductLines = () => {
  return (
    <div>
      <Header />

      <article className="tc">
        <h2 className="f4 bold">Product Lines</h2>
        <div className="db pv1 ph3 ph0-l no-underline">
          <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-60-ns pr3-ns pl3-ns">
              <p className="lh-copy">
                Diamond Nets can supply netting for hundreds of uses. Nylon,
                polyester, polyethylene, polypropylene, UHMPE, Kevlar, and PTFE
                are some of the fibers we can use to build your custom products.
                Our network of distributors is as diverse as they are spread out
                internationally. Call, email or fill out or information request
                form to qualify or located a distributor near you.
              </p>
            </div>

            <div className="pl3-ns pr3-ns mb4 mb0-ns w-100 w-40-ns">
              <img
                alt="Some netting"
                src="https://cdn.glitch.com/15a4d4df-09fc-472a-b87a-8582a0caa010%2Fracking-net-sample-1-lrg-min.jpg?1504302205143"
                className="db br2 grow"
              />
            </div>
          </div>
        </div>
      </article>
      <p className="tc">Here are some of the applications we cover :</p>

      <div>
        <div className="dt dt--fixed">
          <h5 className="f5 tc pr2">Commercial Fishing</h5>
          <div className="dtc tc br3">
            <ul className="list pl0 ml0 center mw5 ba b--light-silver">
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Bottom Trawls
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Salmon Seines
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Midwater Trawls
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Mullet Seines
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Crab Pot Webs
              </li>
            </ul>
          </div>
          <div className="dtc tc">
            <ul className="list pl0 ml0 center mw5 ba b--light-silver">
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Brailers
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Tuna Seines
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Shrimp Web
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Lobster Pot Wrap
              </li>
            </ul>
          </div>
          <div className="dtc tc">
            <ul className="list pl0 ml0 center mw5 ba b--light-silver">
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Codends
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Cod Pot Webs
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Set Nets
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Scallop Dredges
              </li>
            </ul>
          </div>
        </div>

        <div className="dt dt--fixed">
          <h5 className="f5 tc pr2">Government</h5>
          <div className="dtc tc br3">
            <ul className="list pl0 ml0 center mw5 ba b--light-silver">
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Running Gear Entanglement Systems
              </li>
            </ul>
          </div>
          <div className="dtc tc" />
          <div className="dtc tc" />
        </div>

        <div className="dt dt--fixed">
          <h5 className="f5 tc pr2">Aquaculture</h5>
          <div className="dtc tc br3">
            <ul className="list pl0 ml0 center mw5 ba b--light-silver">
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Predator Nets
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Fish Pens
              </li>
            </ul>
          </div>
          <div className="dtc tc">
            <ul className="list pl0 ml0 center mw5 ba b--light-silver">
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Herring Pounds
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Shark Barriers
              </li>
            </ul>
          </div>
          <div className="dtc tc">
            <ul className="list pl0 ml0 center mw5 ba b--light-silver">
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Lobster Pounds
              </li>
            </ul>
          </div>
        </div>

        <div className="dt dt--fixed">
          <h5 className="f5 tc pr2">Industrial</h5>
          <div className="dtc tc br3">
            <ul className="list pl0 ml0 center mw5 ba b--light-silver">
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Debris Nets
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Erosion Control
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Gangway Netting
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Helicopter Nets
              </li>
            </ul>
          </div>
          <div className="dtc tc">
            <ul className="list pl0 ml0 center mw5 ba b--light-silver">
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Personnel Nets
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Marine Barriers
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Sky-Web II® System
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Bird Barrier Netting
              </li>
            </ul>
          </div>
          <div className="dtc tc">
            <ul className="list pl0 ml0 center mw5 ba b--light-silver">
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Safety Nets
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Industrial Fencing
              </li>
              <li className="pv3 bb b--light-silver hover-bg-black-80 hover-white">
                Conveyor & Rack Guarding
              </li>
            </ul>
          </div>
        </div>

        <div className="dt dt--fixed">
          <h5 className="f5 tc pr2">Sport Netting</h5>
          <div className="dtc tc br3">
            <ul className="list pl0 ml0 center mw5 ba b--light-silver">
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Batting Cages
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Crowd Protection
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Hitting Cages
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Ski Fencing
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Capture Nets
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Garden Netting
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Artistic Design
              </li>
            </ul>
          </div>
          <div className="dtc tc">
            <ul className="list pl0 ml0 center mw5 ba b--light-silver">
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Pitching Screens
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Soccer Goals
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Backstops
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Hitting/Kicking Screen
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Camouflage
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Aviaries
              </li>
            </ul>
          </div>
          <div className="dtc tc">
            <ul className="list pl0 ml0 center mw5 ba b--light-silver">
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Hockey Goals
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Tennis Nets
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Driving Range Nets
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Finished Nets
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Deer Fencing
              </li>
              <li className="pv2 bb b--light-silver hover-bg-black-80 hover-white">
                Playgrounds
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductLines
