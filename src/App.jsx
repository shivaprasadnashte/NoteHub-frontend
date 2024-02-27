import { useState } from "react"
import GrpBar from "./components/GrpBar"
import Notespage from "./components/Notespage"
import PocketNotes from "./components/PocketNotes"
import Model from "./components/models"

function App() {
  const [open, setOpen] = useState(false)
  const [openGrp, setOpenGrp] = useState(false)
    return (
        <>
            <div className=" h-screen flex">
                <GrpBar open={ open} setOpen={ setOpen} openGrp={openGrp} setOpenGrp={setOpenGrp} />
                {/* <PocketNotes /> */}
                <Model open={open} setOpen={setOpen}/>
                <Notespage  openGrp={openGrp} setOpenGrp={setOpenGrp} />
            </div>
        </>
    )
}

export default App
