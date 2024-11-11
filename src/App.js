import axios from "axios";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:6001/register", {
        name,
        email,
        recipientEmail,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="p-4">
      <h1 className="bg-blue-500 text-white p-4 mb-4 rounded-lg text-2xl font-bold mb-4 text-center">
        Visitors Management
      </h1>
      <div>
        <p className="text-red-500 text-center">
          **Enter your user name, email, and recipient email to let everyone know you are here
        </p>
      </div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white bg-opacity-50 focus:outline-none focus:bg-opacity-100 p-2 rounded-md mb-4 border border-gray-300"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white bg-opacity-50 focus:outline-none focus:bg-opacity-100 p-2 rounded-md mb-4 border border-gray-300"
        />
        <input
          type="email"
          placeholder="Recipient Email"
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
          className="bg-white bg-opacity-50 focus:outline-none focus:bg-opacity-100 p-2 rounded-md mb-4 border border-gray-300"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;