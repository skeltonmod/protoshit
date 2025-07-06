<script lang="ts">
  import {
    Bell,
    CalendarDays,
    ChevronDown,
    Eye,
    Info,
    MoreHorizontal,
    Search,
    SquarePen,
  } from "lucide-svelte";
  import Badge from "$lib/components/ui/Badge.svelte";
  import Button from "$lib/components/ui/Button.svelte";
  import Card from "$lib/components/ui/Card.svelte";
  import CardContent from "$lib/components/ui/CardContent.svelte";
  import Checkbox from "$lib/components/ui/Checkbox.svelte";
  import Input from "$lib/components/ui/Input.svelte";
  import Table from "$lib/components/ui/table/Table.svelte";
  import TableBody from "$lib/components/ui/table/TableBody.svelte";
  import TableCell from "$lib/components/ui/table/TableCell.svelte";
  import TableHead from "$lib/components/ui/table/TableHead.svelte";
  import TableHeader from "$lib/components/ui/table/TableHeader.svelte";
  import TableRow from "$lib/components/ui/table/TableRow.svelte";
  import Header from "$lib/components/ui/Header.svelte";

  // Data for summary cards
  const summaryCards = [
    {
      icon: "/flowbite-user-add-solid.svg",
      iconBg: "bg-accentgrass-300",
      title: "47 pending",
      description: "Review membership applications",
    },
    {
      icon: "/tabler-file-check-filled.svg",
      iconBg: "bg-accentfire-200",
      title: "13 for review",
      description: "Review application with near completion",
    },
    {
      icon: "/clarity-users-solid.svg",
      iconBg: "bg-mainlight",
      title: "28,905",
      description: "Total members for all branches",
    },
    {
      icon: "/ph-user-circle-check-bold.svg",
      iconBg: "bg-monochromegray-500",
      title: "136 approved",
      description: "Approved members for this month",
    },
  ];

  // Table data
  const tableData = [
    {
      id: "10836",
      name: "Domingo, Liza M.",
      branch: "MCBO",
      gender: "M",
      age: "29",
      area: "MIXED",
      occupation: "Employed",
      priority: "85%",
      date: "May 30, 2025 10:22 AM",
      status: "For Review",
      statusBg: "bg-accentgrass-300",
      rowBg: "",
    },
    {
      id: "9828",
      name: "Dela Cruz, Juan M.",
      branch: "MBO",
      gender: "F",
      age: "34",
      area: "2933",
      occupation: "Entrepreneur",
      priority: "90%",
      date: "May 30, 2025 10:22 AM",
      status: "For Review",
      statusBg: "bg-accentgrass-300",
      rowBg: "bg-monochromeplain-white",
    },
    {
      id: "10834",
      name: "Mendoza, Erika L.",
      branch: "KsBO",
      gender: "F",
      age: "30",
      area: "S-E/BUS - BRGY 09",
      occupation: "Self-employed",
      priority: "88%",
      date: "May 30, 2025 10:01 AM",
      status: "Pending",
      statusBg: "bg-accentfire-100",
      rowBg: "",
    },
    {
      id: "9271",
      name: "Valdez, Regina C.",
      branch: "MCBO",
      gender: "F",
      age: "24",
      area: "DENR",
      occupation: "OFW",
      priority: "77%",
      date: "May 30, 2025 10:01 AM",
      status: "Pending",
      statusBg: "bg-accentfire-100",
      rowBg: "bg-white",
    },
    {
      id: "10831",
      name: "Lopez, Ana G.",
      branch: "VBO",
      gender: "F",
      age: "22",
      area: "CSU-JO2",
      occupation: "Entrepreneur",
      priority: "70%",
      date: "May 30, 2025 09:10 AM",
      status: "Pending",
      statusBg: "bg-accentfire-100",
      rowBg: "",
    },
    {
      id: "10830",
      name: "Dizon, Luisa T.",
      branch: "ABO",
      gender: "F",
      age: "36",
      area: "BLC",
      occupation: "Entrepreneur",
      priority: "80%",
      date: "May 30, 2025 08:05 AM",
      status: "Pending",
      statusBg: "bg-accentfire-100",
      rowBg: "bg-white",
    },
    {
      id: "10826",
      name: "Uy, Geraldine P.",
      branch: "MFBO",
      gender: "F",
      age: "26",
      area: "S-E/BUS - BRGY 10",
      occupation: "Self-employed",
      priority: "63%",
      date: "May 30, 2025 09:10 AM",
      status: "Pending",
      statusBg: "bg-accentfire-100",
      rowBg: "",
    },
    {
      id: "10833",
      name: "Santos, Maria V.",
      branch: "KsBO",
      gender: "F",
      age: "42",
      area: "Govt. or Public",
      occupation: "Student",
      priority: "90%",
      date: "May 30, 2025 10:01 AM",
      status: "For Review",
      statusBg: "bg-accentgrass-300",
      rowBg: "bg-white",
    },
    {
      id: "10829",
      name: "Ferrer, Alex D.",
      branch: "MCBO",
      gender: "M",
      age: "23",
      area: "Bukidnon State U..",
      occupation: "Employed",
      priority: "88%",
      date: "May 30, 2025 09:10 AM",
      status: "Pending",
      statusBg: "bg-accentfire-100",
      rowBg: "",
    },
    {
      id: "10832",
      name: "Manlapig, Carlo J.",
      branch: "MBO",
      gender: "M",
      age: "25",
      area: "PEO-CONS...-REG1",
      occupation: "Entrepreneur",
      priority: "77%",
      date: "May 30, 2025 10:01 AM",
      status: "Pending",
      statusBg: "bg-accentfire-100",
      rowBg: "bg-white",
    },
    {
      id: "10840",
      name: "Albao, Trina S.",
      branch: "KsBO",
      gender: "F",
      age: "53",
      area: "RETIREE",
      occupation: "Self-employed",
      priority: "70%",
      date: "May 30, 2025 09:10 AM",
      status: "Pending",
      statusBg: "bg-accentfire-100",
      rowBg: "",
    },
    {
      id: "10813",
      name: "Ramirez, Carlo B.",
      branch: "MCBO",
      gender: "M",
      age: "31",
      area: "BLC",
      occupation: "OFW",
      priority: "80%",
      date: "May 30, 2025 10:01 AM",
      status: "Pending",
      statusBg: "bg-accentfire-100",
      rowBg: "bg-white",
    },
    {
      id: "9318",
      name: "Cruz, Jonel R.",
      branch: "VBO",
      gender: "M",
      age: "43",
      area: "DENR",
      occupation: "Entrepreneur",
      priority: "63%",
      date: "May 30, 2025 09:10 AM",
      status: "Pending",
      statusBg: "bg-accentfire-100",
      rowBg: "",
    },
    {
      id: "9271",
      name: "Reyes, Mark L.",
      branch: "ABO",
      gender: "M",
      age: "26",
      area: "MIXED",
      occupation: "Entrepreneur",
      priority: "80%",
      date: "May 30, 2025 10:01 AM",
      status: "Pending",
      statusBg: "bg-accentfire-100",
      rowBg: "bg-white",
    },
    {
      id: "8719",
      name: "Tan, James K.",
      branch: "MFBO",
      gender: "M",
      age: "46",
      area: "MIXED",
      occupation: "Self-employed",
      priority: "63%",
      date: "May 30, 2025 09:10 AM",
      status: "Pending",
      statusBg: "bg-accentfire-100",
      rowBg: "",
    },
  ];

  // Filter options
  let filterOptions = [
    { label: "Pending", checked: true },
    { label: "For Review", checked: true },
    { label: "For Follow-up", checked: false },
    { label: "Re-scheduled", checked: false },
    { label: "For Booking", checked: false },
  ];

  let searchValue = "";
</script>

<div class="flex flex-col h-full items-start relative flex-1 grow bg-monochromegray-100 rounded-[10px] overflow-auto">
  <Header />

  <div class="px-[25px] py-2.5 flex-1 grow flex flex-col items-start relative self-stretch w-full">
    <!-- Section Title with Date Filter -->
    <div class="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
      <div class="items-start p-2.5 flex-[0_0_auto] border-b-[0.5px] border-[#9aa6b2] flex gap-2.5 relative self-stretch w-full">
        <div class="flex items-center gap-2.5 relative flex-1 grow">
          <h2 class="relative w-fit mt-[-1.00px] font-bold-20 font-[number:var(--bold-20-font-weight)] text-monochromeblack text-[length:var(--bold-20-font-size)] tracking-[var(--bold-20-letter-spacing)] leading-[var(--bold-20-line-height)] whitespace-nowrap [font-style:var(--bold-20-font-style)]">
            Manage Members
          </h2>
        </div>

        <div class="flex flex-col w-[538.5px] items-end justify-center gap-2.5 relative">
          <Button variant="outline" class="gap-2.5 px-2.5 py-2 h-auto">
            <CalendarDays class="w-[18px] h-[18px]" />
            <span class="w-fit mt-[-1.00px] whitespace-nowrap relative font-regular-10 font-[number:var(--regular-10-font-weight)] text-black text-[length:var(--regular-10-font-size)] tracking-[var(--regular-10-letter-spacing)] leading-[var(--regular-10-line-height)] [font-style:var(--regular-10-font-style)]">
              May 1 - 31, 2025
            </span>
            <ChevronDown class="w-[18px] h-[18px]" />
          </Button>
        </div>
      </div>
    </div>

    <div class="relative self-stretch w-full h-5"></div>
    <div class="gap-2.5 px-0 py-2.5 flex-[0_0_auto] flex flex-col items-start relative self-stretch w-full">
      <div class="flex items-center gap-[50px] px-[5px] py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div class="flex items-center gap-[50px] relative flex-1 grow">
          {#each summaryCards.slice(0, 2) as card}
            <Card class="flex-1 p-2.5 border-[0.5px] border-[#9aa6b2] shadow-[0px_0px_8px_#dddddd]">
              <CardContent class="flex items-start gap-2.5 p-0">
                <div class="inline-flex flex-col items-start gap-2.5 p-2.5 relative flex-[0_0_auto]">
                  <div class="{card.iconBg} inline-flex items-center gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-lg">
                    <img
                      class="relative w-6 h-6"
                      alt={card.title}
                      src={card.icon}
                    />
                  </div>
                </div>

                <div class="inline-flex flex-col items-start gap-[5px] p-2.5 relative flex-[0_0_auto]">
                  <div class="relative w-fit mt-[-1.00px] font-bold-20 font-[number:var(--bold-20-font-weight)] text-monochromedark-gray text-[length:var(--bold-20-font-size)] tracking-[var(--bold-20-letter-spacing)] leading-[var(--bold-20-line-height)] whitespace-nowrap [font-style:var(--bold-20-font-style)]">
                    {card.title}
                  </div>

                  <div class="relative w-fit font-regular-12 font-[number:var(--regular-12-font-weight)] text-greysgray-500 text-[length:var(--regular-12-font-size)] tracking-[var(--regular-12-letter-spacing)] leading-[var(--regular-12-line-height)] [font-style:var(--regular-12-font-style)]">
                    {card.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          {/each}
        </div>
      </div>
    </div>

    <div class="gap-2.5 px-0 py-2.5 flex-[0_0_auto] flex flex-col items-start relative self-stretch w-full">
      <div class="flex items-center gap-[50px] px-[5px] py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div class="flex items-center gap-[50px] relative flex-1 grow">
          {#each summaryCards.slice(2, 4) as card}
            <Card class="flex-1 p-2.5 border-[0.5px] border-[#9aa6b2] shadow-[0px_0px_8px_#dddddd]">
              <CardContent class="flex items-start gap-2.5 p-0">
                <div class="inline-flex flex-col items-start gap-2.5 p-2.5 relative flex-[0_0_auto]">
                  <div class="{card.iconBg} inline-flex items-center gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-lg">
                    <img
                      class="relative w-6 h-6"
                      alt={card.title}
                      src={card.icon}
                    />
                  </div>
                </div>

                <div class="inline-flex flex-col items-start gap-[5px] p-2.5 relative flex-[0_0_auto]">
                  <div class="relative w-fit mt-[-1.00px] font-bold-20 font-[number:var(--bold-20-font-weight)] text-monochromedark-gray text-[length:var(--bold-20-font-size)] tracking-[var(--bold-20-letter-spacing)] leading-[var(--bold-20-line-height)] whitespace-nowrap [font-style:var(--bold-20-font-style)]">
                    {card.title}
                  </div>

                  <div class="relative w-fit font-regular-12 font-[number:var(--regular-12-font-weight)] text-greysgray-500 text-[length:var(--regular-12-font-size)] tracking-[var(--regular-12-letter-spacing)] leading-[var(--regular-12-line-height)] [font-style:var(--regular-12-font-style)]">
                    {card.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          {/each}
        </div>
      </div>
    </div>

    <div class="relative self-stretch w-full h-5" />

    <!-- Applications Across Branches Section -->
    <div class="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
      <div class="items-start p-2.5 flex-[0_0_auto] border-b-[0.5px] border-[#9aa6b2] flex gap-2.5 relative self-stretch w-full">
        <div class="flex items-center gap-2.5 relative flex-1 grow">
          <h2 class="relative w-fit mt-[-1.00px] font-bold-20 font-[number:var(--bold-20-font-weight)] text-monochromeblack text-[length:var(--bold-20-font-size)] tracking-[var(--bold-20-letter-spacing)] leading-[var(--bold-20-line-height)] whitespace-nowrap [font-style:var(--bold-20-font-style)]">
            Membership Applications Across Branches
          </h2>
        </div>

        <div class="flex flex-col w-[538.5px] items-end justify-center gap-2.5 relative">
          <Button variant="outline" class="gap-2.5 px-2.5 py-2 h-auto">
            <CalendarDays class="w-6 h-6" />
            <span class="w-fit whitespace-nowrap relative font-regular-10 font-[number:var(--regular-10-font-weight)] text-black text-[length:var(--regular-10-font-size)] tracking-[var(--regular-10-letter-spacing)] leading-[var(--regular-10-line-height)] [font-style:var(--regular-10-font-style)]">
              Jan 2025 - May 2025
            </span>
            <ChevronDown class="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>

    <!-- Table Section -->
    <div class="flex-col gap-0.5 px-0 py-0.5 w-full flex items-start relative self-stretch">
      <!-- Search and Filters -->
      <div class="flex items-center gap-2.5 p-2.5 relative self-stretch w-full">
        <div class="flex flex-col w-[321px] items-start gap-2.5 relative mt-[-3.00px] mb-[-3.00px]">
          <div class="flex items-center gap-2.5 p-[5px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px] border-[0.5px] border-solid border-[#9aa6b2]">
            <Search class="w-4 h-4" />
            <Input
              bind:value={searchValue}
              class="border-0 p-0 h-auto text-[10px] shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Search a member or branch"
            />
          </div>
        </div>

        <div class="gap-2.5 inline-flex items-center justify-center relative flex-[0_0_auto]">
          <span class="relative w-fit mt-[-1.00px] font-regular-10 font-[number:var(--regular-10-font-weight)] text-black text-[length:var(--regular-10-font-size)] tracking-[var(--regular-10-letter-spacing)] leading-[var(--regular-10-line-height)] whitespace-nowrap [font-style:var(--regular-10-font-style)]">
            Show only:
          </span>
        </div>

        {#each filterOptions as option, index}
          <div class="gap-[5px] inline-flex items-center justify-center relative flex-[0_0_auto]">
            <Checkbox
              bind:checked={option.checked}
              class="w-4 h-4 rounded-none"
            />
            <label
              for="filter-{index}"
              class="w-fit whitespace-nowrap relative font-regular-10 font-[number:var(--regular-10-font-weight)] text-black text-[length:var(--regular-10-font-size)] tracking-[var(--regular-10-letter-spacing)] leading-[var(--regular-10-line-height)] [font-style:var(--regular-10-font-style)]"
            >
              {option.label}
            </label>
          </div>
        {/each}
      </div>

      <!-- Table -->
      <div class="flex items-start gap-2.5 relative self-stretch w-full overflow-auto">
        <Table class="border-collapse">
          <TableHeader class="bg-neutral-100">
            <TableRow>
              <TableHead class="h-[38px] px-2.5 py-[19px] font-regular-10 text-black">
                <div class="flex items-center gap-2.5">
                  <Checkbox class="w-4 h-4 rounded-none" />
                  <span>CID #</span>
                </div>
              </TableHead>
              <TableHead class="h-[38px] px-2.5 py-[19px] font-regular-10 text-black">
                FULL NAME
              </TableHead>
              <TableHead class="h-[38px] px-2.5 py-[19px] font-regular-10 text-black">
                BRANCH
              </TableHead>
              <TableHead class="h-[38px] px-2.5 py-[19px] font-regular-10 text-black">
                GENDER
              </TableHead>
              <TableHead class="h-[38px] px-2.5 py-[19px] font-regular-10 text-black">
                AGE
              </TableHead>
              <TableHead class="h-[38px] px-2.5 py-[19px] font-regular-10 text-black">
                AREA
              </TableHead>
              <TableHead class="h-[38px] px-2.5 py-[19px] font-regular-10 text-black">
                OCCUPATION
              </TableHead>
              <TableHead class="h-[38px] px-2.5 py-[19px] font-regular-10 text-black">
                PRIORITY
              </TableHead>
              <TableHead class="h-[38px] px-2.5 py-[19px] font-regular-10 text-black">
                DATE SIGNED UP
              </TableHead>
              <TableHead class="h-[38px] px-2.5 py-[19px] font-regular-10 text-black">
                STATUS
              </TableHead>
              <TableHead class="h-[38px] px-2.5 py-[19px] font-regular-10 text-black">
                ACTIONS
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {#each tableData as row, index}
              <TableRow class={row.rowBg}>
                <TableCell class="h-[35px] px-2.5 py-0 font-regular-12 text-black">
                  <div class="flex items-center gap-2.5">
                    <Checkbox class="w-4 h-4 rounded-none" />
                    <span>{row.id}</span>
                  </div>
                </TableCell>
                <TableCell class="h-[35px] px-2.5 py-0 font-regular-12 text-black">
                  {row.name}
                </TableCell>
                <TableCell class="h-[35px] px-2.5 py-0 font-regular-12 text-black">
                  {row.branch}
                </TableCell>
                <TableCell class="h-[35px] px-2.5 py-0 font-regular-12 text-black">
                  {row.gender}
                </TableCell>
                <TableCell class="h-[35px] px-2.5 py-0 font-regular-12 text-black">
                  {row.age}
                </TableCell>
                <TableCell class="h-[35px] px-2.5 py-0 font-regular-12 text-black">
                  {row.area}
                </TableCell>
                <TableCell class="h-[35px] px-2.5 py-0 font-regular-12 text-black">
                  {row.occupation}
                </TableCell>
                <TableCell class="h-[35px] px-2.5 py-0 font-regular-12 text-black">
                  {row.priority}
                </TableCell>
                <TableCell class="h-[35px] px-2.5 py-0 font-regular-10 text-black">
                  {row.date}
                </TableCell>
                <TableCell class="h-[35px] px-2.5 py-0">
                  <Badge class="flex items-center gap-0.5 p-[3px] {row.statusBg} rounded text-black font-regular-10">
                    <img
                      class="w-3.5 h-3.5"
                      alt="Status icon"
                      src="/material-symbols-light-hourglass-rounded.svg"
                    />
                    <span>{row.status}</span>
                  </Badge>
                </TableCell>
                <TableCell class="h-[35px] px-2.5 py-0 flex items-center gap-2.5">
                  <Button
                    variant="ghost"
                    size="icon"
                    class="h-3.5 w-3.5 p-0"
                  >
                    <Eye class="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    class="h-3.5 w-3.5 p-0"
                  >
                    <SquarePen class="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    class="h-3.5 w-3.5 p-0"
                  >
                    <Info class="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    class="h-3.5 w-3.5 p-0"
                  >
                    <MoreHorizontal class="h-3.5 w-3.5" />
                  </Button>
                </TableCell>
              </TableRow>
            {/each}
          </TableBody>
        </Table>
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex items-center px-2.5 py-2 relative self-stretch w-full border-t-[0.5px] border-[#bfbfbf] mt-4">
      <div class="flex items-center gap-2.5 relative flex-1 grow">
        <div class="inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 relative">
          <div class="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-black text-[10px] tracking-[0] leading-[10px] whitespace-nowrap">
            <span class="font-light">Showing </span>
            <span class="font-[number:var(--regular-10-font-weight)] font-regular-10 [font-style:var(--regular-10-font-style)] tracking-[var(--regular-10-letter-spacing)] leading-[var(--regular-10-line-height)] text-[length:var(--regular-10-font-size)]">
              1-15
            </span>
            <span class="font-light"> of </span>
            <span class="font-[number:var(--regular-10-font-weight)] font-regular-10 [font-style:var(--regular-10-font-style)] tracking-[var(--regular-10-letter-spacing)] leading-[var(--regular-10-line-height)] text-[length:var(--regular-10-font-size)]">
              47
            </span>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center gap-[15px] p-2.5 relative">
        <Button variant="ghost" size="icon" class="p-0">
          <img
            class="relative w-[18px] h-[18px] mt-[-1.50px] mb-[-1.50px]"
            alt="Prev"
            src="/prev.svg"
          />
        </Button>

        <div class="flex flex-col w-[5px] items-center justify-center gap-2.5 relative">
          <div class="self-stretch opacity-20 font-[number:var(--regular-10-font-weight)] text-[length:var(--regular-10-font-size)] relative mt-[-1.00px] font-regular-10 text-black tracking-[var(--regular-10-letter-spacing)] leading-[var(--regular-10-line-height)] [font-style:var(--regular-10-font-style)]">
            1
          </div>
        </div>

        <div class="flex flex-col w-[5px] items-center justify-center gap-2.5 relative">
          <div class="self-stretch font-[number:var(--regular-10-font-weight)] text-[length:var(--regular-10-font-size)] relative mt-[-1.00px] font-regular-10 text-black tracking-[var(--regular-10-letter-spacing)] leading-[var(--regular-10-line-height)] [font-style:var(--regular-10-font-style)]">
            2
          </div>
        </div>

        <Button variant="ghost" size="icon" class="p-0">
          <img
            class="relative w-[18px] h-[18px] mt-[-1.50px] mb-[-1.50px]"
            alt="Next"
            src="/next.svg"
          />
        </Button>
      </div>
    </div>
  </div>

  <!-- <footer class="flex items-start justify-end px-0 py-2.5 relative self-stretch w-full bg-transparent">
    <div class="flex flex-col items-start gap-2.5 p-2.5 relative flex-1 self-stretch grow" />
    <div class="relative flex-1 self-stretch grow" />
  </footer> -->
</div>