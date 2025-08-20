import { AppBarChart } from "@/components/app-barchar";
import { AppSidebar } from "@/components/app-sidebar";
import { SectionCards } from "@/components/section-card";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/ui/site-header";

export default function Page() {
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
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <AppBarChart />
              </div>
              <div className="grid auto-rows-min gap-4 md:grid-cols-3 lg:px-6">
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
              </div>
            </div>
          </div>
        </div>
        ;
      </SidebarInset>
    </SidebarProvider>
  );
}


