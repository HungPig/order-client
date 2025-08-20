import { Category, columns} from "./columns";
import { DataTable } from "./data-table";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/ui/site-header";

async function getData(): Promise<Category[]> {
  return [
    {
      id: "728ed52f",
      name: "Trà Sữa",
    },
    {
      id: "728ed53f",
      name: "Cà Phê",
    },
    {
      id: "728ed54f",
      name: "Trà Thái Xanh",
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col p-3">
          <h1 className="text-3xl font-bold tracking-tight">
            Product Categories
          </h1>
          <h2 className="text-sm text-muted-foreground">
            Home / Products / Categories
          </h2>

          <DataTable columns={columns} data={data} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
