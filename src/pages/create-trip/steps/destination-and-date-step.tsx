import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepProps{
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsInput: () => void
}

export function DestinationAndDateStep({
    closeGuestsInput,
    isGuestsInputOpen,
    openGuestsInput}
    : DestinationAndDateStepProps){
    return(
        <div className="flex items-center h-16 px-4 rounded-xl bg-zinc-900 shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400"/>
              <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="text-lg placeholder-zinc-400 bg-transparent outline-none flex-1" />
            </div>
            <div className="flex items-center gap-2 ">
              <Calendar className="size-5 text-zinc-400"/>
              <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="text-lg placeholder-zinc-400 bg-transparent w-40 outline-none"/>
            </div>
            
            <div className="w-px h-6 bg-zinc-800" />

            {isGuestsInputOpen ? (
              
              <Button onClick={closeGuestsInput} variant="secondary" size="default">
                Alterar local/data
                <Settings2 className="size-5" />
              </Button>
            ) :(
              <Button onClick={openGuestsInput} variant="primary" size="default">
                Continuar
                <ArrowRight className="size-5" />
              </Button>
            )
            }
          </div>
    )
}