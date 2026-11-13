import { Link } from 'react-router-dom'

export default function Footer() {
  return (
<section className="footer-dark wf-section">
      <div className="container-2">
        <div className="footer-wrapper">
          <Link to="/" className="footer-brand w-inline-block"><img src="https://uploads-ssl.webflow.com/642aaea4ec2dcc5e5d00d195/642ab035972b9ee9eee8b640_Bitwyse%20Logo%20-wbg%202.png" width="132" alt="" /></Link>
          <div className="footer-content">
            <div className="footer-block">
              <div className="title-small">Company</div>
              <a href="#" onClick={(e) => e.preventDefault()} className="footer-link">How we work</a>
              <a href="#" onClick={(e) => e.preventDefault()} className="footer-link">Careers</a>
              <a href="#" onClick={(e) => e.preventDefault()} className="footer-link">Docs</a>
            </div>
            <div className="footer-block">
              <div className="title-small">Services</div>
              <a href="#" onClick={(e) => e.preventDefault()} className="footer-link">UX designs</a>
              <a href="#" onClick={(e) => e.preventDefault()} className="footer-link">Mobile App Development</a>
              <a href="#" onClick={(e) => e.preventDefault()} className="footer-link">Blockchain Development</a>
            </div>
            <div className="footer-block">
              <div className="title-small">About</div>
              <a href="#" onClick={(e) => e.preventDefault()} className="footer-link">Terms &amp; Conditions</a>
              <a href="#" onClick={(e) => e.preventDefault()} className="footer-link">Privacy policy</a>
              <div className="footer-social-block">
                <a href="#" onClick={(e) => e.preventDefault()} className="footer-social-link w-inline-block"><img src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124ac15112aad5_twitter%20small.svg" alt="" /></a>
                <a href="https://www.linkedin.com/company/bitwyse/" className="footer-social-link w-inline-block"><img src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a389912aad8_linkedin%20small.svg" alt="" /></a>
                <a href="#" onClick={(e) => e.preventDefault()} className="footer-social-link w-inline-block"><img src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a51bf12aae9_facebook%20small.svg" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-copyright-center">Copyright © 2023. Bitwyse Web Co</div>
    </section>
  )
}
