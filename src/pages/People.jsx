import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'

export default function People() {
  usePageTitle("Bitwyse People Page")
  return (
    <>
<section className="team-circles wf-section"><div className="container-2"><h2 className="centered-heading">Our People</h2><p className="centered-subheading">Our team members have decades of experience building startups and working with corporate clients across various sectors.</p><div className="team-grid"><div id="w-node-_6a7992eb-5388-9a4d-8119-49f17deacd29-369599b9" className="team-card"><img src="https://uploads-ssl.webflow.com/642aaea4ec2dcc5e5d00d195/642db02357c7ba26b1a28c48_Ade%20Fola-Alade.jpg" loading="lazy" alt="" className="team-member-image" /><div className="team-member-name">Ade Fola-Alade</div><div className="team-member-position">Founder</div></div></div></div></section>
    </>
  )
}
