import { MenuAdmin } from "@/app/components/admin/MenuAdmin";

type AdminPostLayoutProps = {
  children: React.ReactNode;
};

export default function AdminPostLayout({
  children,
}: Readonly<AdminPostLayoutProps>) {
  return <>
  <MenuAdmin />
  {children}
  </>;
}
