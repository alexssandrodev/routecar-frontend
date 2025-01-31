import { Car } from "@/models/Car";
import { baseUrl } from "@/utils/url";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function useCars() {

  const [cars, setCars] = useState<Car[]>([]);

  const [message, setMessage] = useState<string>(''); const [responseStatus, setResponseStatus] = useState<boolean>(false);
  const [activeMessage, setActiveMessage] = useState<boolean>(false);

  const optionalMessage = responseStatus ? 'você está sendo redirecionado' : '';
  const router = useRouter();

  function handleActiveMessage() {
    setActiveMessage(true);
    setTimeout(() => {
      setActiveMessage(false);
    }, 10000);
  }

  function redirect(url: string, time: number) {
    setTimeout(() => {
      router.push(url);
    }, time);
  }

  async function createLaunch(car: Car) {
    try {
      const response = await fetch(`${baseUrl}/cars/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          car
        })
      });
      const data = await response.json();
      handleActiveMessage();
      if (data.statusCode === 500) {
        setMessage(data.message);
        setResponseStatus(response.ok);
        return;
      }
      setResponseStatus(response.ok);
      setMessage(data.message);
      redirect('/dashboard', 3000);
    } catch (error) {
      console.log(error);
    }
  }

  async function loadCars() {
    try {
      const response = await fetch(`${baseUrl}/cars/${'e07da146-452b-48da-a4dc-a8ecccb1376f'}`);
      const data = await response.json();
      setCars(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadCars();
  }, []);

  return {
    cars
  }

}

export { useCars }
