<script lang="ts">
  const socialMedia = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/koneksa",
    },
  ];

  const contact = [
    {
      label: "Email",
      href: "mailto:info@koneksa.id",
    },
  ];

  const legal = [
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      label: "Terms of Service",
      href: "/terms-of-service",
    },
    {
      label: "Certificate",
      href: "/certificate",
    },
  ];

  let { navigation } = $props();
</script>

<footer class="pt-12 pb-24 bg-brand text-white relative z-10 min-h-[25vh]">
  <div class="container mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8">
      <div>
        <img
          src="/logo/koneksa_logotype.png"
          alt="Koneksa"
          class="h-10 brightness-0 invert"
        />
        <p>PT Koneksi Kreatif Nusantara (Koneksa)</p>
        <p>Connect Together, Made Simple.</p>
      </div>
      <div>
        <h4 class="font-medium">Quick Links</h4>
        <ul>
          {#each navigation as item}
            <li>
              <a href={item.href}>{item.label}</a>
            </li>
          {/each}
        </ul>
      </div>
      <div>
        <h4 class="font-medium">Legal</h4>
        <ul>
          {#each legal as item}
            <li>
              <a href={item.href}>{item.label}</a>
            </li>
          {/each}
        </ul>
        <div class="bg-white p-4 rounded-tl-3xl rounded-br-3xl mt-4">
          <div class="flex items-center justify-center gap-2">
            <img
              src="/certificate/logo-komdigi.png"
              alt="Komdigi"
              class="h-10"
            />
            <img src="/certificate/logo-pse.png" alt="Komdigi" class="h-10" />
          </div>
          <p class="text-black/70 text-sm text-center">
            TDPSE: 015335.01/DJAI.PSE/08/2024
          </p>
        </div>
      </div>
    </div>
    <hr class="my-8 border-2 border-white/10" />
    <p class="text-center text-white mt-8">
      &copy; {new Date().getFullYear()} PT Koneksi Kreatif Nusantara (Koneksa). All
      rights reserved.
    </p>
  </div>
</footer>
