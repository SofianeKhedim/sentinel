import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import Radio from '@/assets/radio.svg' 
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-primary">Scan_12/02/2023</AccordionTrigger>
          <AccordionContent>
           <img src={Radio} alt="" className="rounded-lg" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-primary">Image_28/1/2023</AccordionTrigger>
          <AccordionContent>
          <img src={Radio} alt="" className="rounded-lg" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-primary">Image_28/1/2023</AccordionTrigger>
          <AccordionContent>
          <img src={Radio} alt="" className="rounded-lg" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  