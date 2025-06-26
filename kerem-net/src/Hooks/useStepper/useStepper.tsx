import { useCallback, useState } from "react";

const useStepper = () => {
  const [activeStep, setCounter] = useState(0);
  const addOneToCounter = () => setCounter((c) => c + 1);
  const nextStep = useCallback(addOneToCounter, []);
  const previousStep = useCallback(() => setCounter((c) => c - 1), []); 
  const resetStep = useCallback(() => setCounter(0), []);

  return { activeStep, nextStep, resetStep, previousStep};
};

export default useStepper;
