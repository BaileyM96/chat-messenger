import ApolloProviderClient from "../app/apolloProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApolloProviderClient>
          {children}
        </ApolloProviderClient>
      </body>
    </html>
  );
}


