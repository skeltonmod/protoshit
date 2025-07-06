<script lang="ts">
  import { Calendar, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-svelte';
  
  // Accept navigation handlers as props
  interface Props {
    onNext?: () => void;
    onBack?: () => void;
    onSkip?: () => void;
  }
  
  let { onNext, onBack, onSkip }: Props = $props();
  
  let firstName = $state('');
  let middleName = $state('');
  let lastName = $state('');
  let suffix = $state('');
  let dateOfBirth = $state('');
  let gender = $state('');
  let civilStatus = $state('');
  let tin = $state('');
  let nationality = $state('');
  let religion = $state('');
  let placeOfBirth = $state('');

  function handleSkip() {
    onSkip?.() || console.log('Skip step');
  }

  function handleBack() {
    onBack?.() || console.log('Go back');
  }

  function handleNext() {
    onNext?.() || console.log('Go to next step');
  }

  function handleUploadPhoto() {
    console.log('Upload photo');
  }
</script>

<section class="flex flex-col h-full bg-monochromegray-100">
  <!-- Scrollable content area -->
  <div class="flex-1 overflow-y-auto">
    <div class="h-[111.26px]"></div>

    <div class="flex flex-col px-[100px] py-2.5">
      <div class="flex flex-col w-full">
        <header class="flex items-center justify-between gap-2.5 px-2.5">
          <div class="flex items-center w-[730px] gap-2.5">
            <h1 class="font-bold-24 text-black">
              Step 2. Personal Information
            </h1>
          </div>

          <button
            onclick={handleSkip}
            class="flex items-center gap-2.5 bg-monochromegray-200 rounded-[10px] h-auto py-2 px-4 hover:bg-monochromegray-300 transition-colors"
          >
            <span class="font-regular-10 text-black whitespace-nowrap">
              Skip this step
            </span>
            <ChevronRight class="w-[18px]" />
          </button>
        </header>

        <div class="h-[37px]"></div>

        <div class="border-0 shadow-none">
          <div class="p-2.5 border-b border-[#dddddd]">
            <p class="font-regular-14 text-greysgray-900">
              This information will not be displayed publicly, as it will be
              collected and managed privately by the registration owner.
            </p>
          </div>
        </div>

        <div class="flex w-full gap-2.5">
          <div class="flex flex-col gap-2.5">
            <div class="flex flex-col">
              <div class="flex">
                <label class="p-2.5 font-m3-title-medium text-black whitespace-nowrap">
                  First Name
                </label>
              </div>
              <div class="px-2.5">
                <input
                  bind:value={firstName}
                  class="w-[430px] h-[34px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div class="flex flex-col">
              <div class="flex">
                <label class="p-2.5 font-m3-title-medium text-black whitespace-nowrap">
                  Middle Name
                </label>
              </div>
              <div class="px-2.5">
                <input
                  bind:value={middleName}
                  class="w-[430px] h-[34px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div class="flex items-start gap-2.5 p-2.5 flex-1">
            <div class="flex flex-col items-end gap-2.5 p-2.5 flex-1">
              <div class="w-[120px] h-[120px] rounded-full bg-gray-200 flex items-center justify-center">
                <img
                  class="w-[120px] h-[120px]"
                  alt="User profile"
                  src="/tdesign-user-circle-filled.svg"
                />
              </div>
            </div>

            <div class="flex flex-col justify-center gap-2.5 flex-1">
              <div class="flex flex-col justify-end gap-2.5 px-2.5 flex-1">
                <button
                  onclick={handleUploadPhoto}
                  class="bg-monochromegray-200 rounded-lg border border-gray-300 px-4 py-2 hover:bg-monochromegray-300 transition-colors"
                >
                  <span class="font-regular-14 text-greysgray-900">
                    Upload Photo
                  </span>
                </button>
              </div>

              <div class="p-2.5">
                <p class="font-regular-14 text-greysgray-500">
                  Upload a file or drag and drop<br />
                  PNG, JPG, GIF up to 10 MB
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="flex">
            <label class="p-2.5 flex-1 font-m3-title-medium text-black whitespace-nowrap">
              Last Name
            </label>
            <label class="p-2.5 flex-1 font-m3-title-medium text-black whitespace-nowrap">
              Suffix (if any)
            </label>
          </div>
          <div class="flex px-2.5 gap-2.5">
            <input
              bind:value={lastName}
              class="w-[430px] h-[34px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div class="relative">
              <select
                bind:value={suffix}
                class="w-[103.75px] h-[34px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-3 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="jr">Jr.</option>
                <option value="sr">Sr.</option>
                <option value="ii">II</option>
                <option value="iii">III</option>
                <option value="iv">IV</option>
              </select>
              <ChevronDown class="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="flex">
            <label class="p-2.5 w-[221px] font-m3-title-medium text-black whitespace-nowrap">
              Date of Birth
            </label>
            <label class="p-2.5 w-[205px] font-m3-title-medium-emphasized text-black whitespace-nowrap">
              Gender
            </label>
            <label class="p-2.5 flex-1 font-m3-title-medium text-black whitespace-nowrap">
              Civil Status
            </label>
          </div>
          <div class="flex px-2.5 gap-2.5">
            <div class="relative w-[184px]">
              <input
                bind:value={dateOfBirth}
                type="date"
                class="h-[34px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-3 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Calendar class="absolute right-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>

            <div class="w-4"></div>

            <div class="relative">
              <select
                bind:value={gender}
                class="w-[162px] h-[34px] bg-greysgray-200 rounded-[1px] border border-[#939185] px-3 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown class="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>

            <div class="w-[35px]"></div>

            <div class="relative">
              <select
                bind:value={civilStatus}
                class="w-[194px] h-[34px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-3 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
              <ChevronDown class="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="flex">
            <label class="p-2.5 flex-1 font-m3-title-medium text-black whitespace-nowrap">
              Tax Identification No. (TIN)
            </label>
            <label class="p-2.5 flex-1 font-m3-title-medium text-black whitespace-nowrap">
              Nationality
            </label>
          </div>
          <div class="flex px-2.5 gap-2.5">
            <input
              bind:value={tin}
              class="flex-1 h-[34px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              bind:value={nationality}
              class="flex-1 h-[34px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div class="flex flex-col">
          <div class="flex">
            <label class="p-2.5 flex-1 font-m3-title-medium-emphasized text-black whitespace-nowrap">
              Religion
            </label>
            <label class="p-2.5 flex-1 font-m3-title-medium text-black whitespace-nowrap">
              Place of Birth
            </label>
          </div>
          <div class="flex px-2.5 gap-2.5">
            <input
              bind:value={religion}
              class="flex-1 h-[34px] bg-greysgray-200 rounded-[1px] border border-[#939185] px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              bind:value={placeOfBirth}
              class="flex-1 h-[34px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <!-- Add some bottom padding to ensure content doesn't get cut off -->
        <div class="h-[37px]"></div>
      </div>
    </div>
  </div>

  <!-- Fixed footer with navigation buttons -->
  <footer class="flex h-[80.92px] items-center justify-between px-[100px] py-2.5 bg-monochromegray-100 border-t border-gray-200">
    <div class="flex p-2.5">
      <button
        onclick={handleBack}
        class="flex items-center gap-2 bg-monochromegray-200 rounded-lg px-4 py-2 border border-gray-300 hover:bg-monochromegray-300 transition-colors"
      >
        <ChevronLeft class="w-3 h-6" />
        <span class="font-bold-20 text-greysgray-900 whitespace-nowrap">
          Back
        </span>
      </button>
    </div>

    <div class="flex p-2.5 justify-end">
      <button
        onclick={handleNext}
        class="flex items-center gap-2 bg-monochromegray-200 rounded-lg px-4 py-2 border border-gray-300 hover:bg-monochromegray-300 transition-colors"
      >
        <span class="font-bold-20 text-greysgray-900 whitespace-nowrap">
          Next
        </span>
        <ChevronRight class="w-6 h-6" />
      </button>
    </div>
  </footer>
</section>