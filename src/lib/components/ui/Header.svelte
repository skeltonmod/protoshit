<script lang="ts">
    import {
        Bell,
        ChevronDown,
    } from 'lucide-svelte';
    import Avatar from '$lib/components/ui/Avatar.svelte';
    import AvatarFallback from '$lib/components/ui/AvatarFallback.svelte';
    import Separator from '$lib/components/ui/Separator.svelte';
</script>

<header
  class="w-full h-[50px] bg-monochromegray-100 border-b border-[#dddddd] flex items-center justify-end sticky top-0 z-10"
>
  <div class="flex items-center gap-2.5 p-2.5">
    <div class="flex items-center">
      <Bell class="h-5 w-5" />
    </div>

    <div class="flex items-center gap-2.5 ml-4">
      <Separator orientation="vertical" class="h-6" />

      <Avatar class="h-8 w-8">
        <AvatarFallback>GN</AvatarFallback>
      </Avatar>

      <div class="font-regular-14 text-monochromeblack">Gipre Naparan</div>

      <ChevronDown class="h-5 w-5" />
    </div>
  </div>
</header>
