import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full pt-3">
        <AccordionItem value="item-1">
          <AccordionTrigger  className="text-2xl font-[700] text-primary" >Paracetamol</AccordionTrigger>
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
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger  className="text-2xl font-[700] text-primary" >Doliprane</AccordionTrigger>
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
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger  className="text-2xl font-[700] text-primary" >Lyrica</AccordionTrigger>
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
        </AccordionItem>
      </Accordion>
    )
  }
  