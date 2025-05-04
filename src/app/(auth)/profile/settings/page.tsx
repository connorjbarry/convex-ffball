import { ThemeToggle } from "@/components/theme/ThemeToggle";

export default function ProfileSettingsPage() {
  return (
    <section className="m-4">
      <div className="flex flex-col gap-4 m-4">
        <div className="grid grid-cols-1">
          <div className="col-span-1 p-4 rounded-lg flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold">Appearance</h2>
              <span className="text-sm text-muted-foreground">
                Customize how the app looks and feels
              </span>
            </div>
            <div className="border-t border-muted-foreground/10 p-2" />
            <div className="flex items-center justify-between p-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Theme</h3>
                <span className="text-sm text-muted-foreground">
                  Choose your color theme
                </span>
              </div>

              <ThemeToggle useIconsOnly={false} />
            </div>
            <div className="border-t border-muted-foreground/10 p-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
