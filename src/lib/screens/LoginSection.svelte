<script lang="ts">
  const steps = [
    {
      number: "Step 1",
      title: "Set up your account",
      active: true,
    },
    {
      number: "Step 2",
      title: "Personal information",
      active: false,
    },
    {
      number: "Step 3",
      title: "Contact Information",
      active: false,
    },
    {
      number: "Step 4",
      title: "Educational background",
      active: false,
    },
    {
      number: "Step 5",
      title: "Family information",
      active: false,
    },
    {
      number: "Step 6",
      title: "Employment/business data",
      active: false,
    },
    {
      number: "Steps completed",
      title: "Account temporarily created!",
      active: false,
    },
  ];
  export let currentStep: number = 1;
</script>

<div class="flex w-full md:w-[360px] h-screen items-start relative self-stretch border-0 rounded-none">
  <div class="flex h-full items-start relative flex-1 grow bg-greysgray-900 p-0">
    <div class="relative self-stretch w-[45px]"></div>

    <div class="flex flex-col items-start relative flex-1 self-stretch grow">
      <!-- Logo section - reduced height -->
      <div class="flex flex-col h-[120px] items-start justify-center gap-2.5 p-2.5 relative self-stretch w-full">
        <div class="relative w-[49px] h-[48.12px]">
          <div class="relative h-12">
            <img
              class="absolute w-[46px] h-[45px] top-0.5 left-0.5"
              alt="Vector"
              src="/vector-2.svg"
            />
            <img
              class="absolute w-[49px] h-12 top-0 left-0"
              alt="Vector"
              src="/vector-1.svg"
            />
          </div>
        </div>
      </div>

      <!-- Steps navigation - reduced height and spacing -->
      {#each steps as step, index}
        <!-- Step item - reduced height -->
        <div
          class="flex h-[35px] items-center px-2.5 py-0 relative self-stretch w-full {index === (currentStep - 1) ? '' : 'opacity-25'}"
        >
          <div class="flex flex-col w-[36.88px] items-start px-0 py-1 relative self-stretch">
            <img
              class="relative flex-1 w-[24px] grow"
              alt="Step indicator"
              src="/ph-seal-fill.svg"
            />
          </div>
          <div class="flex flex-col items-start justify-center gap-1 p-2.5 relative flex-1 self-stretch grow">
            <div class="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
              <div class="relative w-fit font-regular-10 font-[number:var(--regular-10-font-weight)] text-white text-[length:var(--regular-10-font-size)] tracking-[var(--regular-10-letter-spacing)] leading-[var(--regular-10-line-height)] whitespace-nowrap">
                {step.number}
              </div>
            </div>
            <div class="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
              <div class="relative w-fit font-regular-14 font-[number:var(--regular-14-font-weight)] text-white text-[12px] tracking-[var(--regular-14-letter-spacing)] leading-tight">
                {step.title}
              </div>
            </div>
          </div>
        </div>

        <!-- Connector line (except after the last step) - reduced height -->
        {#if index < steps.length - 1}
          <div
            class="flex h-[25px] items-center px-2.5 py-0 relative self-stretch w-full {step.active ? '' : 'opacity-25'}"
          >
            <div class="flex flex-col w-[36.88px] items-start justify-center px-3.5 py-1 relative self-stretch">
              <img
                class="relative w-0.5 h-[40px]"
                alt="Connector line"
                src="/line-1.svg"
              />
            </div>
            <div class="relative flex-1 self-stretch grow"></div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>