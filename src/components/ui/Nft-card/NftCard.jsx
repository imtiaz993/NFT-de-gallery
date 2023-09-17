import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./nft-card.css";
import web3 from "../../../web3/web3.js";
import NFTDeGallery from "../../../contractAbi/NFTDeGallery.js";
import Modal from "../Modal/Modal";

const NftCard = (props) => {
  const { title, id, currentBid, creatorImg, imgUrl, creator } = props.item;

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="single__nft__card">
      <div className="nft__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="nft__content">
        <h5 className="nft__title">
          <Link to={`/market/${id}`}>{title}</Link>
        </h5>

        <div className="creator__info-wrapper d-flex gap-3">
          <div className="creator__img">
            <img src={creatorImg} alt="" className="w-100" />
          </div>

          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Created By</h6>
              <p>{creator}</p>
            </div>

            {/* <div>
              <h6>Current Bid</h6>
              <p>{currentBid} ETH</p>
            </div> */}
          </div>
        </div>

        <div className=" mt-3 d-flex align-items-center justify-content-between">
          <button
            className="bid__btn d-flex align-items-center gap-1"
            // onClick={() => setShowModal(true)}
            onClick={async () => {
              const accounts = await web3.eth.getAccounts();
              await NFTDeGallery.methods.purchaseNFT("0x4e4D26d87c2D0FaA6ef9b600ae138360E85DB3FE").send({
                from: accounts[0],
                value: web3.utils.toWei(String(0.0001), "ether"),
              });
            }}
          >
            <i class="ri-shopping-bag-line"></i> Buy
          </button>

        

          {/* <span className="history__link">
            <Link to="#">View History</Link>
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default NftCard;