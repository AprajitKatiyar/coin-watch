import { useSelector, useDispatch } from "react-redux";
import { addData } from "@/redux/slices/cryptoDataSlice";
import { useEffect, useState } from "react";
export default function Home() {
  const items = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState("");
  const cryptos = ["BTC", "ETH", "GRIN"];
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
  const handleSelectChange = (event) => {
    setSelectedCrypto(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="h-screen w-full flex-col items-center justify-center p-10 relative">
      <select
        id="site"
        className="p-2 bg-[#E8E8E8] w-[50] my-2 focus:outline-none focus:shadow-md border shadow-md border-gray-300 text-gray-900 text-sm"
        value={selectedCrypto}
        onChange={handleSelectChange}
      >
        <option value="">Select a site</option>
        {cryptos.map((crypto, index) => (
          <option key={index} value={crypto}>
            {crypto}
          </option>
        ))}
      </select>

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
              .filter((data: any) => data.code === selectedCrypto)
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
