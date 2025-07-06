<script lang="ts">
  import LoginSection from "$lib/screens/LoginSection.svelte";
  import AccountSetupSection from "$lib/screens/AccountSetupSection.svelte";
  import PersonalInformationSection from "$lib/screens/PersonalInformationSection.svelte";
  import ContactInformationSection from "$lib/screens/ContactInformationSection.svelte";

  let currentStep = $state(1);

  function handleNext() {
    if (currentStep < 3) {
      currentStep++;
      console.log(`Moving to step ${currentStep}`);
    } else {
      console.log("All steps completed");
    }
  }

  function handleBack() {
    if (currentStep > 1) {
      currentStep--;
      console.log(`Moving back to step ${currentStep}`);
    } else {
      console.log("Already at first step");
    }
  }

  function handleSkip() {
    handleNext(); // Skip just moves to next step
  }
</script>

<div class="flex flex-col items-start bg-white">
  <main class="flex w-full items-start justify-center bg-monochromewhite">
    <div class="flex w-[1440px] h-screen items-start bg-monochromewhite">
      <LoginSection {currentStep} />
      {#if currentStep === 1}
        <AccountSetupSection onNext={handleNext} onBack={handleBack} />
      {:else if currentStep === 2}
        <PersonalInformationSection
          onNext={handleNext}
          onBack={handleBack}
          onSkip={handleSkip}
        />
      {:else if currentStep === 3}
        <ContactInformationSection
          onNext={handleNext}
          onBack={handleBack}
          onSkip={handleSkip}
        />
      {/if}
    </div>
  </main>
</div>
