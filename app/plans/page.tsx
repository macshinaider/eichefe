"use client";
import Header from "@/components/header/Header";
import { IPlans } from "@/types/Plans";
import { useQuery } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FetchPlanos, queryClient } from "./Planos";

const Planos = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["plans"],
    queryFn: FetchPlanos,
  });

  console.log(data);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="">
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <section>
          <h1 className="text-4xl font-bold text-center mb-14">Planos</h1>
          <div className="md:flex gap-6  space-y-4 md:space-y-0">
            {data &&
              data.map((plano: IPlans) => (
                <div
                  key={plano.id}
                  className="flex flex-col bg-slate-700 h-80 shadow-md p-2 rounded gap-2"
                >
                  <h2 className="italic text-center text-orange-500 text-4xl">
                    {plano.plans}
                  </h2>
                  <p>{plano.description}</p>{" "}
                  <div className="flex flex-col justify-center items-center">
                    {plano.cardapio ? (
                      <div className="flex gap-2">
                        <span className="flex">Cardapio Digital:</span>
                        <FaCheck color="#1f1f" />
                      </div>
                    ) : (
                      <div className="flex gap-2 items-center">
                        <span className="flex">Cardapio Digital:</span>
                        <IoCloseSharp
                          color="#ff1111"
                          className="flex text-center items-center justify-center"
                        />
                      </div>
                    )}
                    {plano.cozinha ? (
                      <div className="flex gap-2">
                        <span className="flex">Tela Cozinha:</span>
                        <FaCheck color="#1f1f" />
                      </div>
                    ) : (
                      <div className="flex gap-2 items-center">
                        <span className="flex">Tela Cozinha:</span>
                        <IoCloseSharp
                          color="#ff1111"
                          className="flex text-center items-center justify-center"
                        />
                      </div>
                    )}
                    {plano.garcon ? (
                      <div className="flex gap-2">
                        <span className="flex">Tela Garcon:</span>
                        <FaCheck color="#1f1f" />
                      </div>
                    ) : (
                      <div className="flex gap-2 items-center">
                        <span className="flex">Tela Garcon:</span>
                        <IoCloseSharp
                          color="#ff1111"
                          className="flex text-center items-center justify-center"
                        />
                      </div>
                    )}
                    {plano.whatsapp ? (
                      <div className="flex gap-2">
                        <span className="flex">Atendimento Whatsapp:</span>
                        <FaCheck color="#1f1f" />
                      </div>
                    ) : (
                      <div className="flex gap-2 items-center">
                        <span className="flex">Atendimento Whatsapp:</span>
                        <IoCloseSharp
                          color="#ff1111"
                          className="flex text-center items-center justify-center"
                        />
                      </div>
                    )}
                  </div>
                  <p className="flex items-center justify-center mb-9 text-lg">{`Valor: R$: ${Number(
                    plano.valor
                  ).toFixed(2)}`}</p>
                  <button className="flex bg-emerald-600 items-center justify-center rounded h-14 hover:bg-emerald-400">
                    Assinar
                  </button>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Planos;
