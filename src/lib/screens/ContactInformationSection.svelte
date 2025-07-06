<script lang="ts">
  import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-svelte';
  
  // Accept navigation handlers as props
  interface Props {
    onNext?: () => void;
    onBack?: () => void;
    onSkip?: () => void;
  }
  
  let { onNext, onBack, onSkip }: Props = $props();
  
  let currentAddress = '';
  let barangay = '';
  let municipality = '';
  let province = '';
  let zipCode = '';
  let permanentAddress = '';
  let permanentBarangay = '';
  let permanentMunicipality = '';
  let permanentProvince = '';
  let permanentZipCode = '';
  let sameAsCurrentAddress = $state(false);

  function handleSkip() {
    onSkip?.() || console.log('Skip step');
  }

  function handleBack() {
    onBack?.() || console.log('Go back');
  }

  function handleNext() {
    onNext?.() || console.log('Go to next step');
  }

  function handleSameAddressToggle() {
    sameAsCurrentAddress = !sameAsCurrentAddress;
    
    if (sameAsCurrentAddress) {
      permanentAddress = currentAddress;
      permanentBarangay = barangay;
      permanentMunicipality = municipality;
      permanentProvince = province;
      permanentZipCode = zipCode;
    } else {
      permanentAddress = '';
      permanentBarangay = '';
      permanentMunicipality = '';
      permanentProvince = '';
      permanentZipCode = '';
    }
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
              Step 3. Contact Information
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
              Please provide your current and permanent addresses for contact purposes.
            </p>
          </div>
        </div>

        <div class="h-[20px]"></div>

        <!-- Current Address Section -->
        <div class="flex flex-col gap-5">
          <div class="flex flex-col">
            <h2 class="font-m3-title-medium text-black p-2.5">Current Address</h2>
            
            <!-- Street Address -->
            <div class="flex flex-col">
              <div class="flex">
                <label class="p-2.5 font-m3-title-medium text-black whitespace-nowrap">
                  Street Address
                </label>
              </div>
              <div class="px-2.5">
                <input
                  bind:value={currentAddress}
                  class="w-full h-[34px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="House/Unit No., Street Name"
                />
              </div>
            </div>

            <!-- Barangay, Municipality, Province -->
            <div class="flex flex-col">
              <div class="flex">
                <label class="p-2.5 w-[280px] font-m3-title-medium text-black whitespace-nowrap">
                  Barangay
                </label>
                <label class="p-2.5 w-[280px] font-m3-title-medium text-black whitespace-nowrap">
                  Municipality/City
                </label>
                <label class="p-2.5 flex-1 font-m3-title-medium text-black whitespace-nowrap">
                  Province
                </label>
              </div>
              <div class="flex px-2.5 gap-2.5">
                <input
                  bind:value={barangay}
                  class="w-[250px] h-[34px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  bind:value={municipality}
                  class="w-[250px] h-[34px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  bind:value={province}
                  class="flex-1 h-[34px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <!-- ZIP Code -->
            <div class="flex flex-col">
              <div class="flex">
                <label class="p-2.5 font-m3-title-medium text-black whitespace-nowrap">
                  ZIP Code
                </label>
              </div>
              <div class="px-2.5">
                <input
                  bind:value={zipCode}
                  class="w-[200px] h-[34px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="1234"
                />
              </div>
            </div>
          </div>

          <div class="h-[20px]"></div>

          <!-- Same Address Checkbox -->
          <div class="flex items-center px-2.5 gap-3">
            <input
              type="checkbox"
              id="sameAddress"
              bind:checked={sameAsCurrentAddress}
              onchange={handleSameAddressToggle}
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label for="sameAddress" class="font-regular-14 text-greysgray-900">
              Permanent address is the same as current address
            </label>
          </div>

          <div class="h-[20px]"></div>

          <!-- Permanent Address Section -->
          <div class="flex flex-col">
            <h2 class="font-m3-title-medium text-black p-2.5">Permanent Address</h2>
            
            <!-- Street Address -->
            <div class="flex flex-col">
              <div class="flex">
                <label class="p-2.5 font-m3-title-medium text-black whitespace-nowrap">
                  Street Address
                </label>
              </div>
              <div class="px-2.5">
                <input
                  bind:value={permanentAddress}
                  disabled={sameAsCurrentAddress}
                  class="w-full h-[34px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="House/Unit No., Street Name"
                />
              </div>
            </div>

            <!-- Barangay, Municipality, Province -->
            <div class="flex flex-col">
              <div class="flex">
                <label class="p-2.5 w-[280px] font-m3-title-medium text-black whitespace-nowrap">
                  Barangay
                </label>
                <label class="p-2.5 w-[280px] font-m3-title-medium text-black whitespace-nowrap">
                  Municipality/City
                </label>
                <label class="p-2.5 flex-1 font-m3-title-medium text-black whitespace-nowrap">
                  Province
                </label>
              </div>
              <div class="flex px-2.5 gap-2.5">
                <input
                  bind:value={permanentBarangay}
                  disabled={sameAsCurrentAddress}
                  class="w-[250px] h-[34px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <input
                  bind:value={permanentMunicipality}
                  disabled={sameAsCurrentAddress}
                  class="w-[250px] h-[34px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <input
                  bind:value={permanentProvince}
                  disabled={sameAsCurrentAddress}
                  class="flex-1 h-[34px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <!-- ZIP Code -->
            <div class="flex flex-col">
              <div class="flex">
                <label class="p-2.5 font-m3-title-medium text-black whitespace-nowrap">
                  ZIP Code
                </label>
              </div>
              <div class="px-2.5">
                <input
                  bind:value={permanentZipCode}
                  disabled={sameAsCurrentAddress}
                  class="w-[200px] h-[34px] bg-greysgray-100 rounded-[1px] border border-[#939185] px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="1234"
                />
              </div>
            </div>
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