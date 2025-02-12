import { Car } from "@/models/Car";
import { baseUrl } from "@/utils/url";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function useCars() {

  const [cars, setCars] = useState<Car[]>([]);


  const [message, setMessage] = useState<string>('');
  const [responseStatus, setResponseStatus] = useState<boolean>(false);
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

  async function registerCar(file: File, car: Car) {
    try {
      const responseImage = await fetch(`${baseUrl}/car-image`, {
        method: 'POST',
        body: file
      });

      const dataImage = await responseImage.json();

      handleActiveMessage();
      if (dataImage.statusCode === 500) {
        setMessage(dataImage.message);
        setResponseStatus(responseImage.ok);
        return;
      }
      setResponseStatus(responseImage.ok);
      setMessage(dataImage.message);

      const response = await fetch(`${baseUrl}/cars/7cfb24a7-9af1-4b08-a60a-09438e573ab7`, {
        method: 'POST', headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJlMDdkYTE0Ni00NTJiLTQ4ZGEtYTRkYy1hOGVjY2NiMTM3NmYiLCJuYW1lIjoiUm91dGUgQ2FyIiwiZW1haWwiOiJyb3V0ZWNhckBnbWFpbC5jb20iLCJ0ZWwiOiI5OTY0NTIzNTQiLCJhZGRyZXNzIjp7InN0cmVldCI6IkF2LiBTw6NvIGdvbsOnYWxvIiwiaG9tZU51bWJlciI6MjMwLCJkaXN0cmljdCI6IkNhcGltIG1hY2lvIiwiY2l0eSI6Ik5hdGFsIFJOIn0sInN0YXJ0SG91ciI6IjgiLCJlbmRIb3VyIjoiMTciLCJpYXQiOjE3MzgxNDg2NDksImV4cCI6MTczODc1MzQ0OX0.UTiXp6qoCRafVfBTbRGaJ7AtH-JqUlArpFihXu-Vf1o',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image_id: dataImage.imageId,
          model: car.model,
          characteristics: car.characteristics,
          price: car.price,
          year: car.year,
          kilometer: car.kilometer,
          fuel: car.fuel,
          condition: car.condition
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
      const response = await fetch(`
      ${baseUrl}/cars/${'7cfb24a7-9af1-4b08-a60a-09438e573ab7'}`);
      const data = await response.json();
      if (data) {
        setCars(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadCars();
  }, []);

  return {
    cars,
    registerCar,
    loadCars,
    message,
    activeMessage,
    responseStatus
  }

}

export { useCars }
