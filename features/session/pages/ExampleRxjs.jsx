import { useEffect, useState } from "react";
import sharingInformationService from "services/sharingInformation"


const ExampleRxjs = () => {

  const [count, setCount] = useState(0);
  const subscription$ = sharingInformationService.getSubject();

  useEffect(() => {
    console.log("render")
    subscription$.subscribe(data => {
      console.log({data})
      setCount(val => val + 1);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <div>ExampleRxjs count: {count} </div>
  )
}
export default ExampleRxjs