<script lang="ts">
  import { cn } from "$lib/utils";

  export let className: string = "";
</script>

<td class={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...$$restProps}>
  <slot />
</td>