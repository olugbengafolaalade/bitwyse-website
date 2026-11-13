import { useEffect, useRef } from 'react'

const SCRIPT_SRC = 'https://js-eu1.hsforms.net/forms/embed/v2.js'
const CONFIG = { region: 'eu1', portalId: '25328438', formId: 'b805d3ea-6b22-41dc-8de0-b9c86a9d8b64' }

function loadScript() {
  if (window.hbspt) return Promise.resolve()
  return new Promise((resolve, reject) => {
    let s = document.querySelector(`script[src="${SCRIPT_SRC}"]`)
    if (!s) {
      s = document.createElement('script')
      s.src = SCRIPT_SRC
      s.charset = 'utf-8'
      document.body.appendChild(s)
    }
    s.addEventListener('load', resolve)
    s.addEventListener('error', reject)
  })
}

export default function HubspotForm() {
  const ref = useRef(null)
  useEffect(() => {
    let cancelled = false
    const el = ref.current
    loadScript()
      .then(() => {
        if (cancelled || !el || el.childElementCount) return
        window.hbspt.forms.create({ ...CONFIG, target: `#${el.id}` })
      })
      .catch(() => {})
    return () => {
      cancelled = true
      if (el) el.innerHTML = ''
    }
  }, [])
  return <div id="hubspot-form" ref={ref} className="w-embed" />
}
