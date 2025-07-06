<script lang="ts">
  import Sidebar from "$lib/components/Sidebar.svelte";
  import MembershipOverviewSection from "$lib/screens/MembershipOverviewSection.svelte";
  import ApplicationOverviewSection from "$lib/screens/ApplicationOverviewSection.svelte";
  
  let activeSection = $state("applications");
  
  function handleSectionChange(section: string) {
    activeSection = section;
  }
</script>

<svelte:head>
  <title>Dashboard - {activeSection === "applications" ? "Manage Members" : "Membership Overview"}</title>
  <meta
    name="description"
    content="Membership dashboard with overview and analytics"
  />
</svelte:head>

<main
  class="flex w-full h-screen items-start justify-center bg-monochromewhite"
>
  <div class="w-full max-w-[1440px] bg-monochromewhite flex flex-row h-full">
    <div class="w-[12%]"></div>
    <div class="w-[15%] h-full">
      <Sidebar onSectionChange={handleSectionChange} activeSection={activeSection} />
    </div>
    <div class="w-[60%] h-full overflow-hidden">
      {#if activeSection === "applications"}
        <ApplicationOverviewSection />
      {:else if activeSection === "overview"}
        <MembershipOverviewSection />
      {/if}
    </div>
    <div class="w-[13%]"></div>
  </div>
</main>