<script lang="ts">
  import { cn } from "$lib/utils";

  export let className: string = "";
</script>

<tr class={cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)} {...$$restProps}>
  <slot />
</tr>