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
  return (
    <div className="h-screen w-full flex items-center justify-center p-10">
      <div className="max-h-96 overflow-y-auto w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 shadow-lg border rounded-sm flex-1">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900  bg-gray-200"></caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Cryptocurrency
              </th>
              <th scope="col" className="px-6 py-3">
                Current Price (USD)
              </th>
            </tr>
          </thead>
          <tbody>
            {items.cryptoData
              .filter((data: any) => data.code === "ETH")
              .map((data, index) => (
                <tr key={index} className="bg-white border-b  cursor-pointer">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {data.code}
                  </th>
                  <td className="px-6 py-4">{data.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
