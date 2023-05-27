import '@/styles/globals.css'

import { SessionProvider } from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

// import React, { useEffect } from "react";
// import { createRoot } from "react-dom/client";
// import MyComponent from "@/components/mycom[ppo";

// const App = () => {
//   useEffect(() => {
//     const root = createRoot(document.getElementById("root"));
//     root.render(<MyComponent />);
//   }, []); // Empty dependency array to ensure it only runs once on initial render

//   return <div id="root" />;
// };

// export default App;