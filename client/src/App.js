import abi from "./contract/chai.json";
import { useState } from "react";
import { ethers } from "ethers";
import Buy from "./components/Buy";
import Memos from "./components/Memos";
import { Route, Routes,Link } from "react-router-dom";
import { toast } from 'react-toastify';
import "./App.css";

function App() {
  const notifyA = (msg) => toast.error(msg);
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState(null);
    const connectWallet = async () => {
      const contractAddress = "0xA2892102b1a91bF5FBE4426175AfDE831B06778E";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          notifyA('Please install and log in to Metamask wallet to initiate the transaction.');
        }
      } catch (error) {
        notifyA(error);
      }
    };
  return (
    <>
    {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Link</Link>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success" onClick={connectWallet} disabled={account} type="submit">{account ? account : "Connect"}</button>
            </form>
          </div>
        </div>
      </nav>
    <Routes>
        <Route exact path='/' state={state} element={<Buy />} />
        <Route exact path='/users' state={state} element={<Memos />} />
     </Routes> */}
     
    <h1>hello</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quae sequi blanditiis?</p>
    </>
  );
}

export default App;
