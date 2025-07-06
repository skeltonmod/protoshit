<script lang="ts">
  import { ChevronLeft, ChevronRight, Check, Facebook } from 'lucide-svelte';
  
  // Accept navigation handlers as props
  interface Props {
    onNext?: () => void;
    onBack?: () => void;
  }
  
  let { onNext, onBack }: Props = $props();
  
  let securityQuestion = '';
  let securityAnswer = '';
  let recoveryEmail = '';
  let referralSource = '';

  const sections = [
    {
      title: "Login Account Setup",
      description:
        "This section collects the user's login credentials to create a secure account.",
    },
    {
      title: "Optional Additions",
      description:
        "These details help verify the user's identity and allow password recovery if needed.",
    },
    {
      title:
        "Referral Source - How Did You First Learn About or Hear of the Co-op?",
      description:
        "The information helps identify effective outreach channels and improve future marketing or community engagement efforts.",
    },
  ];

  const securityQuestions = [
    { value: 'question1', label: "What was your first pet's name?" },
    { value: 'question2', label: "What city were you born in?" },
    { value: 'question3', label: "What is your mother's maiden name?" }
  ];

  const referralOptions = [
    { value: 'friend', label: 'Friend or family' },
    { value: 'social', label: 'Social media' },
    { value: 'search', label: 'Search engine' },
    { value: 'event', label: 'Community event' }
  ];

  function handleBack() {
    onBack?.() || console.log('Back button clicked');
  }

  function handleNext() {
    onNext?.() || console.log('Next button clicked');
  }

  function handleFacebookSignup() {
    console.log('Facebook signup clicked');
  }
</script>

<div class="flex flex-col h-full items-start relative flex-1 grow bg-monochromegray-100">
  <!-- Scrollable content area -->
  <div class="flex-1 overflow-y-auto w-full">
    <div class="w-full py-[30px]"></div>

    <div class="flex flex-col items-start px-[100px] py-2.5 relative w-full">
      <div class="flex flex-col items-start w-full">
        <!-- Header -->
        <div class="flex items-start gap-2.5 px-2.5 py-0 w-full">
          <div class="flex w-full items-center gap-2.5">
            <h1 class="font-bold-24 text-black text-[length:var(--bold-24-font-size)] tracking-[var(--bold-24-letter-spacing)] leading-[var(--bold-24-line-height)]">
              Step 1. Set Up Your Account
            </h1>
          </div>
        </div>

        <div class="w-full h-[37px]"></div>

        <!-- Section 1: Login Account Setup -->
        <div class="w-full border-0 shadow-none bg-transparent">
          <div class="p-0">
            <div class="flex flex-col items-start gap-2.5 p-2.5 w-full border-b border-[#dddddd]">
              <p class="font-regular-14 text-greysgray-900 text-[length:var(--regular-14-font-size)] tracking-[var(--regular-14-letter-spacing)] leading-[var(--regular-14-line-height)]">
                {sections[0].description}
              </p>
            </div>

            <div class="w-full flex items-start gap-2.5">
              <div class="flex items-start gap-2.5 p-2.5 flex-1 rounded-[1px]">
                <h2 class="font-m3-title-medium text-black text-[length:var(--m3-title-medium-font-size)] tracking-[var(--m3-title-medium-letter-spacing)] leading-[var(--m3-title-medium-line-height)] whitespace-nowrap">
                  {sections[0].title}
                </h2>
              </div>
            </div>

            <!-- Facebook login -->
            <div class="w-full flex items-start py-[5px]">
              <div class="flex flex-col w-[221px] items-start gap-2.5 p-2.5">
                <label class="font-regular-14 text-black text-[length:var(--regular-14-font-size)] tracking-[var(--regular-14-letter-spacing)] leading-[var(--regular-14-line-height)]">
                  Link Facebook account
                </label>
              </div>

              <div class="flex h-[38px] items-center gap-2.5 py-2.5 flex-1">
                <button 
                  onclick={handleFacebookSignup}
                  class="flex items-center justify-center gap-2 px-3.5 py-2.5 bg-[#5382e7] rounded-lg text-monochromeplain-white hover:bg-[#4a75d1] transition-colors"
                >
                  <Facebook class="w-5 h-5" />
                  <span class="font-bold">Sign up with Facebook</span>
                </button>
              </div>
            </div>

            <!-- Username/Email -->
            <div class="w-full flex items-start py-[5px]">
              <div class="flex flex-col w-[221px] items-start gap-2.5 p-2.5">
                <label class="font-regular-14 text-black text-[length:var(--regular-14-font-size)] tracking-[var(--regular-14-letter-spacing)] leading-[var(--regular-14-line-height)]">
                  Username or email address
                </label>
              </div>

              <div class="relative flex-1">
                <div class="inline-flex h-[38px] items-center gap-2.5 p-2.5 bg-greysgray-100 rounded-[1px] border border-[#939185] w-[219px]">
                  <span class="font-regular-14 text-greysgray-900 text-[length:var(--regular-14-font-size)] tracking-[var(--regular-14-letter-spacing)] leading-[var(--regular-14-line-height)]">
                    gnaparan@bugemco.coop
                  </span>
                  <Check class="w-6 h-6 ml-auto" />
                </div>
              </div>

              <div class="w-[221px] h-8" />
            </div>

            <!-- Password -->
            <div class="w-full flex items-start py-[5px]">
              <div class="flex flex-col w-[221px] items-start gap-2.5 p-2.5">
                <label class="font-regular-14 text-black text-[length:var(--regular-14-font-size)] tracking-[var(--regular-14-letter-spacing)] leading-[var(--regular-14-line-height)]">
                  New password
                </label>
              </div>

              <div class="relative flex-1">
                <div class="inline-flex h-[38px] items-center gap-2.5 p-2.5 bg-greysgray-100 rounded-[1px] border border-[#939185] w-[219px]">
                  <span class="font-regular-14 text-greysgray-500 text-[length:var(--regular-14-font-size)] tracking-[var(--regular-14-letter-spacing)] leading-[var(--regular-14-line-height)]">
                    *************************
                  </span>
                  <Check class="w-6 h-6 ml-auto" />
                </div>
              </div>

              <div class="w-[221px] h-8"></div>
            </div>
          </div>
        </div>

        <div class="w-full h-[37px]"></div>

        <!-- Section 2: Optional Additions -->
        <div class="w-full border-0 shadow-none bg-transparent">
          <div class="p-0">
            <div class="flex flex-col items-start gap-2.5 p-2.5 w-full border-b border-[#dddddd]">
              <p class="font-regular-14 text-greysgray-900 text-[length:var(--regular-14-font-size)] tracking-[var(--regular-14-letter-spacing)] leading-[var(--regular-14-line-height)]">
                {sections[1].description}
              </p>
            </div>

            <div class="w-full flex items-start gap-2.5">
              <div class="flex items-start gap-2.5 p-2.5 flex-1 rounded-[1px]">
                <h2 class="font-m3-title-medium text-black text-[length:var(--m3-title-medium-font-size)] tracking-[var(--m3-title-medium-letter-spacing)] leading-[var(--m3-title-medium-line-height)] whitespace-nowrap">
                  {sections[1].title}
                </h2>
              </div>
            </div>

            <!-- Security Question -->
            <div class="w-full flex items-start py-[5px]">
              <div class="flex flex-col w-[221px] items-start gap-2.5 p-2.5">
                <label class="font-regular-14 text-black text-[length:var(--regular-14-font-size)] tracking-[var(--regular-14-letter-spacing)] leading-[var(--regular-14-line-height)]">
                  Security question
                </label>
              </div>

              <div class="flex-1">
                <select 
                  bind:value={securityQuestion}
                  class="h-[38px] w-[219px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-2.5 font-regular-14 text-greysgray-900"
                >
                  <option value="">Please select a question.</option>
                  {#each securityQuestions as question}
                    <option value={question.value}>{question.label}</option>
                  {/each}
                </select>
              </div>
            </div>

            <!-- Security Answer -->
            <div class="w-full flex items-start py-[5px]">
              <div class="flex flex-col w-[221px] items-start gap-2.5 p-2.5">
                <label class="font-regular-14 text-black text-[length:var(--regular-14-font-size)] tracking-[var(--regular-14-letter-spacing)] leading-[var(--regular-14-line-height)]">
                  Security answer
                </label>
              </div>

              <input 
                bind:value={securityAnswer}
                class="w-[219px] h-[38px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-2.5 font-regular-14 text-greysgray-900"
                type="text"
              />

              <div class="w-[221px] h-8" />
            </div>

            <!-- Recovery Email -->
            <div class="w-full flex items-start py-[5px]">
              <div class="flex flex-col w-[221px] items-start gap-2.5 p-2.5">
                <label class="font-regular-14 text-black text-[length:var(--regular-14-font-size)] tracking-[var(--regular-14-letter-spacing)] leading-[var(--regular-14-line-height)]">
                  Recovery email address
                </label>
              </div>

              <input 
                bind:value={recoveryEmail}
                class="w-[219px] h-[38px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-2.5 font-regular-14 text-greysgray-900"
                type="email"
              />

              <div class="w-[221px] h-8" />
            </div>
          </div>
        </div>

        <div class="w-full h-[37px]"></div>

        <!-- Section 3: Referral Source -->
        <div class="w-full border-0 shadow-none bg-transparent">
          <div class="p-0">
            <div class="flex flex-col items-start gap-2.5 p-2.5 w-full border-b border-[#dddddd]">
              <p class="font-regular-14 text-greysgray-900 text-[length:var(--regular-14-font-size)] tracking-[var(--regular-14-letter-spacing)] leading-[var(--regular-14-line-height)]">
                {sections[2].description}
              </p>
            </div>

            <div class="w-full flex items-start gap-2.5">
              <div class="flex items-start gap-2.5 p-2.5 flex-1 rounded-[1px]">
                <h2 class="font-m3-title-medium text-black text-[length:var(--m3-title-medium-font-size)] tracking-[var(--m3-title-medium-letter-spacing)] leading-[var(--m3-title-medium-line-height)] whitespace-nowrap">
                  {sections[2].title}
                </h2>
              </div>
            </div>

            <!-- How did you hear about us -->
            <div class="w-full flex items-start py-[5px]">
              <div class="flex flex-col w-[221px] items-start gap-2.5 p-2.5">
                <label class="font-regular-14 text-black text-[length:var(--regular-14-font-size)] tracking-[var(--regular-14-letter-spacing)] leading-[var(--regular-14-line-height)]">
                  How did you hear about us?
                </label>
              </div>

              <div class="flex-1">
                <select 
                  bind:value={referralSource}
                  class="h-[38px] w-[219px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-2.5 font-regular-14 text-greysgray-900"
                >
                  <option value="">Please select options below.</option>
                  {#each referralOptions as option}
                    <option value={option.value}>{option.label}</option>
                  {/each}
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- Add some bottom padding to ensure content doesn't get cut off -->
        <div class="w-full h-[20px]"></div>
      </div>
    </div>
  </div>

  <!-- Fixed footer with navigation buttons -->
  <footer class="flex h-[80px] items-center justify-between px-[100px] py-2.5 w-full bg-monochromegray-100 border-t border-gray-200">
    <div class="flex items-start p-2.5 flex-1">
      <button
        onclick={handleBack}
        class="flex items-center gap-2 px-3.5 py-2.5 bg-monochromegray-200 rounded-lg border border-gray-300 hover:bg-gray-300 transition-colors"
      >
        <ChevronLeft class="w-3 h-6" />
        <span class="font-bold-20 text-greysgray-900 text-[length:var(--bold-20-font-size)] tracking-[var(--bold-20-letter-spacing)] leading-[var(--bold-20-line-height)] whitespace-nowrap">
          Back
        </span>
      </button>
    </div>

    <div class="flex items-end justify-end p-2.5 flex-1">
      <button
        onclick={handleNext}
        class="flex items-center gap-2 px-3.5 py-2.5 bg-monochromegray-200 rounded-lg border border-gray-300 hover:bg-gray-300 transition-colors"
      >
        <span class="font-bold-20 text-greysgray-900 text-[length:var(--bold-20-font-size)] tracking-[var(--bold-20-letter-spacing)] leading-[var(--bold-20-line-height)] whitespace-nowrap">
          Next
        </span>
        <ChevronRight class="w-6 h-6" />
      </button>
    </div>
  </footer>
</div>