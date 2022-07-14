<script>
    import "../app.css"
    import AppSettings from "../context/appSettings.svelte"
</script>

<AppSettings>
    <div class="prose prose-stone dark:prose-invert prose-headings:underline p-12 print:p-0">
        <slot/>
    </div>
</AppSettings>