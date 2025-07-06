<script lang="ts">
  import Button from "$lib/components/ui/Button.svelte";
  import { LayoutDashboard, FileText, Users, Settings, LogOut, User } from "lucide-svelte";

  // Accept props for section change handling
  interface Props {
    onSectionChange?: (section: string) => void;
    activeSection?: string;
  }
  
  let { onSectionChange, activeSection = "applications" }: Props = $props();

  const navigationItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      section: "overview",
      path: "/dashboard",
    },
    {
      icon: Users,
      iconSrc: "/identify.svg",
      label: "Members",
      section: "applications",
      path: "/members",
    },
    {
      icon: FileText,
      label: "Reports",
      section: "reports",
      path: "/reports",
    },
    {
      icon: Users,
      label: "Users",
      section: "users",
      path: "/users",
    },
    {
      icon: Settings,
      label: "Settings",
      section: "settings",
      path: "/settings",
    },
    {
      icon: LogOut,
      label: "Sign out",
      section: "signout",
      path: "/signout",
    },
  ];

  function handleNavItemClick(section: string) {
    if (onSectionChange) {
      onSectionChange(section);
    }
  }
</script>

<aside class="flex h-full w-[283px] bg-greysgray-900">
  <div class="flex flex-col w-full">
    <!-- Logo section -->
    <div class="flex items-center justify-center h-[100px] px-5 py-2.5">
      <img class="w-[49px] h-[48.12px]" alt="Logo" src="/group.png" />
    </div>

    <!-- Navigation items -->
    <nav class="flex flex-col gap-2.5 px-5 py-2.5">
      {#each navigationItems as item}
        <Button
          variant="ghost"
          class="flex justify-start gap-2.5 h-[50px] w-full rounded-[10px] px-2.5 {item.section === activeSection
            ? 'bg-monochromeblack text-monochromeplain-white'
            : 'text-monochromeplain-white opacity-50 hover:opacity-80 hover:bg-monochromeblack/50'}"
          on:click={() => handleNavItemClick(item.section)}
        >
          <span class="flex items-center justify-center w-[36.88px]">
            {#if item.icon}
              <item.icon class="h-6 w-6" />
            {:else if item.iconSrc}
              <img class="h-6 w-6" alt={item.label} src={item.iconSrc} />
            {/if}
          </span>
          <span class="font-regular-14 text-sm">{item.label}</span>
        </Button>
      {/each}
    </nav>
  </div>
</aside>