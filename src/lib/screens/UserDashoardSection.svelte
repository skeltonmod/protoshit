<script lang="ts">
  import {
    Bell,
    ChartArea,
    ChevronDown,
    HandCoins,
    Laugh,
    Rss,
    ShieldCheck,
    UserPen,
    UserRoundPlus,
    Users,
  } from "lucide-svelte";
  import Card from "$lib/components/ui/Card.svelte";
  import CardContent from "$lib/components/ui/CardContent.svelte";
  import CardHeader from "$lib/components/ui/CardHeader.svelte";
  import CardTitle from "$lib/components/ui/CardTitle.svelte";
  import Avatar from "$lib/components/ui/Avatar.svelte";
  import AvatarFallback from "$lib/components/ui/AvatarFallback.svelte";
  import Header from "$lib/components/ui/Header.svelte";

  // Header user data
  const userData = {
    name: "Gipre Naparan",
    loginType: "Login via Facebook",
    status: "Unverified account",
    access: "Limited",
    completionPercentage: 14,
    lastLogin: "May 29 11:10:27 PM",
    location: "Malaybalay, PH",
    ipAddress: "119.110.29.177",
  };

  // Incomplete details data
  const incompleteDetails = [
    { icon: "/lucide-message-circle.svg", text: "Contact Information" },
    { icon: "/lucide-graduation-cap.svg", text: "Educational Background" },
    { icon: "/lucide-users-2.svg", text: "Family Member Information" },
    {
      icon: "/lucide-briefcase-business.svg",
      text: "Employment or Business Details",
    },
  ];

  // Next steps data
  const nextSteps = [
    {
      number: 1,
      title: "PMES Booking",
      description: "Schedule a seminar via zoom or contact our staff",
      active: true,
    },
    { number: 2, title: "Evaluation", description: "", active: false },
    {
      number: 3,
      title: "Membership Certificate",
      description: "",
      active: false,
    },
    {
      number: 4,
      title: "Documentation",
      description: "Upload ID, documents",
      active: false,
    },
    { number: 5, title: "Payment", description: "", active: false },
  ];

  // Recent updates data
  const recentUpdates = {
    announcement:
      "𝑫𝒊𝒔𝒄𝒐𝒗𝒆𝒓 𝑪𝒐𝒏𝒗𝒆𝒏𝒊𝒆𝒏𝒄𝒆 𝒘𝒊𝒕𝒉 𝑩𝑼𝑮𝑬𝑴𝑪𝑶'𝒔 𝑷𝒆𝒕𝒕𝒚 𝑪𝒂𝒔𝒉 𝑳𝒐𝒂𝒏! (Read more)",
    loanAmount: "P30,000.00",
    memberStats: {
      total: "28,000 total",
      new: "120 new",
    },
    retentionRate: "95% retention from 2024-2025",
    averageShareCapital: "P5,000 per member",
    loanUtilizationRate: "63% have loans in 2025",
    membershipConversion: {
      associate: "500 assoc.",
      regular: "10,000 regular",
    },
  };
</script>

<div class="flex flex-col h-screen items-start relative flex-1 grow bg-monochromegray-100 overflow-hidden overflow-y-hidden">
  <Header />

  <!-- Main Content -->
  <div class="flex flex-col items-start px-[25px] py-2.5 relative self-stretch w-full flex-[0_0_auto] overflow-y-auto">
    <div class="flex-col self-stretch w-full flex-[0_0_auto] flex items-start relative">
      <div class="h-[37px] relative self-stretch w-full"></div>

      <div class="flex items-start relative self-stretch w-full">
        <div class="flex-col w-[804px] px-[33px] py-0 self-stretch flex items-start relative">
          <!-- Dashboard Title -->
          <div class="flex items-start gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <img
              class="relative w-6 h-6"
              alt="Dashboard"
              src="/dashboard.svg"
            />
            <h1 class="relative w-fit font-bold-24 text-monochromedark-gray">
              Dashboard
            </h1>
          </div>

          <div class="h-5 relative self-stretch w-full"></div>

          <!-- User Profile Card -->
          <Card class="flex h-[120px] items-center gap-2.5 px-2.5 py-0 relative self-stretch w-full shadow-[0px_0px_10px_#0000001a]">
            <CardContent class="flex items-center gap-2.5 p-0 w-full h-full">
              <Avatar class="w-20 h-20 border border-solid border-[#bfbfbf]">
                <AvatarFallback>GN</AvatarFallback>
              </Avatar>

              <div class="inline-flex flex-col h-[76px] items-start relative flex-[0_0_auto]">
                <div class="inline-flex flex-col items-start justify-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div class="relative w-fit font-regular-10 text-monochromedark-gray whitespace-nowrap">
                    {userData.loginType}
                  </div>
                </div>

                <div class="inline-flex items-center gap-[5px] px-2.5 py-0 relative flex-1 grow">
                  <ShieldCheck class="w-[18px] h-[18px]" />
                  <div class="relative w-[175px] [font-family:'Inter',Helvetica] font-normal text-monochromedark-gray text-base tracking-[0] leading-4">
                    <span class="font-bold">{userData.name}</span>
                  </div>
                </div>

                <div class="inline-flex flex-col items-start justify-end gap-1 p-2.5 relative flex-1 grow">
                  <div class="relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#ce5347] text-[10px] tracking-[0] leading-[10px]">
                    <span class="font-light">Status: </span>
                    <span class="font-regular-10">
                      {userData.status}
                      <br />
                    </span>
                    <span class="font-light">Access: </span>
                    <span class="font-regular-10">
                      {userData.access}
                    </span>
                    <span class="font-light">
                      {" "}
                      (please complete all required steps for full
                      membership access)
                    </span>
                  </div>
                </div>
              </div>

              <div class="flex flex-col items-end justify-end gap-[5px] px-2.5 py-3 relative flex-1 self-stretch grow">
                <div class="inline-flex items-center gap-[5px] px-2.5 py-[7px] relative flex-[0_0_auto] rounded-[10px] overflow-hidden">
                  <div class="relative w-6 h-6">
                    <img
                      class="absolute w-[18px] h-[18px] top-[3px] left-[3px]"
                      alt="Completion"
                      src="/group-1.png"
                    />
                  </div>
                  <div class="relative w-fit font-regular-14 text-monochromedark-gray text-right">
                    {userData.completionPercentage}% Complete
                  </div>
                </div>

                <div class="relative w-fit [font-family:'Inter',Helvetica] font-normal text-greysgray-900 text-[10px] text-right tracking-[0] leading-[10px]">
                  <span class="font-regular-10">
                    Last login: {userData.lastLogin}
                    <br />
                    Location: {userData.location}
                    <br />
                    IP Address: {userData.ipAddress}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div class="flex flex-col items-start gap-2.5 px-0 py-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div class="relative self-stretch w-full h-2.5"></div>

            <!-- Account Status Alert -->
            <div class="flex flex-col h-[99px] items-start justify-center gap-2.5 px-[66px] py-2.5 relative self-stretch w-full bg-mainwhite rounded-[10px] overflow-hidden border border-solid border-[#ec6d62]">
              <div class="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                <div class="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <img
                    class="relative w-[26px] h-[28.36px]"
                    alt="Warning"
                    src="/group-2.png"
                  />
                  <div class="relative w-fit font-bold-20 text-black whitespace-nowrap">
                    Your account is temporary
                  </div>
                </div>

                <div class="inline-flex items-center justify-center gap-2.5 px-[38px] py-0 relative flex-[0_0_auto]">
                  <div class="relative w-fit font-regular-12 text-black">
                    Membership is unverified due to insufficient verifiable
                    information
                  </div>
                </div>
              </div>
            </div>

            <div class="relative self-stretch w-full h-2.5"></div>

            <!-- Action Cards -->
            <div class="flex items-center gap-[50px] px-[5px] py-0 relative self-stretch w-full flex-[0_0_auto]">
              <div class="flex items-center gap-[25px] px-px py-0 relative flex-1 grow">
                <!-- Update Profile Card -->
                <Card class="flex items-start gap-2.5 p-2.5 relative flex-1 grow shadow-[0px_0px_8px_#dddddd]">
                  <CardContent class="flex items-start gap-2.5 p-0">
                    <div class="inline-flex flex-col items-start gap-2.5 p-2.5 relative flex-[0_0_auto]">
                      <div class="inline-flex gap-2.5 p-2.5 flex-[0_0_auto] bg-monochromegray-500 rounded-lg items-center relative">
                        <UserPen class="w-6 h-6" />
                      </div>
                    </div>

                    <div class="inline-flex flex-col items-start gap-[5px] p-2.5 relative flex-[0_0_auto]">
                      <div class="relative w-fit font-bold-20 text-monochromedark-gray whitespace-nowrap">
                        Update your profile
                      </div>
                      <div class="relative w-fit font-regular-12 text-greysgray-500">
                        Please provide necessary basic details
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <!-- Upload Documents Card -->
                <Card class="flex items-start gap-2.5 p-2.5 relative flex-1 grow shadow-[0px_0px_8px_#dddddd]">
                  <CardContent class="flex items-start gap-2.5 p-0">
                    <div class="inline-flex flex-col items-start gap-2.5 p-2.5 relative flex-[0_0_auto]">
                      <div class="inline-flex gap-2.5 p-2.5 flex-[0_0_auto] bg-accentlava-500 rounded-lg items-center relative">
                        <div class="inline-flex items-center gap-2.5 px-1 py-0.5 relative flex-[0_0_auto]">
                          <img
                            class="relative w-6 h-6"
                            alt="File Upload"
                            src="/lucide-file-up.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="inline-flex flex-col items-start gap-[5px] p-2.5 relative flex-[0_0_auto]">
                      <div class="relative w-fit font-bold-20 text-monochromedark-gray whitespace-nowrap">
                        Upload documents
                      </div>
                      <div class="relative w-fit font-regular-12 text-greysgray-500">
                        Complete your documentation
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <!-- Two Column Layout -->
          <div class="flex items-start gap-[25px] px-px py-2.5 relative flex-1 self-stretch w-full grow">
            <!-- Incomplete Details Card -->
            <Card class="flex flex-col w-[355.5px] h-[366px] items-start gap-2.5 px-5 py-2.5 relative shadow-[0px_0px_10px_#0000001a]">
              <CardHeader class="flex items-start p-2.5 self-stretch w-full border-b-[0.5px] border-[#9aa6b2] gap-2.5 relative flex-[0_0_auto] px-0">
                <div class="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                  <img
                    class="relative w-6 h-6"
                    alt="Warning"
                    src="/si-warning-fill.svg"
                  />
                  <CardTitle class="relative w-fit [font-family:'Inter',Helvetica] font-bold text-monochromeblack text-base tracking-[0] leading-4 whitespace-nowrap">
                    Incomplete Details
                  </CardTitle>
                </div>
              </CardHeader>

              <div class="h-3 relative self-stretch w-full"></div>

              <CardContent class="p-0 w-full">
                {#each incompleteDetails as item, index}
                  <div
                    class="inline-flex items-center justify-center gap-2.5 px-0 py-[3px] relative flex-[0_0_auto]"
                  >
                    <div class="flex w-[38px] h-[37px] justify-center gap-2.5 px-0 py-2.5 bg-accentcherry-300 rounded-[5px] items-center relative">
                      <img
                        class="relative w-[23.01px] h-[23.01px] mt-[-3.00px] mb-[-3.00px]"
                        alt={item.text}
                        src={item.icon}
                      />
                    </div>
                    <div class="relative w-fit font-regular-14 text-black">
                      {item.text}
                    </div>
                  </div>
                {/each}
              </CardContent>
            </Card>

            <!-- Next Steps Card -->
            <div class="flex flex-col w-[355.5px] items-start gap-2.5 relative self-stretch">
              <Card class="flex flex-col items-start gap-2.5 p-2.5 self-stretch w-full shadow-[0px_0px_10px_#0000001a] relative flex-[0_0_auto]">
                <CardHeader class="flex items-start p-2.5 self-stretch w-full border-b-[0.5px] border-[#9aa6b2] gap-2.5 relative flex-[0_0_auto] px-0">
                  <div class="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                    <img
                      class="relative w-6 h-6"
                      alt="Message"
                      src="/bxs-message-square-detail.svg"
                    />
                    <CardTitle class="relative w-fit [font-family:'Inter',Helvetica] font-bold text-monochromedark-gray text-base tracking-[0] leading-4 whitespace-nowrap">
                      Next Steps
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent class="p-0 w-full">
                  <div class="flex items-start gap-2.5 px-0 py-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div class="flex flex-col w-[41px] items-center px-2.5 py-0 relative self-stretch">
                      {#each nextSteps as step, index}
                        <div
                          class="inline-flex items-center relative flex-[0_0_auto] ml-[-1.50px] mr-[-1.50px] {!step.active ? 'opacity-50' : ''}"
                        >
                          <div class="flex flex-col w-6 h-6 justify-center bg-monochromeblack rounded-[100px] items-center relative">
                            <div class="relative self-stretch font-regular-12 text-white text-center">
                              {step.number}
                            </div>
                          </div>
                        </div>
                        {#if index < nextSteps.length - 1}
                          <div
                            class="inline-flex h-[{index === 0 ? '38' : index === 1 ? '34' : index === 2 ? '29' : '33'}px] items-start relative {!step.active ? 'opacity-50' : ''}"
                          >
                            <div class="relative self-stretch w-[10.5px] border-r-[0.5px] [border-right-style:dashed] border-black"></div>
                            <div class="relative self-stretch w-[10.5px]"></div>
                          </div>
                        {/if}
                      {/each}
                    </div>

                    <div class="flex flex-col h-[255px] items-start gap-8 relative flex-1 grow">
                      {#each nextSteps as step, index}
                        <div
                          class="flex items-center justify-around relative flex-1 self-stretch w-full grow {!step.active ? 'opacity-50' : ''}"
                        >
                          <div class="flex flex-col items-start gap-0.5 relative flex-1 grow mt-[-2.80px] mb-[-2.80px]">
                            <div class="relative w-fit font-regular-14 text-black">
                              {step.title}
                            </div>
                            {#if step.description}
                              <div class="relative w-fit [font-family:'Inter',Helvetica] font-normal text-black text-[10px] tracking-[0] leading-[10px] whitespace-nowrap">
                                <span class="font-regular-10 underline">
                                  {step.description}
                                </span>
                              </div>
                            {/if}
                            {#if step.number === 4}
                              <div class="inline-flex items-center justify-center gap-0.5 relative flex-[0_0_auto]">
                                <div class="relative w-3 h-3">
                                  <img
                                    class="absolute w-2.5 h-[11px] top-px left-px"
                                    alt="Checkmark"
                                    src="/group-3.png"
                                  />
                                </div>
                                <div class="relative w-[109px] mt-[-1.00px] opacity-50 font-regular-10 text-black">
                                  Upload ID, documents
                                </div>
                              </div>
                            {/if}
                          </div>
                        </div>
                      {/each}
                    </div>
                  </div>
                </CardContent>

                <div class="h-3 relative self-stretch w-full"></div>
              </Card>

              <div class="h-9 mb-[-11.00px] relative self-stretch w-full"></div>
            </div>
          </div>
        </div>

        <!-- Recent Updates Sidebar -->
        <Card class="flex flex-col h-[827px] items-start gap-2.5 px-[26px] py-2.5 relative flex-1 grow rounded-[10px] border border-solid border-[#f1efec] shadow-[0px_0px_10px_#0000001a]">
          <CardContent class="p-0 w-full">
            <div class="flex flex-col items-start self-stretch w-full relative flex-[0_0_auto]">
              <div class="flex items-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <Rss class="w-6 h-6" />
                <div class="relative w-fit font-regular-14 text-greysgray-900">
                  Recent Updates
                </div>
              </div>

              <!-- Announcements Section -->
              <div class="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div class="flex flex-col h-5 items-center gap-2.5 px-2.5 py-0 relative self-stretch w-full">
                  <div class="flex items-center justify-center gap-2.5 relative flex-1 self-stretch w-full grow border-b border-[#dddddd]">
                    <div class="relative flex-1 [font-family:'Inter',Helvetica] font-regular-12 text-greysgray-900 text-xs tracking-[0] leading-3">
                      Announcements
                    </div>
                  </div>
                </div>

                <div class="flex items-start gap-2.5 px-0 py-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div class="flex items-start gap-2.5 px-2.5 py-0.5 relative flex-1 grow rounded-[1px] overflow-hidden">
                    <div class="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-transparent text-[10px] tracking-[0] leading-[10px]">
                      <span class="font-regular-10 text-[#123524] underline">
                        {recentUpdates.announcement.split("(")[0]}
                      </span>
                      <span class="font-light text-[#123524]">
                        {recentUpdates.announcement.includes("(")
                          ? `(${recentUpdates.announcement.split("(")[1]}`
                          : ""}
                      </span>
                    </div>
                  </div>
                </div>

                <div class="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div class="flex items-center gap-0.5 px-[9px] py-0.5 relative flex-1 grow">
                    <HandCoins class="w-6 h-6" />
                    <div class="flex flex-col w-[124px] items-center justify-center gap-0.5 relative">
                      <div class="flex flex-col items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
                        <div class="relative w-[105px] mt-[-1.00px] font-regular-10 text-monochromedark-gray">
                          Loan amount up to
                        </div>
                      </div>
                      <div class="relative w-[105px] [font-family:'Inter',Helvetica] font-regular-14 text-monochromedark-gray text-sm tracking-[0] leading-[14px]">
                        {recentUpdates.loanAmount}
                      </div>
                    </div>
                    <div class="flex h-7 items-center justify-center gap-2.5 relative flex-1 grow bg-monochromewhite rounded-[5px]">
                      <div class="relative flex-1 self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-regular-10 text-[#9aa6b2] text-[10px] text-center tracking-[0] leading-[10px]">
                        Apply now
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex h-5 items-start gap-2.5 relative self-stretch w-full overflow-hidden">
                <div class="relative flex-1 grow h-8 mb-[-12.00px] rounded-[1px]" ></div>
              </div>

              <!-- Overall Status Section -->
              <div class="flex flex-col h-5 items-center gap-2.5 px-2.5 py-0 relative self-stretch w-full">
                <div class="flex items-center justify-center gap-2.5 relative flex-1 self-stretch w-full grow border-b border-[#dddddd]">
                  <div class="relative flex-1 [font-family:'Inter',Helvetica] font-regular-12 text-greysgray-900 text-xs tracking-[0] leading-3">
                    Overall Status
                  </div>
                </div>
              </div>

              <div class="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div class="flex items-start gap-2.5 p-2.5 relative flex-1 grow rounded-[1px] overflow-hidden">
                  <div class="relative flex-1 mt-[-1.00px] font-regular-10 text-[#4c4c4c]">
                    Membership status and overall activity metrics.
                  </div>
                </div>
              </div>

              <!-- Members Section -->
              <div class="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div class="flex flex-col h-5 items-center gap-2.5 px-2.5 py-0 relative self-stretch w-full">
                  <div class="flex items-center justify-center gap-2.5 relative flex-1 self-stretch w-full grow border-b border-[#dddddd]">
                    <div class="relative flex-1 [font-family:'Inter',Helvetica] font-regular-10 text-greysgray-900 text-[10px] tracking-[0] leading-[10px]">
                      Members as of April 2025
                    </div>
                  </div>
                </div>

                <div class="flex items-start px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div class="flex items-center gap-2.5 p-2.5 relative flex-1 grow">
                    <Users class="w-6 h-6" />
                    <div class="relative w-[105px] [font-family:'Inter',Helvetica] font-regular-14 text-monochromedark-gray text-sm tracking-[0] leading-[14px]">
                      {recentUpdates.memberStats.total}
                    </div>
                    <UserRoundPlus class="w-6 h-6" />
                    <div class="flex-1 self-stretch mt-[-1.00px] text-mainprimary text-[10px] leading-[10px] relative [font-family:'Inter',Helvetica] font-regular-10 tracking-[0]">
                      {recentUpdates.memberStats.new}
                    </div>
                  </div>
                </div>

                <div class="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div class="flex items-start gap-2.5 px-2.5 py-0 relative flex-1 grow rounded-[1px] overflow-hidden">
                    <div class="relative flex-1 mt-[-1.00px] font-regular-10 text-monochromedark-gray">
                      Number of members with valid, up-to-date membership.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Retention Rate Section -->
              <div class="flex flex-col items-start px-0 py-2.5 self-stretch w-full relative flex-[0_0_auto]">
                <div class="flex flex-col h-5 items-center gap-2.5 px-2.5 py-0 relative self-stretch w-full">
                  <div class="flex items-center justify-center gap-2.5 relative flex-1 self-stretch w-full grow border-b border-[#dddddd]">
                    <div class="relative flex-1 [font-family:'Inter',Helvetica] font-regular-10 text-greysgray-900 text-[10px] tracking-[0] leading-[10px]">
                      Retention Rate
                    </div>
                  </div>
                </div>

                <div class="flex items-start px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div class="flex items-center gap-2.5 p-2.5 relative flex-1 grow">
                    <ChartArea class="w-6 h-6" />
                    <div class="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-regular-14 text-monochromedark-gray text-sm tracking-[0] leading-[14px]">
                      {recentUpdates.retentionRate}
                    </div>
                  </div>
                </div>

                <div class="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div class="flex items-start gap-2.5 px-2.5 py-0 relative flex-1 grow rounded-[1px] overflow-hidden">
                    <div class="relative flex-1 mt-[-1.00px] font-regular-10 text-monochromedark-gray">
                      % of members who remain active across periods.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Average Share Capital Section -->
              <div class="flex flex-col items-start px-0 py-2.5 self-stretch w-full relative flex-[0_0_auto]">
                <div class="flex flex-col h-5 items-center gap-2.5 px-2.5 py-0 relative self-stretch w-full">
                  <div class="flex items-center justify-center gap-2.5 relative flex-1 self-stretch w-full grow border-b border-[#dddddd]">
                    <div class="relative flex-1 [font-family:'Inter',Helvetica] font-regular-10 text-greysgray-900 text-[10px] tracking-[0] leading-[10px]">
                      Average Share Capital per Member
                    </div>
                  </div>
                </div>

                <div class="flex items-start px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div class="flex items-center gap-2.5 p-2.5 relative flex-1 grow">
                    <HandCoins class="w-6 h-6" />
                    <div class="relative flex-1 [font-family:'Inter',Helvetica] font-regular-14 text-monochromedark-gray text-sm tracking-[0] leading-[14px]">
                      {recentUpdates.averageShareCapital}
                    </div>
                  </div>
                </div>

                <div class="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div class="flex items-start gap-2.5 px-2.5 py-0 relative flex-1 grow rounded-[1px] overflow-hidden">
                    <div class="relative flex-1 mt-[-1.00px] font-regular-10 text-monochromedark-gray">
                      Average amount of capital contributed
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="flex flex-col items-start px-0 py-2.5 self-stretch w-full relative flex-[0_0_auto]">
                <div class="flex flex-col h-5 items-center gap-2.5 px-2.5 py-0 relative self-stretch w-full">
                  <div class="flex items-center justify-center gap-2.5 relative flex-1 self-stretch w-full grow border-b border-[#dddddd]">
                    <div class="relative flex-1 [font-family:'Inter',Helvetica] font-regular-10 text-greysgray-900 text-[10px] tracking-[0] leading-[10px]">
                      Loan Utilization Rate
                    </div>
                  </div>
                </div>

                <div class="flex items-start px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div class="flex items-center gap-2.5 p-2.5 relative flex-1 grow">
                    <Laugh class="w-6 h-6" />
                    <div class="relative flex-1 [font-family:'Inter',Helvetica] font-regular-14 text-monochromedark-gray text-sm tracking-[0] leading-[14px]">
                      {recentUpdates.loanUtilizationRate}
                    </div>
                  </div>
                </div>

                <div class="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div class="flex items-start gap-2.5 px-2.5 py-0 relative flex-1 grow rounded-[1px] overflow-hidden">
                    <div class="relative flex-1 mt-[-1.00px] font-regular-10 text-monochromedark-gray">
                      % of members with at least one active loan.
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex flex-col items-start px-0 py-2.5 self-stretch w-full relative flex-[0_0_auto]">
                <div class="flex flex-col h-5 items-center gap-2.5 px-2.5 py-0 relative self-stretch w-full">
                  <div class="flex items-center justify-center gap-2.5 relative flex-1 self-stretch w-full grow border-b border-[#dddddd]">
                    <div class="flex-1 text-greysgray-900 text-[10px] leading-[10px] relative [font-family:'Inter',Helvetica] font-regular-10 tracking-[0]">
                      Membership Convertion
                    </div>
                  </div>
                </div>

                <div class="flex items-start px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div class="flex items-center p-2.5 relative flex-1 grow">
                    <Users class="w-6 h-6" />
                    <div class="w-[105px] text-monochromedark-gray text-sm leading-[14px] relative [font-family:'Inter',Helvetica] font-regular-14 tracking-[0]">
                      {recentUpdates.membershipConversion.associate}
                    </div>
                    <UserRoundPlus class="w-6 h-6" />
                    <div class="relative flex-1 [font-family:'Inter',Helvetica] font-regular-10 text-mainprimary text-[10px] tracking-[0] leading-[10px]">
                      {recentUpdates.membershipConversion.regular}
                    </div>
                  </div>
                </div>

                <div class="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div class="flex items-start gap-2.5 px-2.5 py-0 relative flex-1 grow rounded-[1px] overflow-hidden">
                    <div class="relative flex-1 mt-[-1.00px] font-regular-10 text-monochromedark-gray">
                      from Associate to Regular, from Non-METV to METV, From
                      Class E to Class A
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>

  <!-- <footer class="flex items-start justify-end px-0 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
    <div class="flex flex-col items-start gap-2.5 p-2.5 relative flex-1 self-stretch grow" />
    <div class="relative flex-1 self-stretch grow" />
  </footer> -->
</div>