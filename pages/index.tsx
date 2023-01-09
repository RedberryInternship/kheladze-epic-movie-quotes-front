import { LandingHeader, LandingQuote, RedBtn, Register } from "components";

import { useState } from "react";

export default function Home() {
  const [LoginModal, setLoginModal] = useState(false);
  const [singUpModal, setSingUpModal] = useState(false);

  return (
    <div className="bg-neutral-900">
      <LandingHeader />
      <Register />
      <div className="h-screen flex flex-col items-center justify-center md:gap-8">
        <header className="text-orangeWhite font-bold text-2xl md:text-6xl text-center">
          Find any quote in <br /> millions of movie lines
        </header>
        <RedBtn label="Get started" />
      </div>
      <LandingQuote
        background={"bg-interstellar"}
        quote="You have to leave somethig behind to go forward"
        movie="Interstellar, 2014"
      />
      <LandingQuote
        background={"bg-tenenbaum"}
        quote="I think we are just gonna have to be secretly in love with earch other and leave it that"
        movie="The Royal Tenenbaums, 2001"
      />
      <LandingQuote
        background={"bg-rings"}
        quote="I see in your eyes the same fear that would take the heart of me...."
        movie="The Lord of the Rings, 2003"
      />
    </div>
  );
}
