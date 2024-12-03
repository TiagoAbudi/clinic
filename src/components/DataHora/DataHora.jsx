import { useState, useEffect, useRef } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

export default function DataHora() {
  const [mostra, setMostra] = useState()

  const dias = [
    {
      dia: 'Segunda-Feira',
      quantidade: 3,
      fechado: false
    },
    {
      dia: 'Terça-Feira',
      quantidade: 1,
      fechado: true
    },
    {
      dia: 'Quarta-Feira',
      quantidade: 1,
      fechado: false
    },
    {
      dia: 'Quinta-Feira',
      quantidade: 1,
      fechado: false
    },
    {
      dia: 'Sexta-Feira',
      quantidade: 1,
      fechado: false
    },
    {
      dia: 'Sábado',
      quantidade: 1,
      fechado: false
    },
    {
      dia: 'Domingo',
      quantidade: 1,
      fechado: false
    }
  ]

  const handleFechado = (event, dia) => {
    console.log(dias[dias.indexOf(dia)].fechado);
    // setDias(dias[dias.indexOf(dia)].fechado = event.target.checked)
  }

  const handleAddHorario = event => {

  }

  const handleRemoveHorario = event => {

  }

  const HorariosAdicionais = quantidade => {
    for (let index = 0; index < quantidade; index++) {
      return (
        <div className="px-5 my-1 gap-1 flex items-center">
          <TimePicker label="Abre à(s): " ampm={false} className="mx-5 w-40 font-raleway" />
          <TimePicker label="Fecha à(s): " ampm={false} className="w-40 font-raleway" />
          <TrashIcon aria-hidden="true" className="size-6 cursor-pointer mx-3" />
        </div>
      )
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <div>
          {dias.map((dia) => (
            <div key={dia.dia} className="flex space-x-* select-none" style={{ width: "540px", marginBottom: "10px" }}>
              <div className="flex gap-2">
                <div>
                  <h1 className="font-raleway">{dia.dia}</h1>
                  <input type="checkbox" name="fechado" id="fechado" checked={dia.fechado} className="mx-2 cursor-pointer" onClick={() => handleFechado(event, dia)} />
                  <label htmlFor="fechado" className="font-raleway">Fechado</label>
                </div>

                <div className="" style={{ display: !dia.fechado ? "" : "none" }}>
                  <div className="px-5 gap-1 flex items-center select-none">
                    <TimePicker label="Abre à(s): " ampm={false} className="mx-5 w-40 font-raleway" />
                    <TimePicker label="Fecha à(s): " ampm={false} className="w-40 font-raleway" />
                    <PlusIcon aria-hidden="true" className="size-6 cursor-pointer mx-3" onClick={handleAddHorario} />
                  </div>
                  {dia.quantidade > 1 ?
                    <HorariosAdicionais quantidade={dia.quantidade} /> :
                    <></>
                  }
                </div>
              </div>
            </div>
          ))}











        </div>
      </DemoContainer>
    </LocalizationProvider >
  );
}
