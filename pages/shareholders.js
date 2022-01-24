import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Logo from '../components/Logo';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Apple Together: Shareholder Vote Guide</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header>
        <Link passHref href="/">
            <h1 className={styles.logo}>
                <Logo />
                <span>Apple Together</span>
            </h1>
        </Link>
        <h2 className={styles.title}>Shareholder Vote Guide</h2>
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          <h3>Hello, Apple Shareholders!</h3>
          <span>(if you owned AAPL stock as of January 3rd 2022, that&apos;s you! Though it does not include any unvested RSUs you may have from the company, anything that is vested counts!)</span>
          <p>
            We&apos;d like to draw attention to the upcoming annual meeting of shareholders and the fact that you have a say in the matter.
          </p>
          <p>
            Before the meeting, shareholders can vote for or against a number of proposals coming from either the current Apple Board of Directors or shareholders themselves.
          </p>
          <p>
            To aid you in that process, we&apos;ve put together some information and some recommendations on voting, but urge each and everyone of you to do your own due diligence, to start the conversation with one another, to debate the merits, and follow your values when voting.
          </p>
          <p>
            There is no perfect choice in an imperfect world, but you can start sending a message today about your values. 
          </p>
          <h4>Meeting Info</h4>
          <p>
            <strong>2022 Annual Meeting of Shareholders</strong> <br />
            <strong>When:</strong> March 4, 2022, 9:00 A.M. Pacific Time  <br />
            <strong>Where:</strong> <a href="https://virtualshareholdermeeting.com/AAPL2022">virtualshareholdermeeting.com/AAPL2022</a>  <br />
            <strong>Who Can Vote:</strong> Shareholders of record at the close of business on January 3, 2022 <br />
            <strong>More info at:</strong> <a href="https://investor.apple.com/Proxy_Statement_2022">investor.apple.com/Proxy_Statement_2022</a> <br />
          </p>
          <h4>Voting Info and Recommendations</h4>
          <ol>
            <li><a href="#1">Board Director Nominees </a></li>
            <li><a href="#2">Ratification of Auditors </a></li>
            <li><a href="#3">Executive Compensation </a></li>
            <li><a href="#4">Approval of Employee Stock Plan 👍</a></li>
            <li><a href="#5">Social Purpose Corporation </a></li>
            <li><a href="#6">Revisions to Transparency Reports 👍</a></li>
            <li><a href="#7">Forced Labor Report 👍</a></li>
            <li><a href="#8">Pay Gaps Report 👍</a></li>
            <li><a href="#9">Civil Rights Audit 👍</a></li>
            <li><a href="#10">Concealment Clauses Risks Report 👍</a></li>
          </ol>
          <ul>
            <li>
                <a name="1" />
                <h5>Proposal 1: Board Director Nominees</h5>
                <strong>Proposal text:</strong> <a href="https://www.sec.gov/Archives/edgar/data/320193/000119312522003583/d222670ddef14a.htm#tx222670_32">View on sec.gov &gt;</a> <br />
                Apple&apos;s board recommends voting <strong>FOR</strong> the nomination of all. Workers disagree.
                <ol>
                    <li>
                        <h6>James Bell</h6>
                        <p>He was CFO and corporate president of Boeing between 2008 and 2011. Around the same time frame, according to Public Campaign, Boeing laid off more than 14k workers and increased executive pay by 31%. All of this was a decade ago and he wasn&apos;t the sole C-level of the company, but may still be something to keep an eye on.</p>

                        <p>Additionally, he is a board member of JPMorgan, which is the largest bank in the US as of Sep 2021 and also seems to be one of largest lenders to the fossil fuel industry in the world. Again, this doesn&apos;t necessarily impact Apple&apos;s environmental policies, but might be something to keep an eye on.</p>

                        <strong>Read more:</strong> <br />
                        <a href="https://en.wikipedia.org/wiki/Boeing#Criticism">wikipedia.org/wiki/Boeing</a> <br />
                        <a href="https://en.wikipedia.org/wiki/JPMorgan_Chase#Climate_change_and_investments_in_fossil_fuels">wikipedia.org/wiki/JPMorgan Chase</a>
                    </li>

                    <li>
                        <h6>Tim Cook</h6>
                        <p>Cook has built tremendous wealth for the company (and thus for some of you), but in light of recent concerns of Retail, AppleCare, and Corporate employees regarding working conditions, Cook has shown there are voices he is willing to ignore.  Is it time to send him a message?</p>

                        <strong>Read more:</strong> <br />
                        <a href="https://www.theverge.com/2022/1/20/22892855/apple-google-antitrust-legislation-tim-cook-sundar-pichai-lobbying">Tim Cook lobbying against antitrust legislation</a> <br />
                        <a href="https://www.ft.com/content/17ecb0a0-8e60-4d02-b1fc-f497c9e31331">Apple at $3tn: the enigma of Tim Cook</a> <br />
                        <a href="https://www.nytimes.com/2021/09/17/technology/apple-employee-unrest.html">Tim Cook Faces Employee Unrest</a> <br />
                        <a href="https://www.inc.com/jason-aten/tim-cooks-apple-is-facing-unthinkable-backlash-from-its-developers-employees-users-congress.html">Backlash against Tim Cook</a>
                    </li>

                    <li>
                        <h6>Al Gore</h6>
                        <p>We recommend voting <strong>FOR</strong> his nomination, as we hold out hope that Gore will continue to push for environmentally sound business practices to make Apple a more sustainable company.</p>

                        <strong>Read more:</strong> <br />
                        <a href="https://en.wikipedia.org/wiki/Al_Gore">wikipedia.org/wiki/Al Gore</a>
                    </li>

                    <li>
                        <h6>Alex Gorsky</h6>
                        <p>We recommend voting <strong>AGAINST</strong> his nomination. Gorsky knowingly defrauded children and the elderly through an illegal kickback scheme with nursing homes.</p>

                        <strong>Read more:</strong> <br />
                        <a href="https://www.forbes.com/sites/erikakelton/2012/04/17/new-jj-ceos-ties-to-fraud-case-show-jj-sees-no-need-for-a-cure/">J&amp;J needs a cure: new CEO allegedly had links to fraud</a> <br />
                        <a href="https://www.washingtonpost.com/wp-dyn/content/article/2010/01/15/AR2010011503903.html">Justice suit accuses Johnson &amp; Johnson of paying kickbacks</a> <br />
                        <a href="https://www.nytimes.com/2010/01/16/business/16drug.html">Johnson &amp; Johnson Accused of Drug Kickbacks</a> <br />
                        <a href="https://www.consumersafety.org/drug-lawsuits/risperdal/"> J&amp;J ran illegal marketing campaigns targeting both young and old individuals</a><br />
                        <a href="https://highline.huffingtonpost.com/miracleindustry/americas-most-admired-lawbreaker/">America&apos;s most admired lawbreaker</a>
                    </li>

                    <li>
                        <h6>Andrea Jung</h6>
                        <p>We recommend voting <strong>FOR</strong> her nomination.  While Jung&apos;s involvement with multi-level marketing (Avon) might be off-putting to some, we appreciate her commitment to advocating for ending domestic and gender based violence. We hope this commitment to gender equality will allow for less retaliation, and dare we hope active address, at Apple when it comes to pay disparity.</p>
                        <strong>Read more:</strong> <br />
                        <a href="https://charlierose.com/videos/11333">Andrea Jung&apos;s commitment to supporting victims of domestic violence.</a> <br />
                        <a href="https://www.futureswithoutviolence.org/teaming-up-with-avon-foundation-for-the-communications-x-change/">Teaming up with Avon Foundation for The Communications X-Change</a>
                    </li>

                    <li>
                        <h6>Art Levinson</h6>
                        <p>Levinson has been on the board for quite some time, so the considerations to weigh here mirror those with Tim Cook&apos;s.</p>

                        <strong>Read more:</strong> <br />
                        <a href="https://en.wikipedia.org/wiki/Arthur_D._Levinson">wikipedia.org/wiki/Arthur D. Levinson</a>
                    </li>

                    <li>
                        <h6>Monica Lozano</h6>
                        <p>We recommend voting <strong>FOR</strong> her nomination. Lozano has had a concerted interest in racial equity, immigration, and has some experience going against the grain to do what&apos;s right (like combating prejudice at the height of the AIDS epidemic).</p>

                        <strong>Read more:</strong> <br />
                        <a href="https://en.wikipedia.org/wiki/Monica_C._Lozano">wikipedia.org/wiki/Monica C. Lozano</a> <br />
                        <a href="https://cafundersforbmoc.org/member-spotlight-monica-lozano-president-ceo-of-college-futures-foundation/">Monica Lozano, President &amp; CEO of College Futures Foundation</a> <br />
                        <a href="https://www.calstate.edu/impact-of-the-csu/alumni/Honorary-Degrees/Pages/monica-c-lozano.aspx">Monica C. Lozano Honororary Degree CSU</a> 
                    </li>
                    
                    <li>
                        <h6>Ron Sugar</h6>
                        <p>We recommend voting <strong>AGAINST</strong> his nomination. Sugar is a director of Chevron and the chairman of Uber, another company with a long and illustrious history of overexploiting workers.</p>

                        <strong>Read more:</strong> <br />
                        <a href="https://www.bloomberg.com/news/articles/2018-08-01/uber-names-northrop-grumman-s-ronald-sugar-as-board-chairman">Uber Names Ex-Northrop CEO Sugar as Chairman After Yearlong Hunt</a> <br />
                        <a href="https://www.foxnews.com/story/ron-sugar-ceo-of-northrop-grumman">Ron Sugar, CEO of Northrop Grumman</a>
                    </li>

                    <li>
                        <h6>Sue Wagner</h6>
                        <p>We recommend voting <strong>AGAINST</strong> her nomination. She&apos;s the founder and current board member of BlackRock, which has had a slew of misconduct and corruption complaints. </p>

                        <strong>Read more:</strong> <br />
                        <a href="https://www.forbes.com/profile/susan-wagner/?sh=6b2abcd5462c">Forbes - Susan Wagner</a> <br />
                        <a href="https://www.theguardian.com/business/2019/may/21/blackrock-investor-climate-crisis-blackrock-assets">World&apos;s biggest investor accused of dragging feet on climate crisis</a> <br />
                        <a href="https://www.foxbusiness.com/markets/blackrock-hires-law-firm-for-internal-review-after-latest-executive-conduct-complaints">latest round of BlackRock executive conduct complaints</a> <br />
                        <a href="https://www.theyucatantimes.com/2020/09/blackrock-the-financial-giant-accused-of-corruption-and-environmental-damage-is-amlos-ally-on-the-mayan-train/">BlackRock, the financial giant accused of corruption and environmental damage</a> <br />
                        <a href="https://www.dw.com/en/blackrock-the-secret-world-power/a-18653761">BlackRock: The secret world power</a>
                    </li>
                </ol>
            </li>

            <li className={styles.neutral}>
                <a name="2" />
                <h5>Proposal 2: Ratification of Auditors</h5>
                <p>Apple&apos;s board recommends voting FOR the ratification of the appointment of Ernst &amp; Young LLP as Apple&apos;s independent registered public accounting firm for fiscal 2022.</p>

                <p>We have no recommendation on the matter.</p>

                <p><strong>Proposal text:</strong> <a href="https://www.sec.gov/Archives/edgar/data/320193/000119312522003583/d222670ddef14a.htm#tx222670_33">View on sec.gov &gt;</a></p>

                <strong>Read more:</strong> <br />
                <a href="https://news.bloombergtax.com/financial-accounting/big-four-lobby-sec-lawmakers-on-esg-reporting-audit-access">Big Four Lobby SEC, Lawmakers on ESG Reporting, Audit Access</a> <br />
                <a href="https://en.wikipedia.org/wiki/Ernst_%26_Young">wikipedia.org/wiki/Ernst &amp; Young</a>
            </li>

            <li className={styles.against}>
                <a name="3" />
                <h5>Proposal 3: Executive Compensation</h5>
                <p>Apple&apos;s board recommends voting FOR the approval of executive compensation. This is an advisory vote.</p>

                <p>We recommend voting <strong>AGAINST</strong> the approval. Tim Cook should <strong>not</strong> be making <strong>1,400 times</strong> the average Apple employee salary.</p>

                <p><strong>Proposal text:</strong> <a href="https://www.sec.gov/Archives/edgar/data/320193/000119312522003583/d222670ddef14a.htm#tx222670_34">View on sec.gov &gt;</a></p>

                <strong>Read more:</strong> <br />
                <a href="https://www.reuters.com/technology/apples-tim-cook-paid-over-1400-times-average-worker-2021-2022-01-07/">Tim Cook earned over 1,400 times the average Apple worker in 2021</a> <br />
                <a href="https://www.cnn.com/2021/08/27/investing/apple-ceo-tim-cook-shares-intl-hnk/index.html">Tim Cook gets $750 million bonus on 10th anniversary as Apple CEO</a><br />
                <a href="https://www.theverge.com/c/22807871/apple-frontline-employees-retail-customer-service-pandemic">Apple&apos;s frontline employees are struggling to survive</a><br />
                <a href="https://www.bloomberg.com/news/articles/2021-11-13/apple-to-pay-30-million-over-security-checks-for-store-workers">Apple to Pay $30 Million Over Store Workers&apos; Security Checks</a>
            </li>

            <li className={styles.for}>
                <a name="4" />
                <h5>Proposal 4: Approval of Employee Stock Plan</h5>
                <p>Apple&apos;s board recommends voting FOR the approval of the 2022 Employee Stock Plan.</p>

                <p>We recommend voting <strong>FOR</strong> the approval. Employees should keep the Employee Stock Purchase Plan (ESPP) and Restricted Stock Units (RSUs).</p>

                <p><strong>Proposal text:</strong> <a href="https://www.sec.gov/Archives/edgar/data/320193/000119312522003583/d222670ddef14a.htm#tx222670_35">View on sec.gov &gt;</a></p>

                <strong>Read more:</strong> <br />
                <a href="https://www.indeed.com/career-advice/career-development/employee-stock-purchase-plan#:~:text=An%20employee%20stock%20purchase%20plan%20(ESPP)%20is%20a%20benefit%20that,large%20investment%20in%20the%20company.">What is an employee stock purchase plan?</a> <br />
                <a href="https://www.computershare.com/us/news-insights/insights/service-news/nine-reasons-to-offer-an-employee-stock-purchase-plan">Nine Reasons to Offer an Employee Stock Purchase Plan</a><br />
                <a href="https://www.indeed.com/career-advice/career-development/rsu#:~:text=Advantages%20of%20RSUs,if%20you%20leave%20that%20company.">Advantages of RSUs</a>
            </li>

            <li className={styles.neutral}>
                <a name="5" />
                <h5>Proposal 5: Social Purpose Corporation</h5>
                <p>Apple&apos;s board recommends voting AGAINST this shareholder proposal entitled &quot;Reincorporate with Deeper Purpose.&quot;</p>

                <p>We don't have a recommendation on the approval.</p> 

                <p>We understand this one&apos;s a little &quot;pie in the sky&quot;, but the idea of codifying social values in the incorporation statement is promising. </p>
                
                <p>It also explicitly calls out that Apple needs to listen to workers&apos; voices, which we appreciate, but find that the necessary changes to make Apple ready to restructure as a SPC are among the other proposals listed, and need to be carried out before-hand.</p>
                
                <p><strong>Proposal text:</strong> <a href="https://www.sec.gov/Archives/edgar/data/320193/000119312522003583/d222670ddef14a.htm#tx222670_36">View on sec.gov &gt;</a></p>

                <strong>Read more:</strong> <br />
                <a href="https://www.ft.com/content/ac563017-a88f-4d41-8941-f35418e08309">Can capitalism change if company charters stay the same?</a> <br />
                <a href="https://www.lexology.com/library/detail.aspx?g=a066686b-a1c0-46d8-8f0c-088e14c15a87">Should You Form a Social Purpose Corporation?</a><br />
                <a href="https://nonprofitlawblog.com/california-social-purpose-corporation-an-overview/">California Social Purpose Corporation: An Overview</a><br />
                <a href="https://www.geekwire.com/2012/big-positives-washingtons-social-purpose-corporations/">What&apos;s positive about Washington&apos;s new Social Purpose Corporations</a><br />
                <a href="https://en.wikipedia.org/wiki/Social_purpose_corporation">wikipedia.org/wiki/Socia purpose corporation</a>
            </li>

            <li className={styles.for}>
                <a name="6" />
                <h5>Proposal 6: Revisions to Transparency Reports</h5>
                <p>Apple&apos;s board recommends voting AGAINST this shareholder proposal entitled &quot;Transparency Reports.&quot;</p>

                <p>We recommend voting <strong>FOR</strong> this proposal, which is about Chinese censorship and human rights, and calls for transparency in why Apple chooses to remove certain apps after the Chinese government asks them to. It is not only feasible, but if Apple believes in human rights, it is also obvious.</p>
                
                <p><strong>Proposal text:</strong> <a href="https://www.sec.gov/Archives/edgar/data/320193/000119312522003583/d222670ddef14a.htm#tx222670_36a">View on sec.gov &gt;</a></p>

                <strong>Read more:</strong> <br />
                <a href="https://www.theverge.com/2019/10/10/20907596/apple-hong-kong-protests-app-removed-china">Apple removes app used in Hong Kong protests after pressure from China</a> <br />
                <a href="https://www.nytimes.com/2021/05/17/technology/apple-china-censorship-data.html">Censorship, Surveillance and Profits: A Hard Bargain for Apple in China</a><br />
                <a href="https://www.bbc.com/news/technology-58921230">Apple takes down Quran app in China</a>
            </li>

            <li className={styles.for}>
                <a name="7" />
                <h5>Proposal 7: Forced Labor Report</h5>
                <p>Apple&apos;s board recommends voting AGAINST this shareholder proposal entitled &quot;Report on Forced Labor.&quot;</p>

                <p>We recommend voting <strong>FOR</strong> this proposal, as it is similar to the proposal above and adds considerations of Uyghur labour, among others. Again an obvious yes. We question Apple&apos;s commitment to human rights by recommending against this important proposal.</p>
                
                <p><strong>Proposal text:</strong> <a href="https://www.sec.gov/Archives/edgar/data/320193/000119312522003583/d222670ddef14a.htm#tx222670_36b">View on sec.gov &gt;</a></p>

                <strong>Read more:</strong> <br />
                <a href="https://www.washingtonpost.com/technology/2020/11/20/apple-uighur/">Apple is lobbying against a bill aimed at stopping forced labor in China</a> <br />
                <a href="https://www.businessinsider.com/apple-china-suppliers-uyghur-muslims-forced-labor-report-2021-5">7 Apple suppliers in China have links to forced labor programs</a><br />
                <a href="https://www.theverge.com/2021/5/10/22428899/apple-suppliers-china-uyghur-forced-labor-report">Apple suppliers linked to Uyghur forced labor in new report</a><br />
                <a href="https://www.washingtonpost.com/technology/2020/12/29/lens-technology-apple-uighur/">Apple&apos;s longtime supplier accused of using forced labor in China</a><br />
                <a href="https://www.forbes.com/sites/masonbissada/2021/12/22/sec-denies-apples-bid-to-block-shareholder-proposal-on-forced-labor/?sh=1f5e17e23133">SEC Denies Apple&apos;s Bid To Block Shareholder Proposal On Forced Labor</a>
            </li>

            <li className={styles.for}>
                <a name="8" />
                <h5>Proposal 8: Pay Gaps Report</h5>
                <p>Apple&apos;s board recommends voting AGAINST this shareholder proposal entitled &quot;Pay Equity.&quot;</p>

                <p>We recommend voting <strong>FOR</strong>, as it asks for transparency on pay equity, which Apple has repeatedly claimed it is committed to maintaining. This is a clear path to ensuring that is true, and accountability for any gaps.</p>
                
                <p><strong>Proposal text:</strong> <a href="https://www.sec.gov/Archives/edgar/data/320193/000119312522003583/d222670ddef14a.htm#tx222670_36c">View on sec.gov &gt;</a></p>

                <strong>Read more:</strong> <br />
                <a href="https://www.theverge.com/2021/8/23/22633141/apple-pay-equity-survey-results-wage-gap">Apple says it has pay equity, but an informal employee survey suggests otherwise</a> <br />
                <a href="https://www.nbcnews.com/tech/apple/apple-posts-internal-memo-affirming-employees-right-discuss-pay-rcna5777">Apple posts internal memo affirming employees&apos; right to discuss pay</a><br />
                <a href="https://qz.com/work/2054171/apple-reportedly-barred-an-employee-slack-channel-on-pay-equity/">Apple barred a pay equity channel on Slack</a><br />
                <a href="https://www.theverge.com/2021/12/9/22826620/apple-labor-cher-scarlett-settlement-nlrb-complaint">Former Apple employee won&apos;t withdraw labor board complaint</a>
            </li>

            <li className={styles.for}>
                <a name="9" />
                <h5>Proposal 9: Civil Rights Audit</h5>
                <p>Apple&apos;s board recommends voting AGAINST this shareholder proposal entitled &quot;Civil Rights Audit.&quot;</p>

                <p>We recommend voting <strong>FOR</strong>. This is a direct response to the Antonio García Martínez letter, data gathered in the pay equity surveys, and a lack of progress in diversifying its workforce, asking that Apple actually address what those movements were about.</p>
                
                <p><strong>Proposal text:</strong> <a href="https://www.sec.gov/Archives/edgar/data/320193/000119312522003583/d222670ddef14a.htm#tx222670_36d">View on sec.gov &gt;</a></p>

                <strong>Read more:</strong> <br />
                <a href="https://www.newsweek.com/apple-investors-call-proof-that-company-actively-diversifying-workforce-1661979">Apple Investors Call for Proof That Company Is Actively Diversifying Workforce</a> <br />                
                <a href="https://www.marketwatch.com/story/exclusive-apple-investors-call-for-civil-rights-audit-11640131895">Exclusive: Apple investors call for civil-rights audit</a><br />
                <a href="https://www.bloomberg.com/news/articles/2021-03-25/apple-faces-indian-engineer-s-bias-lawsuit-over-her-heritage">Apple Faces Silicon Valley&apos;s Second South Asian Bias Lawsuit</a><br />
                <a href="https://www.businessinsider.com/apple-employees-want-the-company-to-re-investigate-complaints-of-harassment-racism-2021-9">Apple employees want the company to re-investigate complaints of harassment, racism and abuse</a>
            </li>

            <li className={styles.for}>
                <a name="10" />
                <h5>Proposal 10: Concealment Clauses Risks Report</h5>
                <p>Apple&apos;s board recommends voting AGAINST this shareholder proposal entitled &quot;Report on Concealment Clauses.&quot;</p>

                <p>We recommend voting <strong>FOR</strong>, as it is a direct response to AppleToo and is the source of former Apple Employee&apos;s SEC filing.</p>

                <p>Apple uses concealment clauses in settlement agreements to prevent employees from speaking about their and their colleagues&apos; experiences. The proposal asks for a re-examination of that practice, since it puts the company at risk for getting sued and found criminally liable.</p>
                
                <p><strong>Proposal text:</strong> <a href="https://www.sec.gov/Archives/edgar/data/320193/000119312522003583/d222670ddef14a.htm#tx222670_36e">View on sec.gov &gt;</a></p>

                <strong>Read more:</strong> <br />
                <a href="https://www.marketwatch.com/story/sec-rejects-apples-argument-that-it-doesnt-try-to-silence-workers-after-former-employee-disputed-it-11640218188">SEC rejects Apple&apos;s argument that it doesn&apos;t try to silence workers after former employee disputed it</a> <br/>
                <a href="https://www.theverge.com/2021/9/8/22661536/apple-shareholder-resolution-change-nda-harassment-discrimination">Apple refuses to make NDA concessions for workplace harassment and discrimination</a> <br />
                <a href="https://www.cfo.com/risk-compliance/2021/12/sec-allows-apple-shareholder-vote-on-ndas/">SEC Allows Apple Shareholder Vote on NDAs</a>
            </li>
          </ul>
          <nav>
            <ul className={styles.nav}>
              <li className={styles.resources}>
                <Link href="/resources">Resources</Link>
              </li>
              <li className={styles.connect}>
                <Link href="/connect">Connect</Link>
              </li>
            </ul>
          </nav>
          <small className={styles.small}>
          <Link href="/shareholders">Shareholder Vote Guide</Link>  •  <a href="//appletoo.us/stories">#AppleToo Stories</a> • <a href="//appletoo.us/letter">#AppleToo Open Letter</a>
          </small>
        </div>
      </main>
    </div>
  )
}
