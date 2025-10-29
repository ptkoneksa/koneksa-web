<script lang="ts">
  import { formatKonvyTalentContactLink } from "$lib/util/link.js";
  import { formatNumberShort } from "$lib/util/number.js";
  import Icon from "@iconify/svelte";

  let { data } = $props();
  let { talent } = data;

  const socialMediaIcons = {
    INSTAGRAM: "logos:instagram-icon",
    LINKEDIN: "logos:linkedin-icon",
    X: "logos:x",
    YOUTUBE: "logos:youtube-icon",
    TIKTOK: "logos:tiktok-icon",
    FACEBOOK: "logos:facebook-icon",
    GITHUB: "logos:github-icon",
  };

  const contactIcons = {
    EMAIL: "logos:google-gmail",
    WHATSAPP: "logos:whatsapp-icon",
    TELEGRAM: "logos:telegram",
    INSTAGRAM: "logos:instagram-icon",
  };
</script>

<svelte:head>
  <title>{talent?.name} | Konvy | Koneksa Environment</title>
  <meta
    name="description"
    content="{talent?.description ?? ''} - Konvy | Koneksa Environment"
  />
  <meta
    name="keywords"
    content="{talent?.name ?? ''} - Konvy | Koneksa Environment"
  />
  <meta name="author" content="PT Koneksi Kreatif Nusantara (Koneksa)" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
</svelte:head>

{#if data.error}
  <div class="container mx-auto p-4 pb-24">
    <h1>Error</h1>
    <p>{data.error}</p>
  </div>
{/if}

{#if talent}
  <div class="container mx-auto p-4 pb-24">
    <!-- Profile -->
    <section
      id="profile"
      class="min-h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <div
        class="card bg-brand aspect-square text-white relative overflow-hidden"
      >
        <img
          src="/background/konvy_background_loop.png"
          alt="Konvy Background"
          class="absolute top-0 left-0 w-full h-full object-cover"
        />
        {#if talent.imageUrl}
          <img
            src={talent.imageUrl}
            alt={talent.name}
            class="absolute top-0 left-0 w-full h-full object-cover"
          />
        {/if}
      </div>

      <div class="col-span-1 lg:col-span-2">
        <div>
          <h1 class="text-brand tracking-tighter font-medium">{talent.name}</h1>
          <h3 class="text-black/70">{talent.description}</h3>
        </div>

        <!-- Social Media -->
        <div class="mt-4">
          <h2>Social Media</h2>
          <div class="flex items-center gap-8 flex-wrap">
            {#each talent.socialMedias as socialMedia}
              <a
                href={socialMedia.url}
                target="_blank"
                class="bg-white border border-b-4 border-black/25 hover:bg-black/5 rounded-tl-xl rounded-br-xl p-2 transition duration-300"
              >
                <div class="flex items-center gap-2">
                  <div
                    class="w-10 h-10 rounded-tl-xl rounded-br-xl bg-white/70 flex items-center justify-center p-2"
                  >
                    {#if socialMediaIcons[socialMedia.type as unknown as keyof typeof socialMediaIcons]}
                      <Icon
                        icon={socialMediaIcons[
                          socialMedia.type as unknown as keyof typeof socialMediaIcons
                        ]}
                        width="256"
                        height="256"
                      />
                    {:else}
                      <p class="text-black/70 text-xs text-center">
                        {socialMedia.type.toString().substring(0, 2)}
                      </p>
                    {/if}
                  </div>
                  <div>
                    <div class="flex items-center gap-2">
                      <p class="text-black/70 text-xs">{socialMedia.type}</p>
                      <p class="text-xs">
                        {socialMedia.followers
                          ? formatNumberShort(socialMedia.followers)
                          : "N/A"}
                      </p>
                    </div>
                    <p>{socialMedia.value}</p>
                  </div>
                </div>
              </a>
            {/each}
          </div>
        </div>
      </div>
    </section>

    <!-- Rate Cards -->
    <section id="rate-cards" class="mt-8">
      <h2>Rate Cards</h2>
      {#if talent.rateCards.length == 0}
        <p class="text-black/70">No rate cards found</p>
      {:else}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {#each talent.rateCards as rateCard}
            <div
              class="card bg-white border border-b-8 border-black/10 hover:bg-white/70 transition duration-300 flex flex-col"
            >
              <div class="flex-1">
                <h3>{rateCard.title}</h3>
                <p class="text-black/70">{rateCard.description}</p>
                <ul class="flex items-center gap-x-8 flex-wrap">
                  {#each rateCard.benefits as benefit, index}
                    <li class="text-black/70 flex items-center gap-2">
                      <Icon
                        icon="tabler:check"
                        width="24"
                        height="24"
                        class="text-green-500"
                      />
                      {benefit}
                    </li>
                  {/each}
                </ul>
              </div>
              <div
                class="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 mt-4"
              >
                <p class="text-black/70">
                  {Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: rateCard.currency,
                  }).format(rateCard.rate)}
                </p>
                <button class="button truncate max-w-48"
                  >Hire {talent.name}</button
                >
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </section>

    <!-- Contact -->
    <section id="contact" class="mt-8">
      <h2>Contact</h2>
      <div class="flex items-center gap-4">
        {#each talent.contacts as contact}
          <a
            href={formatKonvyTalentContactLink(contact.type, contact.value)}
            target="_blank"
            class="rounded-tl-xl rounded-br-xl bg-white/70 flex items-center justify-center px-4 py-2 space-x-2"
          >
            {#if contactIcons[contact.type as unknown as keyof typeof contactIcons]}
              <Icon
                icon={contactIcons[
                  contact.type as unknown as keyof typeof contactIcons
                ]}
                width="24"
                height="24"
              />
            {:else}
              <p class="text-black/70 text-xs text-center">
                {contact.type.toString().substring(0, 2)}
              </p>
            {/if}
            <p class="text-xs text-black/70">
              {contact.value}
              {#if contact.isManager}
                <span class="text-xs text-brand/70"> (Manager) </span>
              {/if}
            </p>
          </a>
        {/each}
      </div>
    </section>
  </div>
{/if}
