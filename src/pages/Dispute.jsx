import React from "react";

const Dispute = () => {
  return (
    <main className="w-full font-inter" id="Terms">
      <div className="h-[250px] md:h-[350px] bg-blueButton w-full flex items-center justify-center">
        <h1 className="text-white text-center text-3xl lg:text-[50px] font-bold">
          Disputes and Resolutions
        </h1>
      </div>
      <div className="py-10 px-3 max-w-5xl mx-auto">
        <div>
          <h1 className="text-blueButton font-bold text-xl">
            Governing Law and Dispute Resolution
          </h1>
          <p className="text-textGrey pt-4">
            As regards any dispute relating in any way to your use of any
            TalkStuff Service, or to any products or services sold or
            distributed by TalkStuff, the Party does hereby covenant that he/she
            shall not commence or maintain any suit against TalkStuff whether at
            law or in equity, but Parties shall use all reasonable endeavors to
            settle any dispute or difference of opinion between them, arising
            from or in connection with this Agreement amicably through mutual
            discussion.
          </p>
          <p className="text-textGrey pt-4">
            If the dispute cannot be resolved by mutual discussions within
            fourteen (14) days from the date of notice, such dispute or claim
            will be resolved by binding arbitration, rather than in court. The
            decision by the arbitrator shall be final.
          </p>
          <p className="text-textGrey pt-4">
            Each party shall provide his/her arbitrator at their own cost. Both
            arbitrators shall agree on a neutral arbitrator whose decision will
            be final. The fee for the Neutral arbitrator shall be shared equally
            by both parties.
          </p>
          <p className="text-textGrey pt-4">
            The Arbitration shall be carried out by the provisions of the
            Arbitration and Conciliation Act Cap A18 Laws of the Federation 2004
            or any amendment or re-enactment thereof. The Arbitration shall take
            place in FCT Abuja, Nigeria, and be conducted in English Language.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Dispute;
