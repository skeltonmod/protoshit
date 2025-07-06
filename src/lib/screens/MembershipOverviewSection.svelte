<script lang="ts">
  import {
    ArrowUp,
    Bell,
    CalendarDays,
    ChevronDown,
    MoveRight,
  } from "lucide-svelte";

  import Badge from "$lib/components/ui/Badge.svelte";
  import Button from "$lib/components/ui/Button.svelte";
  import Card from "$lib/components/ui/Card.svelte";
  import CardContent from "$lib/components/ui/CardContent.svelte";

  import { onMount } from "svelte";
  import Chart from "chart.js/auto";
  import Header from "$lib/components/ui/Header.svelte";

  const metricsData = [
    {
      title: "Total Members",
      value: "28,905",
      percentage: "1.7%",
      comparison: "vs last month",
    },
    {
      title: "New Members",
      value: "725",
      percentage: "5.4%",
      comparison: "vs last month",
    },
    {
      title: "Potential Leads",
      value: "145",
      percentage: "2.7%",
      comparison: "vs last month",
    },
  ];

  const chartSections = [
    {
      title: "METV Class Distribution",
      date: "as of May 31 2025",
      chartId: "pieChart1",
      type: "pie",
    },
    {
      title: "Breakdown of Regular Member Types",
      date: "as of May 31 2025",
      chartId: "pieChart2",
      type: "pie",
    },
    {
      title: "Associate & Regular Members by Branch",
      date: "as of May 31 2025",
      chartId: "barChart",
      type: "bar",
    },
  ];

  const memberBreakdownData = {
    labels: [
      "Active Members",
      "Inactive Members",
      "Suspended Members",
      "Terminated Members",
      "On Leave",
    ],
    datasets: [
      {
        label: "Number of Members",
        data: [18500, 5200, 2100, 1800, 1305],
        backgroundColor: [
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const metvClassData = {
    labels: ["Class A", "Class B", "Class C", "Class D"],
    datasets: [
      {
        data: [45, 25, 20, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const regularMemberTypesData = {
    labels: ["Standard", "Premium", "Gold", "Platinum"],
    datasets: [
      {
        data: [50, 30, 15, 5],
        backgroundColor: [
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const membersByBranchData = {
    labels: ["Branch A", "Branch B", "Branch C", "Branch D", "Branch E"],
    datasets: [
      {
        label: "Regular Members",
        data: [4500, 3800, 3200, 2900, 3100],
        backgroundColor: "rgba(54, 162, 235, 0.8)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Associate Members",
        data: [2200, 1800, 1500, 1200, 1700],
        backgroundColor: "rgba(255, 99, 132, 0.8)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  onMount(() => {
    const memberBreakdownCtx = document
      .getElementById("memberBreakdownChart")
      ?.getContext("2d");
    if (memberBreakdownCtx) {
      new Chart(memberBreakdownCtx, {
        type: "bar",
        data: memberBreakdownData,
        options: {
          indexAxis: "y",
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: "Member Breakdown by Status",
            },
          },
          scales: {
            x: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
            },
          },
        },
      });
    }

    const metvClassCtx = document.getElementById("pieChart1")?.getContext("2d");
    if (metvClassCtx) {
      new Chart(metvClassCtx, {
        type: "pie",
        data: metvClassData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "right",
            },
          },
        },
      });
    }

    // Create pie chart for Regular Member Types
    const regularMemberTypesCtx = document
      .getElementById("pieChart2")
      ?.getContext("2d");
    if (regularMemberTypesCtx) {
      new Chart(regularMemberTypesCtx, {
        type: "pie",
        data: regularMemberTypesData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "right",
            },
          },
        },
      });
    }

    const membersByBranchCtx = document
      .getElementById("barChart")
      ?.getContext("2d");
    if (membersByBranchCtx) {
      new Chart(membersByBranchCtx, {
        type: "bar",
        data: membersByBranchData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
        },
      });
    }
  });
</script>

<div class="flex flex-col h-full w-full">
  <Header />

  <div class="flex-1 overflow-y-auto bg-monochromegray-100 p-6">
    <div class="mb-6">
      <div class="font-semibold text-monochromeblack text-xl">
        Dashboard
        <span
          class="text-[length:var(--regular-14-font-size)] font-regular-14 font-normal"
        >
          (All branches)
        </span>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-6 mb-8">
      {#each metricsData as metric}
        <Card class="bg-white border border-gray-200 shadow-sm rounded-lg">
          <CardContent class="p-4">
            <div class="flex flex-col gap-2">
              <div class="font-regular-14 text-monochromedark-gray">
                {metric.title}
              </div>

              <div class="flex items-center gap-2">
                <div
                  class="font-bold text-lg text-monochromeblack whitespace-nowrap"
                >
                  {metric.value}
                </div>

                <Badge
                  class="bg-green-100 text-green-800 px-2 py-0.5 rounded flex items-center gap-1"
                >
                  <ArrowUp class="w-3 h-3" />
                  <span class="text-xs">
                    {metric.percentage}
                  </span>
                </Badge>
              </div>

              <div class="flex items-center gap-1 text-gray-600">
                <span class="text-xs">
                  {metric.comparison}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      {/each}

      <div class="flex items-end justify-end">
        <Button
          variant="outline"
          class="bg-monochromegray-100 border-[#dddddd] rounded-md flex items-center gap-2"
        >
          <CalendarDays class="w-4 h-4" />
          <span class="text-xs"> This month </span>
          <ChevronDown class="w-4 h-4" />
        </Button>
      </div>
    </div>

    <div class="mb-8">
      <div
        class="flex items-center justify-between border-b border-[#9aa6b2] pb-3 mb-4"
      >
        <div class="flex items-center gap-3">
          <h2 class="font-bold text-lg text-monochromeblack">
            Total Member Breakdown by Status
          </h2>

          <Button
            variant="outline"
            class="px-3 py-1 text-xs rounded-lg border border-[#dddddd]"
          >
            View All
          </Button>
        </div>

        <Button
          variant="outline"
          class="px-3 py-1 rounded-lg border border-[#dddddd] flex items-center gap-2"
        >
          <CalendarDays class="w-4 h-4" />
          <span class="text-xs"> Jan 2024 - May 2025 </span>
          <ChevronDown class="w-4 h-4" />
        </Button>
      </div>

      <div class="bg-white rounded-lg shadow-sm p-4 mb-8">
        <div class="h-[350px] w-full">
          <canvas id="memberBreakdownChart"></canvas>
        </div>
      </div>
    </div>

    <div class="mb-6">
      <div
        class="flex items-center justify-between border-b border-[#9aa6b2] pb-3 mb-4"
      >
        <div class="flex items-center gap-3">
          <h2 class="font-bold text-lg text-monochromeblack">
            Membership Overall Status by Branch
          </h2>

          <Button
            variant="outline"
            class="px-3 py-1 text-xs rounded-lg border border-[#dddddd]"
          >
            View All
          </Button>
        </div>

        <Button
          variant="outline"
          class="px-3 py-1 rounded-lg border border-[#dddddd] flex items-center gap-2"
        >
          <CalendarDays class="w-4 h-4" />
          <span class="text-xs"> Jan 2024 - May 2025 </span>
          <ChevronDown class="w-4 h-4" />
        </Button>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-6 mb-8">
      {#each chartSections as section}
        <Card class="bg-white border border-gray-200 shadow-sm rounded-lg">
          <CardContent class="p-4">
            <div class="flex items-center justify-between mb-3">
              <div>
                <div class="font-medium text-sm text-[#292f3c]">
                  {section.title}
                </div>
                <div class="text-xs text-gray-600">
                  {section.date}
                </div>
              </div>

              <Button
                variant="outline"
                class="bg-monochromewhite px-2 py-1 text-xs rounded-lg border border-[#dddddd] flex items-center gap-1"
              >
                View Report
                <MoveRight class="w-3 h-3" />
              </Button>
            </div>

            <div class="h-[250px] w-full">
              <canvas id={section.chartId}></canvas>
            </div>
          </CardContent>
        </Card>
      {/each}
    </div>
  </div>

  <!-- <footer class="w-full h-[60px] bg-monochromegray-100 border-t border-[#dddddd] flex items-center justify-end px-6">
        
    </footer> -->
</div>
