import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode}) => {
  return (
    <main className="root-container">
            <div className="mt-1 pb-20">{children}</div>
    </main>
  )
}

export default Layout