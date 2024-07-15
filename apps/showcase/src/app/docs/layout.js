import Menu from "@/components/layouts/menu";

export const metadata = {
  title: "Docs",
  description: "Generated by create next app",
};

export default function DocsLayout ({ children }) {
    return (
      <div className='layout-content'>
        <Menu className='layout-sidebar'/>
        <div className="layout-content-slot">
          {children}
        </div>
      </div>
  );
}
