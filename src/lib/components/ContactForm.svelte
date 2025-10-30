<script lang="ts">
  import Icon from "@iconify/svelte";

  let { fullName, email, message } = $state({
    fullName: "",
    email: "",
    message: "",
  });

  let sendContactError = $state<string | null>(null);
  let sendContactLoading = $state(false);
  let sendContactSuccess = $state(false);
  const handleSendContact = async (e: Event) => {
    e.preventDefault();
  };
</script>

<form action="" onsubmit={handleSendContact}>
  <div>
    <label for="email">Email</label>
    <div class="input flex items-center gap-2">
      <Icon icon="mingcute:mail-line" width="24" height="24" />
      <input
        type="email"
        id="email"
        required
        placeholder="example@email.com"
        bind:value={email}
      />
    </div>
  </div>
  <div>
    <label for="full-name">Full Name</label>
    <div class="input flex items-center gap-2">
      <Icon icon="mingcute:user-1-fill" width="24" height="24" />
      <input
        type="text"
        id="full-name"
        required
        placeholder="John Doe"
        bind:value={fullName}
      />
    </div>
  </div>
  <div>
    <label for="message">Message</label>
    <div class="input flex items-start gap-2">
      <Icon icon="mingcute:mail-line" width="24" height="24" />
      <textarea
        id="message"
        required
        placeholder="Your message"
        bind:value={message}
        rows={4}
      ></textarea>
    </div>
  </div>
  {#if sendContactError}
    <p class="text-red-500 mt-2">Error: {sendContactError}</p>
  {/if}
  {#if sendContactSuccess}
    <p class="text-brand mt-2">Contact email sent successfully.</p>
  {/if}
  <button
    class={`button w-full mt-4 ${sendContactLoading ? "opacity-50 animate-pulse cursor-not-allowed" : ""}`}
    type="submit"
    disabled={sendContactLoading}
    >{sendContactLoading ? "Sending message..." : "Send message"}</button
  >
</form>
