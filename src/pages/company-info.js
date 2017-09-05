import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const CompanyInfo = () => {
  return (
    <div>
      <Header />

      <h2 className="f4 bold tc">Contact Info</h2>
      <p className="tc mr5 ml5 fw5">
        Diamond Nets, Inc.<br />
        1064 Pole Road<br />
        Everson, WA 98247 United States<br />
        888-323-9306<br />
        sales@diamondnets.com
      </p>

      <h2 className="f4 bold tc">Our History</h2>
      <p className="tc mr5 ml5">
        In 1972 a gentleman by the name of Alfred Krueger decided to start his
        own business making high quality knotted netting products for the
        commercial fishing industry in Puget Sound and Alaska. To help finance
        the project, Alfred solicited the aid of a man by the name Ed Powers. Ed
        had already used some land on his berry farm to start a small successful
        braiding business under the name Powers Twines, Inc. Together, they
        founded Northwest Net & Twine, Inc.
        <p className="tc mr5 ml5" />
        The companies prospered and later, along with Ed's oldest son Larry, the
        partners formed yet another company they called Everson Cordage Works.
        The focus of the third company was high quality twisted twine and rope
        to compliment and supply their other two businesses.For many years the
        companies thrived, introducing dozens of local people to the traditions
        and techniques of modern net making. Among them, two young people showed
        special interest in the craft: Les Powers, Ed's youngest son who had
        grown up around his father's braiding business, and John Neal, who since
        the age of 20 had worked at the netting factory and earned his way up to
        managing production and sales.
        <p className="tc mr5 ml5" />
        Eventually Mr. Krueger retired from the industry, having devoted 21
        years to building his business and reputation. He sold his holdings in
        the net plant to his partner, and a few years later, Ed retired as well,
        selling both Powers Twines and Northwest Net to a corporate partnership
        that merged the two companies under the name American Coastal Ties
        Marine, Inc. Sadly, the new ownership did not fare well and was forced
        to sell all of the equipment to an auction company or face bankruptcy.
        While much of the equipment from the braiding facility was sold off, the
        net manufacturing facility remained intact. Les and John, still actively
        working in the cordage industry, decided to purchase the netting plant
        and revive it under the name Diamond Nets, Inc. in 1997.
      </p>

      <Footer />
    </div>
  )
}

export default CompanyInfo
