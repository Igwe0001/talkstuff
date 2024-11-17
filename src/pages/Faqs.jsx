import React from "react";

const Faqs = () => {
  return (
    <main className="w-full font-inter" id="Terms">
      <div className="h-[250px] md:h-[350px] bg-blueButton w-full flex items-center justify-center">
        <h1 className="text-white text-center text-3xl lg:text-[50px] font-bold">
          FAQ
        </h1>
      </div>
      <div className="py-10 px-3 max-w-5xl mx-auto">
        <div>
          <h1 className="text-blueButton mb-10 font-bold text-3xl lg:text-[30px] text-center">
            Frequently Asked Question
          </h1>
          <div className="my-5 w-full">
            <div className="w-full rounded-lg overflow-hidden mb-5">
              <div className="p-5 bg-gray-700 text-white md:text-xl">
                What is TalkStuff, and how is it different from other messaging
                apps?
              </div>
              <div className="p-5 bg-blueButton text-white md:text-xl">
                TalkStuff is an all-in-one chat app that combines various
                functionalities, such as messaging, dating, shopping, and ad
                promotion services, all within a single, user-friendly
                interface. Unlike traditional messaging platforms, TalkStuff
                offers a seamless and efficient experience without the need to
                switch between multiple apps.
              </div>
            </div>
            <div className="w-full rounded-lg overflow-hidden mb-5">
              <div className="p-5 bg-gray-700 text-white md:text-xl">
                How can I download TalkStuff?
              </div>
              <div className="p-5 bg-blueButton text-white md:text-xl">
                You can download TalkStuff from the App Store or Google Play
                Store. Simply search for “TalkStuff” and click on the “Download”
                button. Once installed, create an account, and you’re ready to
                explore the app’s features.
              </div>
            </div>
            <div className="w-full rounded-lg overflow-hidden mb-5">
              <div className="p-5 bg-gray-700 text-white md:text-xl">
                What makes TalkStuff a lifestyle platform?
              </div>
              <div className="p-5 bg-blueButton text-white md:text-xl">
                TalkStuff is more than just a messaging app; it’s a lifestyle
                platform. You can chat and make calls, stay informed with the
                latest news, access local services, and even play games.
              </div>
            </div>
            <div className="w-full rounded-lg overflow-hidden mb-5">
              <div className="p-5 bg-gray-700 text-white md:text-xl">
                What is SupaMall, and how can I use it?
              </div>
              <div className="p-5 bg-blueButton text-white md:text-xl">
                SupaMall is an online store integrated into TalkStuff that
                offers products and services. You can explore a variety of
                items, make purchases, and even promote your business through
                the app’s ad promotion services.
              </div>
            </div>
            <div className="w-full rounded-lg overflow-hidden mb-5">
              <div className="p-5 bg-gray-700 text-white md:text-xl">
                Tell me more about the Feeds feature.
              </div>
              <div className="p-5 bg-blueButton text-white md:text-xl">
                The Feeds feature on TalkStuff shows suggested posts based on
                your interests, the people you follow, and current trends. It’s
                a dynamic way to discover new content and stay engaged with the
                latest updates.
              </div>
            </div>
            <div className="w-full rounded-lg overflow-hidden mb-5">
              <div className="p-5 bg-gray-700 text-white md:text-xl">
                How user-friendly is the design of TalkStuff?
              </div>
              <div className="p-5 bg-blueButton text-white md:text-xl">
                Navigating through TalkStuff is easy and hassle-free thanks to
                its intuitive and user-friendly design. Enjoy a smooth
                experience as you explore the app’s diverse features and
                services.
              </div>
            </div>
            <div className="w-full rounded-lg overflow-hidden mb-5">
              <div className="p-5 bg-gray-700 text-white md:text-xl">
                How does the Explore feature work for finding love matches and
                meeting people with similar interests?
              </div>
              <div className="p-5 bg-blueButton text-white md:text-xl">
                The Explore feature allows you to find potential matches and
                connect with people who share similar interests. It enhances
                your social experience by introducing you to new connections and
                expanding your network.
              </div>
            </div>
            <div className="w-full rounded-lg overflow-hidden mb-5">
              <div className="p-5 bg-gray-700 text-white md:text-xl">
                How does the ad promotion service on TalkStuff work for
                businesses and individuals?
              </div>
              <div className="p-5 bg-blueButton text-white md:text-xl">
                TalkStuff’s ad promotion service enables businesses and
                individuals to reach a broader audience. You can create and
                manage ads within the app, targeting specific demographics to
                maximize the impact of your message or product.
              </div>
            </div>
            <div className="w-full rounded-lg overflow-hidden mb-5">
              <div className="p-5 bg-gray-700 text-white md:text-xl">
                WAre there any in-app purchases in TalkStuff?
              </div>
              <div className="p-5 bg-blueButton text-white md:text-xl">
                While TalkStuff offers a free version with basic features, there
                may be optional in-app purchases for premium features or virtual
                items. You can find details about these within the app’s
                settings.
              </div>
            </div>
            <div className="w-full rounded-lg overflow-hidden mb-5">
              <div className="p-5 bg-gray-700 text-white md:text-xl">
                Can I make voice and video calls on TalkStuff?
              </div>
              <div className="p-5 bg-blueButton text-white md:text-xl">
                Absolutely! TalkStuff supports voice and video calls, allowing
                you to connect with friends and family worldwide. Simply
                navigate to the Calls section in the app and start making high
                quality calls.
              </div>
            </div>
            <div className="w-full rounded-lg overflow-hidden mb-5">
              <div className="p-5 bg-gray-700 text-white md:text-xl">
                How can I share my experiences or content on TalkStuff?
              </div>
              <div className="p-5 bg-blueButton text-white md:text-xl">
                You can share your experiences and content by posting in the
                Feeds section. Create engaging posts, add images or videos, and
                share your thoughts with the TalkStuff community. Your posts may
                appear in Feeds based on user engagement and relevance.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Faqs;
