import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loader } from "components/Loader";
import { DarkMode } from "sancho";
import { BaseRoutes } from "@/routes/BaseRoutes";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  /* uri: "https://kittengram-server.glitch.me/", */
  uri: "https://test-server-o.glitch.me/",
});

export const App: React.FC<{}> = () => {
  const status = useSelector((state: any) => state.app.status);
  const isAuth = useSelector((state: any) => state.user.isAuth);

  return (
    <div>
      <DarkMode>
        {status === "loading" ? (
          <Loader />
        ) : (
          <ApolloProvider client={client}>
            <BrowserRouter>
              <BaseRoutes isAuth={isAuth} />
            </BrowserRouter>
          </ApolloProvider>
        )}
      </DarkMode>
    </div>
  );
};
