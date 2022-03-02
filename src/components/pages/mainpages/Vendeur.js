import Navbar from "../nav/Navbar"
import BarLat from "../nav/BarLat"
import VendeurContent from "../content/VendeurContent"
import Footers from "../foot/Footers"

function Vendeur() {
  return (
      <>
          <Navbar />
          <BarLat />
          <VendeurContent />
          <Footers />
      </>
  )
}

export default Vendeur