import { useSelector, useDispatch } from "react-redux";
import { addData } from "@/redux/slices/cryptoDataSlice";
import { useEffect, useState } from "react";
export default function Home() {
  const items = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const [socket, setSocket] = useState<WebSocket | null>(null);
  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:3000");
    newSocket.onopen = () => {
      console.log("Connection established");
      newSocket.send("Hello Server!");
    };
    newSocket.onmessage = (message) => {
      dispatch(addData(JSON.parse(message.data)));
    };
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);
  console.log(items.cryptoData);
  return <div></div>;
}
