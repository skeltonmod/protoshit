<script lang="ts">
  import { cn } from "$lib/utils";

  export let className: string = "";
</script>

<tbody class={cn("[&_tr:last-child]:border-0", className)} {...$$restProps}>
  <slot />
</tbody>