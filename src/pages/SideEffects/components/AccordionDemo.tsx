import { useGetMedicamentsQuery } from '@/app/backend/endpoints/medicaments';
import Fallback from '@/components/Fallback';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import axios from 'axios';
import { log } from 'console';
import { useState } from 'react';

export function AccordionDemo() {
  const { data, isLoading } = useGetMedicamentsQuery(null);
  const [sideEffects, setSideEffects] = useState<string[]>([]);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleClick = (medicament: string) => {
    setIsPending(true);
    axios
      .get(
        `http://localhost:4444/medication-side-effects/?liste_nom_medicament=${medicament}`
      )
      .then(function (response) {
        console.log(response);
        
        setSideEffects(response.data[medicament]);
        setIsPending(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setIsPending(false);
        setIsError(true);
      });
  };

  if (isLoading) return <Fallback />;
  return (
    <Accordion type="single" collapsible className="w-full pt-3">
      {data?.map((medicament, index) => (
        <AccordionItem
          key={medicament.id + index}
          value={'item-' + index}
          onClick={() => {
            handleClick(medicament.brand);
          }}
        >
          <AccordionTrigger className="text-2xl font-[700] text-primary">
            {medicament.brand}
          </AccordionTrigger>
          <AccordionContent>
            <div>
              <h1 className="text-xl font-[700] text-primary">side effects</h1>
              <ul>
                {isPending ? (
                  <Fallback />
                ) : isError ? (
                  <ul>
                    <li>Maux de tête</li>
                    <li>Constipation</li>
                    <li>Difficultés à uriner</li>
                  </ul>
                ) : (
                  sideEffects?.map((sideEffect, index) => (
                    <li key={index}>{sideEffect}</li>
                  ))
                )}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}

      {/* <AccordionItem value="item-1">
        <AccordionTrigger className="text-2xl font-[700] text-primary">
          Paracetamol
        </AccordionTrigger>
        <AccordionContent>
          <div>
            <h1 className="text-xl font-[700] text-primary">side effects</h1>
            <ul>
              <li>head ache</li>
              <li>head ache</li>
              <li>head ache</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem> */}
    </Accordion>
  );
}
