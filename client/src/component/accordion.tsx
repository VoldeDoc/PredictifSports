
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

export function AccordionBody() {
  return (
    <Accordion>
      <AccordionPanel>
        <AccordionTitle>Is Aspox suitable for my type of business?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
           Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est magni dolores eos qui ratione
          </p>
          
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel>
        <AccordionTitle>Can I get a customized solution for my business?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            FNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est magni dolores eos qui ratione
          </p>
          
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel>
        <AccordionTitle>How secure is Aspox for payment processing?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est magni dolores eos qui ratione
          </p>
        
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>How do I contact Aspox for more information?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est magni dolores eos qui ratione
          </p>
        
        </AccordionContent>
      </AccordionPanel>

    </Accordion>
  );
}
