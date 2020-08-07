import React from "react"
import Layout from "../components/Layout"
import { style } from "../styles/pagesStyle"
import HeadingText from "../components/HeadingText"
import AnimateSlide from "../components/AnimateSlide"
import SEO from "../components/SEO"

const HowItWorks = () => {
  return (
    <Layout>
      <SEO title="" description="" />
      <div style={{ backgroundColor: "white" }}>
        <HeadingText text="How It Works" />
      </div>
      <div style={style.main}>
        <section style={style.section}>
          <h3>Here’s how it works…</h3>

          <AnimateSlide>
            <p style={style.paraHead}>
              <b>1). 3X your investment over 10 years</b>
            </p>
            <p>
              You get to purchase UK property with an average 47% discount
              against the RICS valuation price. This up-front genuine discount
              combined with a modest 4% annual price growth projection means
              each £100K invested turns into circa £300k over 10 years i.e. 3X
              in 10 years.
            </p>
          </AnimateSlide>

          <AnimateSlide>
            <p style={style.paraHead}>
              <b>2). Matching investors and tenants together</b>
            </p>
            <p>
              The strategy matches long-term investors with long-term elderly
              tenants, aged 72 on average:
            </p>
            <ul>
              <li>The investor pays on average 53% of the property price.</li>
              <li>
                The tenant pays the other 47% in the form of advance rent.
              </li>
              <li>
                The investor is the registered owner with the Land Registry.
              </li>
            </ul>
          </AnimateSlide>

          <AnimateSlide>
            <p style={style.paraHead}>
              <b>3). Key Benefits:</b>
            </p>
            <ul>
              <li>Pre-packaged property and tenant supplied together.</li>
              <li>The tenant pays on average 12 years rent in advance.</li>
              <li>
                NO rental voids, NO late payments, NO bad debts, NO evictions​.
              </li>
              <li>NO letting agency fees.</li>
              <li>NO stamp duty, NO income tax​.</li>
              <li>NO building work, NO refurbishment costs.</li>
              <li>NO decorating, curtain, carpet or furniture costs​.</li>
              <li>NO maintenance and repair costs.</li>
              <li>NO insurance or safety inspection costs​.</li>
            </ul>
          </AnimateSlide>

          <AnimateSlide>
            <p style={style.paraHead}>
              <b>4). How do the numbers work?</b>
            </p>
            <p>Illustrative property deal:</p>
            <ul>
              <li>£200,000 property.​</li>
              <li>Investor pays £106,000 (47% discount).</li>
              <li>
                Property value after 10 years = £296,049 (based on a modest 4%
                annual price growth).​
              </li>
              <li>Profit = £190,049 = 180% ROI = 18% annualised.</li>
            </ul>
          </AnimateSlide>

          <AnimateSlide>
            <p style={style.paraHead}>
              <b>5). How much do the investments cost?</b>
            </p>
            <p>
              Investment prices range from as little as £50,000 up to £250,000
            </p>
          </AnimateSlide>

          <AnimateSlide>
            <p style={style.paraHead}>
              <b>6). Where are the Properties?</b>
            </p>
            <ul>
              <li>
                Most are in the south east and on the south coast of the UK.
              </li>
              <li>
                There is strong demand for property in these areas and solid
                economic fundamentals which support positive price growth.
              </li>
              <li>
                These areas have seen an average 8% annual price growth over the
                last 10 years.
              </li>
              <li>Our projections are based on a modest 4% growth.</li>
            </ul>
          </AnimateSlide>

          <AnimateSlide>
            <p style={style.paraHead}>
              <b>7). What happens at the end of the tenancy?</b>
            </p>
            <p>
              The average tenancy lasts 10 years, after which the owner can:
            </p>
            <ul>
              <li>Sell the property.</li>
              <li>Rent it out.</li>
              <li>Move into it.</li>
              <li>Gift the property as part of IHT planning.</li>
            </ul>
            <br />
            <p>
              N.B. investments can be re-sold before the end of the tenancy
              period.
            </p>
          </AnimateSlide>

          <AnimateSlide>
            <p style={style.paraHead}>
              <b>8). How much effort is required from the investor?</b>
            </p>
            <p>
              Long-Term-Tenant is a fully managed ‘armchair’ investment with
              literally nothing for the investor to do other than enjoy the
              impressive returns
            </p>
          </AnimateSlide>

          <AnimateSlide>
            <p style={style.paraHead}>
              <b>9). Who is purchasing these investments?</b>
            </p>
            <p>Savvy investors who want…</p>
            <ul>
              <li>A better return on their cash in the bank.</li>
              <li>A safer asset class than the financial markets.</li>
              <li>To build wealth in UK property.</li>
              <li>To self-invest their pensions.</li>
              <li>
                To purchase property investments for their children and
                grandchildren.
              </li>
            </ul>
          </AnimateSlide>

          <AnimateSlide>
            <p style={style.paraHead}>
              <b>10). Why have I not heard of this strategy before?</b>
            </p>
            <p>
              The strategy has been operating for over 40 years and thousand's
              of property investments have been successfully purchased this way.
              Since Section 24 tax changes the strategy has become a lot more
              appealing and is now being promoted as a retail investment
              opportunity. Prior to this, these investments were only offered to
              the banks and financial institutions who bought them for their own
              balance sheets.
            </p>
          </AnimateSlide>
        </section>
      </div>
    </Layout>
  )
}

export default HowItWorks
