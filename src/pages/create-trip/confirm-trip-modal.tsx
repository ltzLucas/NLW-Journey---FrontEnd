import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps{
    closeConfirmTripModal:() => void
    createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({
    closeConfirmTripModal,
    createTrip} 
    : ConfirmTripModalProps){
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-5 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
                <button onClick={closeConfirmTripModal}> <X className="size-5 text-zinc-400"/></button>
              </div>
              <p className="text-sm text-zinc-400">
              Para concluir a criação da viagem para <span className="text-zinc-100 font-semibold">Florianópolis, Brasil</span > nas datas de <span className="text-zinc-100 font-semibold">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
              </p>
            
            </div>

            <form onSubmit={createTrip} className="space-y-3">
                <div className="px-4 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <User className="size-5 text-zinc-400"/>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Seu nome completo" 
                    className="text-md placeholder-zinc-400 bg-transparent outline-none flex-1" />
                </div>

                <div className="px-4 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <Mail className="size-5 text-zinc-400"/>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Seu e-mail pessoal" 
                    className="text-md placeholder-zinc-400 bg-transparent outline-none flex-1" />
                </div>

                <button type="submit" className="flex items-center justify-center gap-2 bg-lime-300 text-lime-950 text-md font-semibold rounded-lg px-5 h-10 hover:bg-lime-400 w-full">
                  Confirmar criação da viagem
                </button>
            </form>
          </div>
        </div>
    )
}