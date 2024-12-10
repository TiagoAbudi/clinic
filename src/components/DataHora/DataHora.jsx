import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function DataHora() {
  const [dias, setDias] = useState([
    { dia: "Segunda-Feira", fechado: false, horarios: [] },
    { dia: "Terça-Feira", fechado: false, horarios: [] },
    { dia: "Quarta-Feira", fechado: false, horarios: [] },
    { dia: "Quinta-Feira", fechado: false, horarios: [] },
    { dia: "Sexta-Feira", fechado: false, horarios: [] },
    { dia: "Sábado", fechado: false, horarios: [] },
    { dia: "Domingo", fechado: false, horarios: [] },
  ]);

  const handleFechado = (event, dia) => {
    setDias((prevDias) =>
      prevDias.map((d) =>
        d.dia === dia.dia ? { ...d, fechado: event.target.checked } : d
      )
    );
  };

  const handleAddHorario = (dia) => {
    const horaInicio = document.getElementById(`inicio-${dia.dia}`).value;
    const horaFim = document.getElementById(`fim-${dia.dia}`).value;

    if (!horaInicio || !horaFim) {
      alert("Por favor, preencha tanto o horário de início quanto o de fim.");
      return;
    }

    const novoHorario = { inicio: horaInicio, fim: horaFim };

    // Adiciona o horário à lista de horários do dia
    setDias((prevDias) =>
      prevDias.map((d) =>
        d.dia === dia.dia ? { ...d, horarios: [...d.horarios, novoHorario] } : d
      )
    );

    // Limpa os campos de horário após adicionar
    document.getElementById(`inicio-${dia.dia}`).value = "";
    document.getElementById(`fim-${dia.dia}`).value = "";
  };

  const handleRemoveHorario = (dia, horario) => {
    const novosHorarios = dia.horarios.filter(
      (h) => h.inicio !== horario.inicio || h.fim !== horario.fim
    );

    setDias((prevDias) =>
      prevDias.map((d) =>
        d.dia === dia.dia ? { ...d, horarios: novosHorarios } : d
      )
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["TimePicker"]}>
        <div className="h-screen overflow-auto p-4">
          {dias.map((dia) => (
            <div
              key={dia.dia}
              className="flex items-center space-x-4 select-none mb-4"
            >
              <div className="flex gap-2 w-full items-center">
                <div className="flex-shrink-0 w-32">
                  <h1 className="font-raleway text-sm">{dia.dia}</h1>
                  <div className="flex-grow flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="fechado"
                      checked={dia.fechado}
                      className="mx-2 cursor-pointer"
                      onChange={(e) => handleFechado(e, dia)}
                    />
                    <label htmlFor="fechado" className="font-raleway">
                      Fechado
                    </label>
                  </div>
                </div>

                <div
                  className="flex-grow"
                  style={{
                    display: dia.fechado ? "none" : "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="px-5 gap-1 flex items-center select-none mb-2">
                    <TimePicker
                      label="Abre à(s): "
                      ampm={false}
                      slotProps={{
                        textField: {
                          required: true,
                          id: `inicio-${dia.dia}`,
                        },
                      }}
                      className="mx-5 w-40 font-raleway"
                    />
                    <TimePicker
                      label="Fecha à(s): "
                      ampm={false}
                      slotProps={{
                        textField: {
                          required: true,
                          id: `fim-${dia.dia}`,
                        },
                      }}
                      className="w-40 font-raleway"
                    />
                    <PlusIcon
                      aria-hidden="true"
                      className="size-6 cursor-pointer mx-3"
                      onClick={() => handleAddHorario(dia)}
                    />
                  </div>

                  {dia.horarios.length > 0 && (
                    <div className="mt-4">
                      {dia.horarios.map((horario, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between my-2 px-5"
                        >
                          <span>{`Início: ${horario.inicio} | Fim: ${horario.fim}`}</span>
                          <TrashIcon
                            aria-hidden="true"
                            className="size-6 cursor-pointer mx-3"
                            onClick={() => handleRemoveHorario(dia, horario)}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
}
