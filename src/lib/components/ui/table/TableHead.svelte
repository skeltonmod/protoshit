<script lang="ts">
  import { cn } from "$lib/utils";

  export let className: string = "";
</script>

<th
  class={cn(
    "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
    className
  )}
  {...$$restProps}
>
  <slot />
</th>
